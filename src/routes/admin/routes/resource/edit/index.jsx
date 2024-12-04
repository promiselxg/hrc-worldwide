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
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  resource_title: z
    .string({ required_error: "Give this resource a title" })
    .min(5, { message: "Event's title must be at least 5 characters long." }),
  tag: z.string().optional(),
  minister: z.string({ required_error: "This field is required" }),
  resource_type: z.string({ required_error: "This field is required" }),
  resource_author: z.string({ required_error: "This field is required" }),
});

const EditResouce = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleFormUpdate = async (field, value) => {};
  async function onSubmit(values) {}

  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/resource`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Create a new resource</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
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
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this resource a title.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="resource_title"
                        onClick={() =>
                          handleFormUpdate("resource_title", field?.value)
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
                  name="resource_author"
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
                        seperated by comma (e.g, Evangelism, Crusade, etc)
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="resource_author"
                        onClick={() =>
                          handleFormUpdate("resource_author", field?.value)
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
                  name="tag"
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
                          id="tag"
                          onKeyUp={() => {}}
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        seperated by comma (e.g, Evangelism, Crusade, etc)
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="tag"
                        onClick={() => handleFormUpdate("tag", field?.value)}
                      >
                        Update
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resource_type"
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
                          <FormItem>
                            <FormLabel>Video Description</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter video description" />
                            </FormControl>
                            <Button
                              type="button"
                              disabled={!field.value}
                              id="resource_title"
                              onClick={() =>
                                handleFormUpdate("resource_title", field?.value)
                              }
                            >
                              Update
                            </Button>
                          </FormItem>
                        )}
                        {selectedValue === "audio" && (
                          <FormItem>
                            <FormLabel>Audio Notes</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter audio notes" />
                            </FormControl>
                            <Button
                              type="button"
                              disabled={!field.value}
                              id="resource_title"
                              onClick={() =>
                                handleFormUpdate("resource_title", field?.value)
                              }
                            >
                              Update
                            </Button>
                          </FormItem>
                        )}
                      </FormItem>
                    );
                  }}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditResouce;
