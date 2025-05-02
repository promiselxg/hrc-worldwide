/* eslint-disable no-unused-vars */
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";
import { __, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { useImageContext } from "@/context/imageUpload.context";
import host from "@/utils/host";
import axios from "axios";
import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
import { CustomEditorPreview } from "@/components/wysiwyg/preview";
import { CustomEditor } from "@/components/wysiwyg/editor";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { getAuthConfig } from "@/utils/headerConfig";

const formSchema = z.object({
  category: z.string({
    required_error: "Select the section",
  }),
  about_us_content: z.string({ required_error: "This field is required" }),
});

const EditAboutUs = () => {
  const params = useParams();
  const { toast } = useToast();
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const [data, setData] = useState({
    category: "",
    about_us_content: "",
    image_url: "",
  });
  const [editing, setEditing] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

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
          `${host.url}/data/${params.id}`,
          {
            id: params.id,
            field: "image_url",
            photos,
            model: "aboutUs",
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

  useEffect(() => {
    const getAboutUsData = async () => {
      try {
        const response = await axios.get(
          `${host.url}/data/${params.id}/aboutUs`
        );
        setData(response.data?.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getAboutUsData();
  }, [params.id]);

  async function onSubmit(values) {}

  return (
    <>
      <div className="w-full flex flex-col pb-[100px] md:pb-20 h-screen overflow-y-scroll">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/about-us`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Edit About Us</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => {
                    const handleChange = (value) => {
                      field.onChange(value);
                      handleInputChange({
                        target: { name: "category", value },
                      });
                    };

                    return (
                      <FormItem>
                        <FormLabel>Catgeory</FormLabel>
                        <Select
                          onValueChange={handleChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the section" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hrc">HRC Worldwide</SelectItem>
                            <SelectItem value="rbti">About RBTI</SelectItem>
                            <SelectItem value="our_vision">
                              Our Vision
                            </SelectItem>
                            <SelectItem value="our_mission">
                              Our Mission
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[12px] text-[#333]">
                          Select the section
                        </FormDescription>
                        <Button
                          type="button"
                          disabled={!field.value}
                          id="category"
                          onClick={() =>
                            handleFormUpdate(
                              "category",
                              params.id,
                              data.category,
                              `data/${params.id}`,
                              "aboutUs"
                            )
                          }
                        >
                          Update
                        </Button>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="flex flex-col space-y-5">
                  <FormLabel>Blog Content</FormLabel>
                  {editing ? (
                    <FormField
                      control={form.control}
                      name="about_us_content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <CustomEditor
                              value={data?.about_us_content}
                              onChange={(value) => {
                                handleInputChange({
                                  target: {
                                    name: "about_us_content",
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
                            id="about_us_content"
                            onClick={() =>
                              handleFormUpdate(
                                "about_us_content",
                                params.id,
                                data.about_us_content,
                                `data/${params.id}`,
                                "aboutUs"
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
                      <CustomEditorPreview value={data?.about_us_content} />
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
                {data.category !== "our_vision" &&
                  data.category !== "our_mission" && (
                    <>
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
                                : data?.image_url || ""
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
                    </>
                  )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAboutUs;
