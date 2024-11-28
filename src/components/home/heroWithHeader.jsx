import Overlay from "../../assets/images/banner/rectangle-bg.png";

import "swiper/css";
import "swiper/css/navigation";

import HeroSectionSlider from "../slider/heroSection.slider";
import Header from "../header";
import { useLocation } from "react-router-dom";

const HeroWithHeader = () => {
  const location = useLocation();
  return (
    <div
      className="h-full bg-cover"
      style={{
        backgroundImage: `url(${Overlay})`,
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      {location.pathname !== "/livestream" && <HeroSectionSlider />}
    </div>
  );
};

export default HeroWithHeader;
