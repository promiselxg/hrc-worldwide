/* eslint-disable no-unused-vars */
//import RichTextEditor from "@/components/RichTextEditor";
import RichTextEditor from "@/components/RichTextEditor";
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
import { __, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import axios from "axios";
import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
import { useImageContext } from "@/context/imageUpload.context";
import host from "@/utils/host";
import { CustomEditorPreview } from "@/components/wysiwyg/preview";
import { CustomEditor } from "@/components/wysiwyg/editor";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { getAuthConfig } from "@/utils/headerConfig";

const formSchema = z.object({
  blog_title: z
    .string({ required_error: "This field is required" })
    .min(5, { message: "post title must be at least 5 characters long." }),
  tag: z.string().optional(),
});

const EditBlogPost = () => {
  const params = useParams();
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({
    blog_tag: "",
    blog_content: "",
    blog_title: "",
    image_url: "",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleImageUpload = async (field) => {
    try {
      __(field).innerHTML = "Updating...";
      __(field).disabled = true;
      let photos = [];
      if (selectedImages.length > 0 && files) {
        photos = await uploadFilesToCloudinary(files, "hrcImages");
      }
      if (photos) {
        const { data } = await axios.put(
          `${host.url}/blog/${params.id}`,
          {
            id: params.id,
            field: "blog_post_image_url",
            photos,
            model: "blogPost",
          },
          getAuthConfig()
        );
        if (data.status === "success") {
          toast({
            description: `Updated successfully.`,
            className: "bg-green-500 text-white",
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      __(field).innerHTML = "Update";
      __(field).disabled = false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(values) {}

  useEffect(() => {
    const getRecord = async () => {
      if (!params?.id || params.id === "") {
        window.location = "/admin/blog";
      }
      try {
        const { data } = await axios.get(
          `${host.url}/blog/${params?.id}/blogPost`
        );
        if (data?.message === "No Record found with the ID Provided") {
          window.location = "/admin/blog";
        }
        setData(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecord();
  }, [params.id]);

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
            <h1 className={cn(`font-bold`)}>Edit blog post</h1>
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
                          value={data?.blog_title}
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this blog a title.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="blog_title"
                        onClick={() =>
                          handleFormUpdate(
                            "blog_title",
                            params.id,
                            data.blog_title,
                            `blog/${params.id}`,
                            "blogPost"
                          )
                        }
                      >
                        Update
                      </Button>
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
                          value={data?.blog_tag}
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        seperated by comma (e.g, Evangelism, Crusade, etc)
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="blog_tag"
                        onClick={() =>
                          handleFormUpdate(
                            "blog_tag",
                            params.id,
                            data.blog_tag,
                            `blog/${params.id}`,
                            "blogPost"
                          )
                        }
                      >
                        Update
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-5">
                  <FormLabel>Blog Content</FormLabel>
                  {editing ? (
                    <FormField
                      control={form.control}
                      name="blog_content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <CustomEditor
                              value={data?.blog_content}
                              onChange={(value) => {
                                handleInputChange({
                                  target: {
                                    name: "blog_content",
                                    value: value,
                                  },
                                });
                                field.onChange(value);
                              }}
                            />
                          </FormControl>

                          <Button
                            type="button"
                            disabled={!field.value}
                            id="blog_content"
                            onClick={() =>
                              handleFormUpdate(
                                "blog_content",
                                params.id,
                                data.blog_content,
                                `blog/${params.id}`,
                                "blogPost"
                              )
                            }
                          >
                            Update
                          </Button>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : (
                    <>
                      <CustomEditorPreview value={data?.blog_content} />
                      <Button
                        type="button"
                        className="w-fit"
                        onClick={() => setEditing(!editing)}
                      >
                        Edit Content
                      </Button>
                    </>
                  )}
                </div>
                <div className="flex flex-col space-y-5">
                  <span>Edit Photo</span>
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
                      images={
                        selectedImages.length > 0
                          ? selectedImages
                          : data?.image_url
                      }
                      onRemoveImage={removeSelectedImage}
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  id="submitBtn"
                  onClick={() => handleImageUpload("submitBtn")}
                  disabled={selectedImages.length < 1 || !files}
                >
                  Update
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlogPost;
