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

import { toast } from "@/hooks/use-toast";
import { __, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import axios from "axios";
import host from "@/utils/host";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { config } from "@/utils/headerConfig";

const formSchema = z.object({
  full_name: z.string({ required_error: "This field is required" }),
  position: z.string({ required_error: "This field is required" }),
  category: z.string({ required_error: "This field is required" }),
});

const EditTeam = () => {
  const params = useParams();
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const [data, setData] = useState({
    full_name: "",
    category: "",
    position: "",
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
          `${host.url}/team/${params.id}`,
          {
            id: params.id,
            field: "image_url",
            image_url: photos[0]?.secure_url,
            image_id: photos[0]?.public_id,
            model: "team",
          },
          config
        );
        if (data?.data.status === "success") {
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

  async function onSubmit(values) {}

  useEffect(() => {
    const getTeamData = async () => {
      try {
        const response = await axios.get(`${host.url}/team/${params.id}/team`);
        setData(response.data?.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getTeamData();
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="w-full flex flex-col pb-[100px] md:pb-20 h-screen overflow-y-scroll">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/team`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Edit Team member information</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          {...field}
                          value={data.full_name} // Controlled input
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                          className="form-input"
                          name="full_name"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Team member&apos;s fullname
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!data.full_name} // Disable if the value is empty
                        id="full_name"
                        onClick={() =>
                          handleFormUpdate(
                            "full_name",
                            params.id,
                            data.full_name,
                            `team/${params.id}`
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
                              <SelectValue
                                placeholder={
                                  data?.category
                                    ? data.category
                                        .replace(/_/g, " ")
                                        .toUpperCase()
                                    : "Select an option"
                                }
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="board_of_governor">
                              Board of Governors
                            </SelectItem>
                            <SelectItem value="dean_of_academics_affair">
                              Dean of Academics Affair
                            </SelectItem>
                            <SelectItem value="registrar">Registrar</SelectItem>
                            <SelectItem value="bursar">Bursar</SelectItem>
                            <SelectItem value="director_of_christian_services">
                              Director of Christian Services
                            </SelectItem>
                            <SelectItem value="provost">Provost</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[12px] text-[#333]">
                          Select the corresponding staff position.
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
                              `team/${params.id}`
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

                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          {...field}
                          value={data.position} // Controlled input
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                          className="form-input"
                          name="position"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        position
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!data.position}
                        id="position"
                        onClick={() =>
                          handleFormUpdate(
                            "position",
                            params.id,
                            data.position,
                            `team/${params.id}`
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

export default EditTeam;
