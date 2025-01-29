/* eslint-disable no-unused-vars */
import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
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

import { Textarea } from "@/components/ui/textarea";
import { useImageContext } from "@/context/imageUpload.context";
import { useToast } from "@/hooks/use-toast";
import { __, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { config } from "@/utils/headerConfig";
import axios from "axios";
import host from "@/utils/host";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import { CustomEditor } from "@/components/wysiwyg/editor";
import { CustomEditorPreview } from "@/components/wysiwyg/preview";

const formSchema = z.object({
  minsitry_description: z
    .string({ required_error: "This field is required" })
    .min(5, { message: "description must be at least 5 characters long." }),
  minsitry_category: z.string({ required_error: "Choose ministry category" }),
});

const EditMinistyPage = () => {
  const params = useParams();
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({
    ministry_description: "",
    ministry_category: "",
    ministry_image_url: "",
  });

  const { toast } = useToast();
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
          `${host.url}/ministry/${params.id}`,
          {
            id: params.id,
            field: "ministry_image_url",
            ministry_image_url: photos[0]?.secure_url,
            ministry_image_id: photos[0]?.public_id,
            model: "ministry",
          },
          config
        );
        if (data?.status === "success") {
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

  useEffect(() => {
    const getMinistryData = async () => {
      try {
        const response = await axios.get(
          `${host.url}/ministry/${params.id}/ministry`
        );
        setData(response.data?.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getMinistryData();
  }, [params.id]);

  async function onSubmit(values) {}
  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/ministry`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Ministry</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="ministry_category"
                  render={({ field }) => {
                    const handleChange = (value) => {
                      field.onChange(value);
                      handleInputChange({
                        target: { name: "ministry_category", value },
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
                              <SelectValue
                                placeholder={
                                  data?.ministry_category
                                    ? data.ministry_category.toUpperCase() +
                                      " MINISTRY"
                                    : "Select an option"
                                }
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="youth">
                              Youth Ministry
                            </SelectItem>
                            <SelectItem value="children">
                              Children Ministry
                            </SelectItem>
                            <SelectItem value="music">
                              Music Ministry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[12px] text-[#333]">
                          Choose ministry category.
                        </FormDescription>
                        <Button
                          type="button"
                          disabled={!field.value}
                          id="ministry_category"
                          onClick={() =>
                            handleFormUpdate(
                              "ministry_category",
                              params.id,
                              data.ministry_category,
                              `ministry/${params.id}`,
                              "ministry"
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
                  <FormLabel>Description</FormLabel>
                  {editing ? (
                    <FormField
                      control={form.control}
                      name="ministry_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <CustomEditor
                              value={data.ministry_description}
                              onChange={(value) => {
                                handleInputChange({
                                  target: {
                                    name: "ministry_description",
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
                            id="ministry_description"
                            onClick={() =>
                              handleFormUpdate(
                                "ministry_description",
                                params.id,
                                data?.ministry_description,
                                `ministry/${params.id}`,
                                "ministry"
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
                      <CustomEditorPreview value={data?.ministry_description} />
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
                          : data?.ministry_image_url
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

export default EditMinistyPage;
