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

import { Textarea } from "@/components/ui/textarea";
import { useImageContext } from "@/context/imageUpload.context";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CloudUpload, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import host from "@/utils/host";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { config } from "@/utils/headerConfig";

const formSchema = z.object({
  event_title: z
    .string({ required_error: "Give this event a title" })
    .min(5, { message: "Event's title must be at least 5 characters long." }),
  event_tag: z.string().optional(),
  event_minister: z.string({ required_error: "This field is required" }),
  event_date: z.date({ required_error: "This field is required" }),
});

const AddEventPage = () => {
  const [loading, setLoading] = useState(false);
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event_title: "",
      event_minister: "",
      event_tag: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    // Validate required fields
    const requiredFields = ["event_title", "event_minister", "event_date"];
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
          event_image_url: photos[0].secure_url,
          event_image_id: photos[0].public_id,
        };
        // Submit data to the backend
        const response = await axios.post(`${host.url}/event`, data, config);
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
        console.error("Error during submission:", error);
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
            <h1 className={cn(`font-bold`)}>Create a new Event</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="event_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event&apos;s Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Event's title"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this event a title.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="event_minister"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ministering </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ministers Name, seperated  by comma"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        seperated by comma (e.g, evangelism, crusade, etc)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="event_tag"
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
                          id="event_tag"
                          onKeyUp={() => {}}
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
                  name="event_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Event Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => {
                              const today = new Date();
                              const yesterday = new Date(today);
                              yesterday.setDate(today.getDate() - 1);
                              return date <= yesterday; // Disable yesterday and all earlier dates
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Pick a date for this event
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

export default AddEventPage;
