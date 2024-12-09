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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useImageContext } from "@/context/imageUpload.context";
import { useToast } from "@/hooks/use-toast";
import { __, cn } from "@/lib/utils";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import { config } from "@/utils/headerConfig";
import host from "@/utils/host";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  description: z
    .string({ required_error: "Give this banner a description." })
    .min(5, { message: "the description must be at least 5 characters long." }),
  banner_position: z.string({ required_error: "This field is required" }),
});

const EditBannerPage = () => {
  const params = useParams();
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const [data, setData] = useState({
    description: "",
    banner_position: "",
    imageUrl: "",
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
          `${host.url}/banner/${params.id}`,
          {
            id: params.id,
            field: "image",
            photos,
            model: "banner",
          },
          config
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

  useEffect(() => {
    const getBannerData = async () => {
      try {
        const response = await axios.get(
          `${host.url}/banner/${params.id}/banner`
        );
        setData(response.data?.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getBannerData();
  }, [params.id]);

  async function onSubmit(values) {}
  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/banner`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Edit Banner</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Description"
                          {...field}
                          value={data?.description}
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this banner a description.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="description"
                        onClick={() =>
                          handleFormUpdate(
                            "description",
                            params.id,
                            data.description,
                            `banner/${params.id}`,
                            "banner"
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
                  name="banner_position"
                  render={({ field }) => {
                    const handleChange = (value) => {
                      field.onChange(value);
                      handleInputChange({
                        target: { name: "banner_position", value },
                      });
                    };

                    return (
                      <FormItem>
                        <FormLabel>Banner position</FormLabel>
                        <Select
                          onValueChange={handleChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  data?.banner_position
                                    ? data.banner_position
                                    : "select banner position"
                                }
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="9">9</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[12px] text-[#333]">
                          this is the order the banner will appear on the
                          website
                        </FormDescription>
                        <Button
                          type="button"
                          disabled={!field.value}
                          id="banner_position"
                          onClick={() =>
                            handleFormUpdate(
                              "banner_position",
                              params.id,
                              data.banner_position,
                              `team/${params.id}`,
                              "banner"
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
                          : data?.imageUrl
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

export default EditBannerPage;
