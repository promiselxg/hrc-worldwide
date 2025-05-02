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
import { __, cn } from "@/lib/utils";
import { getAuthConfig } from "@/utils/headerConfig";
import host from "@/utils/host";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { CalendarIcon, ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  event_title: z
    .string()
    .min(5, { message: "Event's title must be at least 5 characters long." }),
  tag: z.string().optional(),
  minister: z.string({ required_error: "This field is required" }),
});

const EditEventPage = () => {
  const params = useParams();
  const { toast } = useToast();
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const [data, setData] = useState({
    event_title: "",
    event_minister: "",
    event_date: "",
    event_tag: "",
    event_image_url: "",
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
          `${host.url}/event/${params.id}`,
          {
            id: params.id,
            field: "event_image_url",
            image_url: photos[0]?.secure_url,
            image_id: photos[0]?.public_id,
            model: "event",
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

  async function onSubmit(values) {}

  useEffect(() => {
    const getTeamData = async () => {
      try {
        const response = await axios.get(
          `${host.url}/event/${params.id}/event`
        );
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
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/event`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Edit event details</h1>
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
                          value={data.event_title} // Controlled input
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this event a title.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field?.value}
                        id="event_title"
                        onClick={() =>
                          handleFormUpdate(
                            "event_title",
                            params.id,
                            data.event_title,
                            `event/${params.id}`,
                            "event"
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
                  name="event_minister"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ministering </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ministers Name, seperated  by comma"
                          className="resize-none"
                          {...field}
                          value={data.event_minister} // Controlled input
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
                        disabled={!field?.value}
                        id="event_minister"
                        onClick={() =>
                          handleFormUpdate(
                            "event_minister",
                            params.id,
                            data.event_minister,
                            `event/${params.id}`,
                            "event"
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
                          value={data.event_tag} // Controlled input
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        event tag
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="event_tag"
                        onClick={() =>
                          handleFormUpdate(
                            "event_tag",
                            params.id,
                            data.event_tag,
                            `event/${params.id}`,
                            "event"
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
                            onSelect={(date) => {
                              field.onChange(date);
                              handleInputChange({
                                target: { name: "event_date", value: date },
                              });
                            }}
                            disabled={(date) => {
                              const today = new Date();
                              const yesterday = new Date(today);
                              yesterday.setDate(today.getDate() - 1);
                              return date <= yesterday;
                            }}
                            onChange={(e) => {
                              handleInputChange(e);
                              field.onChange(e);
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Pick a date for this event
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="event_date"
                        className="w-fit"
                        onClick={() =>
                          handleFormUpdate(
                            "event_date",
                            params.id,
                            data.event_date,
                            `event/${params.id}`,
                            "event"
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
                          : data?.event_image_url
                      }
                      onRemoveImage={removeSelectedImage}
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  id="submitBtn"
                  disabled={selectedImages.length < 1}
                  onClick={() => handleImageUpload("submitBtn")}
                >
                  Update Photo
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEventPage;
