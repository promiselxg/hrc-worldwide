/* eslint-disable no-undef */
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
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import host from "@/utils/host";
import { Navigate } from "react-router-dom";

const formSchema = z.object({
  description: z
    .string({ required_error: "Give this banner a description." })
    .min(5, { message: "the description must be at least 5 characters long." }),
  banner_position: z.string({ required_error: "This field is required" }),
});

const AddBanner = () => {
  const [loading, setLoading] = useState(false);

  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();

  const { toast } = useToast();

  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("userInfo"))}`,
    },
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);

    // Validate required fields
    const requiredFields = ["description", "banner_position"];
    const missingFields = requiredFields.filter((field) => !values[field]);

    if (missingFields.length > 0) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Missing Required Fields",
        description: `Please fill out the following fields: ${missingFields.join(
          ", "
        )}`,
      });
      return;
    }

    try {
      let photos = [];

      // Upload images if selected
      if (selectedImages.length > 0 && files) {
        photos = await Promise.all(
          Object.values(files).map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "hrcImages");
            formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
            formData.append(
              "timestamp",
              Math.round(new Date().getTime() / 1000)
            );

            // Call Cloudinary API
            const { data } = await axios.post(
              `https://api.cloudinary.com/v1_1/promiselxg/image/upload`,
              formData
            );
            return data;
          })
        );
      }

      // Prepare data for submission
      const data = {
        ...values,
        imageUrl: photos[0].secure_url,
        image_id: photos[0].public_id,
      };

      // Submit data to the backend
      const response = await axios.post(`${host.url}/banner`, data, config);
      // Success Toast
      if (response) {
        toast({
          description: `Created successfully.`,
          className: "bg-green-500 text-white",
        });
      }
      // Redirect
      window.location.reload();
    } catch (error) {
      console.error("Error during submission:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="h-fit w-full flex flex-col pb-[100px] md:pb-20">
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Add new Banner</h1>
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
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this banner a description.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="banner_position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="select banner position" />
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
                        this is the order the banner will appear on the website
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-5">
                  <span>Add Photo</span>
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
                    multiple
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
                  type="submit"
                  id="submitBtn"
                  disabled={loading || selectedImages.length < 1 || !files}
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

export default AddBanner;
