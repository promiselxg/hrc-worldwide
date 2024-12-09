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
import { useImageContext } from "@/context/imageUpload.context";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import host from "@/utils/host";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { CloudUpload, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { config } from "@/utils/headerConfig";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  full_name: z.string({ required_error: "This field is required" }),
  position: z.string({ required_error: "This field is required" }),
  category: z.string({ required_error: "This field is required" }),
});

const AddTeamMember = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      position: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    // Validate required fields
    const requiredFields = ["full_name", "position", "category"];
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
    } else {
      try {
        let photos = [];
        if (selectedImages.length > 0 && files) {
          photos = await uploadFilesToCloudinary(files, "hrcImages");
        }
        // Prepare data for submission
        const data = {
          ...values,
          image_url: photos[0]?.secure_url,
          image_id: photos[0]?.public_id,
        };
        // Submit data to the backend
        const response = await axios.post(`${host.url}/team`, data, config);
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
        toast({
          variant: "destructive",
          description:
            error.response?.data?.message || "An unexpected error occurred.",
        });
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <>
      <div className="h-fit w-full flex flex-col pb-[100px] md:pb-20">
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Organogram (Team)</h1>
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
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Team memeber&apos;s fullname
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                              <SelectValue placeholder="Select the corresponding staff category" />
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
                          placeholder="Position"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
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
                  disabled={
                    loading ||
                    selectedImages.length < 1 ||
                    !files ||
                    !selectedValue
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

export default AddTeamMember;
