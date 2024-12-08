/* eslint-disable no-unused-vars */
import "../../admin.css";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import Editor from "@/components/editor/editor";
import { useImageContext } from "@/context/imageUpload.context";
import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
import { useEditorContext } from "@/context/editor.context";
import { generateSlug } from "@/utils/generateSlug";
import axios from "axios";
import host from "@/utils/host";
import { config } from "@/utils/headerConfig";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";

const formSchema = z.object({
  blog_title: z
    .string({ required_error: "This field is required" })
    .min(5, { message: "post title must be at least 5 characters long." }),
  blog_tag: z.string().optional(),
});

const AddBlogPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState("");
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_tag: "",
  });

  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const { quillRef, readOnly, editorContent, setEditorContent } =
    useEditorContext();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blog_title: "",
      tag: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function onSubmit(values) {}
  // Generate Slug
  const handleGenerateSlug = (text) => {
    setSlug(generateSlug(text));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let photos = [];
      if (quillRef.current) {
        // Get HTML content
        const htmlContent = quillRef?.current?.root?.innerHTML;

        // Check if the content length is less than 8
        if (!formData.blog_title || (htmlContent && htmlContent.length < 50)) {
          toast({
            variant: "destructive",
            description: "The content must be at least 50 characters long.",
          });
        }
        if (selectedImages.length > 0 && files) {
          photos = await uploadFilesToCloudinary(files, "hrcImages");
        }

        const data = {
          blog_title: formData?.blog_title,
          blog_slug: slug,
          blog_tag: formData?.blog_tag,
          blog_content: htmlContent,
          blog_author: "",
          image_url: photos[0]?.secure_url || null,
          image_id: photos[0]?.public_id || null,
        };

        const response = await axios.post(`${host.url}/blog`, data, config);
        // Success Toast
        if (response) {
          toast({
            description: `Created successfully.`,
            className: "bg-green-500 text-white",
          });
          setTimeout(() => {
            window.location = "/admin/blog";
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description:
          error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col pb-[100px] md:pb-20 overflow-y-scroll">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/blog`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Add new blog post</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="blog_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post&apos;s Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Post's title"
                          {...field}
                          className="form-input"
                          value={formData?.blog_title}
                          onChange={handleChange}
                          onKeyUp={() =>
                            handleGenerateSlug(formData?.blog_title)
                          }
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this blog a title.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>slug</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="slug"
                          {...field}
                          disabled
                          value={slug}
                          //defaultValue={slug}
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        This is field is auto-generated
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="blog_tag"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Tag <span className="italic text-sm">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tag"
                          {...field}
                          className="form-input"
                          id="blog_tag"
                          value={formData?.blog_tag}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        seperated by comma (e.g, Evangelism, Crusade, etc)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-5 h-[400px]">
                  <FormLabel>Blog Content</FormLabel>
                  <Editor
                    ref={quillRef}
                    readOnly={readOnly}
                    className="h-[300px]"
                    defaultValue={
                      editorContent || "<p>Start editing here...</p>"
                    }
                    onTextChange={(delta, oldDelta, source) => {
                      // Update editor content state on change
                      if (quillRef.current) {
                        setEditorContent(quillRef.current.root.innerHTML);
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-5">
                  <span>Add cover Photo</span>
                  <label htmlFor="files" className="w-fit ">
                    <CloudUpload
                      size={60}
                      color="#171726"
                      className="cursor-pointer"
                    />
                  </label>
                  <input
                    type="file"
                    name="files"
                    id="files"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  <div className="w-fit grid md:grid-cols-10 grid-cols-3 gap-3">
                    <SelectedImagesDisplay
                      images={selectedImages}
                      onRemoveImage={removeSelectedImage}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleSubmit}
                  id="submitBtn"
                  disabled={
                    loading ||
                    !formData.blog_title ||
                    selectedImages.length === 0
                  }
                >
                  {loading && <Loader2 className="animate-spin" />}
                  {loading ? "Please wait" : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlogPage;
