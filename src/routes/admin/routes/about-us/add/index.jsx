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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
import { useImageContext } from "@/context/imageUpload.context";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import axios from "axios";
import host from "@/utils/host";
import { getAuthConfig } from "@/utils/headerConfig";
import { CustomEditor } from "@/components/wysiwyg/editor";

const formSchema = z.object({
  about_category: z.string({
    required_error: "Choose the about us section you wish to update.",
  }),
  about_us: z.string({ required_error: "This field is required" }),
});

const AboutUs = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const [data, setData] = useState({
    about_us_content: "",
  });

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(values) {}

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let photos = [];
      // Check if the content length is less than 8
      if (!selectedValue || data?.about_us_content?.length < 50) {
        toast({
          variant: "destructive",
          description: "The content must be at least 50 characters long.",
        });
      }
      if (selectedImages.length > 0 && files) {
        photos = await uploadFilesToCloudinary(files, "hrcImages");
      }

      const formData = {
        category: selectedValue,
        about_us_content: data?.about_us_content,
        image_url: photos[0]?.secure_url || null,
        image_id: photos[0]?.public_id || null,
        model: "aboutUs",
      };

      const response = await axios.post(
        `${host.url}/data/aboutUs`,
        formData,
        getAuthConfig()
      );
      // Success Toast
      if (response) {
        toast({
          description: `Created successfully.`,
          className: "bg-green-500 text-white",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.error(error);
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
      <div className="h-fit w-full flex flex-col pb-[100px] md:pb-20">
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>About Us</h1>
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
                    // Handle the change of selected value
                    const handleChange = (value) => {
                      field.onChange(value);
                      setSelectedValue(value);
                    };

                    return (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={handleChange}
                          defaultValue={field.value}
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
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="flex flex-col relative h-[400px]">
                  <FormLabel className="mb-5">About Us</FormLabel>
                  <FormField
                    control={form.control}
                    name="about_us_content"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <CustomEditor
                            value={field.value}
                            className="h-[300px]"
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {selectedValue !== "our_vision" &&
                  selectedValue !== "our_mission" && (
                    <div className="flex flex-col space-y-5">
                      <span>
                        Add Photo <i className="italic text-sm">(optional)</i>
                      </span>
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

                      <div className="w-full grid md:grid-cols-10 grid-cols-3 gap-3">
                        <SelectedImagesDisplay
                          images={selectedImages}
                          onRemoveImage={removeSelectedImage}
                        />
                      </div>
                    </div>
                  )}

                <Button
                  onClick={handleSubmit}
                  id="submitBtn"
                  disabled={loading || !selectedValue}
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

export default AboutUs;
