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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import CloudinaryUploadWidget from "@/utils/CloudinaryUploadWidget ";
import { getAuthConfig } from "@/utils/headerConfig";
import host from "@/utils/host";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  resource_title: z
    .string({ required_error: "Give this resource a title" })
    .min(3, { message: "resource title must be at least 3 characters long." }),
  resource_minister: z
    .string({ required_error: "Enter at least one minister's name" })
    .min(5, { message: "this field must be at least 5 characters long." }),

  resource_tag: z.string().optional(),
  resource_file_type: z.string({ required_error: "This field is required" }),
});

const AddResource = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [uploadedAudioId, setUploadedAudioId] = useState(null);

  const [videoUrl, setVideUrl] = useState("");

  const [formData, setFormData] = useState({
    resource_title: "",
    resource_minister: "",
    resource_tag: "",
  });

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resource_title: "",
      resource_tag: "",
      resource_minister: "",
    },
  });

  const handleUploadSuccess = (fileInfo) => {
    setUploadedAudio(fileInfo?.secure_url);
    setUploadedAudioId(fileInfo?.path);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e, fileType) => {
    e.preventDefault();
    const requiredFields = ["resource_title", "resource_minister"];
    const missingFields = requiredFields.filter(
      (field) => !formData[field]?.trim()
    );

    if (missingFields.length > 0) {
      toast({
        variant: "destructive",
        title: "Missing Required Fields",
        description: `Missing required fields: ${missingFields.join(", ")}`,
      });
      return;
    }

    try {
      setLoading(true);
      const data = {
        ...formData,
        resource_file_url: uploadedAudio || videoUrl,
        resource_file_id: uploadedAudioId,
        resource_file_type: fileType,
      };

      const response = await axios.post(
        `${host.url}/resource`,
        data,
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
      toast({
        variant: "destructive",
        description:
          error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };
  async function onSubmit(values) {}

  return (
    <>
      <div className="h-fit w-full flex flex-col pb-[100px] md:pb-20">
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Create a new resource</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form className="space-y-5 mb-20">
                <FormField
                  control={form.control}
                  name="resource_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="title"
                          {...field}
                          className="form-input"
                          value={formData.resource_title}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this resource a title.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resource_minister"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ministering </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ministers Name, seperated  by comma"
                          className="resize-none"
                          {...field}
                          value={formData.resource_minister}
                          onChange={handleChange}
                          id="resource_minister"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        seperated by comma (e.g, Evangelism, Crusade, etc)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resource_tag"
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
                          id="resource_tag"
                          value={formData.resource_tag}
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
                <FormField
                  control={form.control}
                  name="resource_file_type"
                  render={({ field }) => {
                    // Handle the change of selected value
                    const handleChange = (value) => {
                      field.onChange(value);
                      setSelectedValue(value);
                    };

                    return (
                      <FormItem>
                        <FormLabel>File type</FormLabel>
                        <Select
                          onValueChange={handleChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full md:w-[20%] ">
                            <SelectTrigger>
                              <SelectValue placeholder="File type." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value=" ">File type</SelectItem>
                            <SelectItem value="video">Video File</SelectItem>
                            <SelectItem value="audio">Audio File</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[12px] text-[#333]">
                          Select file type.
                        </FormDescription>
                        <FormMessage />

                        {/* Conditionally display text box based on selected value */}
                        {selectedValue === "video" && (
                          <>
                            <FormItem>
                              <FormLabel>
                                Video Description{" "}
                                <i className="text-sm">
                                  (paste the uploaded youtube video url here)
                                </i>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter youtube video URL"
                                  value={videoUrl}
                                  onChange={(e) => setVideUrl(e.target.value)}
                                />
                              </FormControl>
                              <FormDescription className="text-[12px] text-[#333]">
                                paste the uploaded youtube video url here
                              </FormDescription>
                            </FormItem>
                            <Button
                              onClick={(e) => handleFormSubmit(e, "video")}
                              id="submitBtn"
                              disabled={
                                loading ||
                                !formData.resource_minister ||
                                !formData.resource_title
                              }
                            >
                              {loading && <Loader2 className="animate-spin" />}
                              {loading ? "Please wait" : "Submit"}
                            </Button>
                          </>
                        )}
                        {selectedValue === "audio" &&
                          (!uploadedAudio || uploadedAudio === "") && (
                            <CloudinaryUploadWidget
                              cloudName="hrcc2026"
                              uploadPreset="hrcAudio"
                              onUploadSuccess={handleUploadSuccess}
                              buttonLabel="Upload Audio"
                              formData={formData}
                            />
                          )}
                      </FormItem>
                    );
                  }}
                />
                {uploadedAudio && (
                  <Button
                    onClick={(e) => handleFormSubmit(e, "audio")}
                    id="submitBtn"
                    disabled={
                      loading ||
                      !formData.resource_minister ||
                      !formData.resource_title
                    }
                  >
                    {loading && <Loader2 className="animate-spin" />}
                    {loading ? "Please wait" : "Submit"}
                  </Button>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddResource;
