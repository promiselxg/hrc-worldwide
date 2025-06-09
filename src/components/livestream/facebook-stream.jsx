/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * FacebookStream Component
 *
 * Props:
 * - pageId: Facebook Page ID
 * - pageName: Facebook Page Username (used for video URL)
 * - appId: Facebook App ID (required for SDK mode)
 * - accessToken: Facebook Page Access Token
 * - useSDK: Whether to use Facebook SDK (default: false)
 * - showComments: Show comments under the video (SDK only)
 * - autoplay: Autoplay video (default: true)
 * - width: Width of the video (default: 100%)
 * - height: Height of the video (default: 500px)
 * - refreshInterval: How often to check for new live videos (ms, default: 60000)
 */
const FacebookStream = ({
  pageId,
  pageName,
  appId,
  accessToken,
  useSDK = false,
  showComments = false,
  autoplay = true,
  width = "100%",
  height = "500px",
  refreshInterval = 60000,
}) => {
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  const videoUrl = videoId
    ? `https://www.facebook.com/${pageName}/videos/${videoId}`
    : "";

  // Load Facebook SDK
  useEffect(() => {
    if (!useSDK || !appId) return;

    if (!document.getElementById("facebook-jssdk")) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId,
          xfbml: true,
          version: "v23.0",
        });
      };

      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      document.body.appendChild(script);
    } else if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [useSDK, appId]);

  useEffect(() => {
    if (useSDK && window.FB && videoId) {
      window.FB.XFBML.parse();
    }
  }, [useSDK, videoId]);

  const handleLoad = () => setLoading(false);

  // Fetch live video with auto-refresh
  useEffect(() => {
    let intervalId;

    const fetchLiveVideo = async () => {
      try {
        const { data } = await axios.get(
          `https://graph.facebook.com/v23.0/${pageId}/live_videos?status=LIVE_NOW&access_token=${accessToken}`
        );
        if (data.data && data.data.length > 0) {
          const newVideoId = data.data[0].id;
          if (newVideoId !== videoId) {
            setVideoId(newVideoId);
          }
        } else {
          setVideoId(null);
        }
      } catch (error) {
        console.error("Error fetching live video:", error);
        setVideoId(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveVideo();
    intervalId = setInterval(fetchLiveVideo, refreshInterval);

    return () => clearInterval(intervalId);
  }, [pageId, accessToken, refreshInterval, videoId]);

  if (!videoId) {
    return (
      <div className="text-center text-gray-500 py-6">
        {loading
          ? "Checking for live stream..."
          : "No live stream available right now."}
      </div>
    );
  }

  return (
    <div>
      {loading && (
        <div className="w-full bg-gray-300 animate-pulse" style={{ height }} />
      )}

      {useSDK ? (
        <div
          className="fb-video"
          data-href={videoUrl}
          data-width={width}
          data-show-text="false"
          data-autoplay={autoplay}
        />
      ) : (
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
            videoUrl
          )}&show_text=false&autoplay=${autoplay}`}
          width={width}
          height={height}
          style={{
            border: "none",
            overflow: "hidden",
            display: loading ? "none" : "block",
          }}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          onLoad={handleLoad}
        />
      )}

      {showComments && useSDK && (
        <div
          className="fb-comments mt-4"
          data-href={videoUrl}
          data-width={width}
          data-numposts="5"
        />
      )}
    </div>
  );
};

export default FacebookStream;
