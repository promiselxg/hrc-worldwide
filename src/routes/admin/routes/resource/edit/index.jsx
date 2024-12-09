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
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import host from "@/utils/host";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ChevronLeft, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
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
  const params = useParams();
  const [data, setData] = useState({
    resource_title: "",
    resource_minister: "",
    resource_tag: "",
    resource_file_type: "",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(values) {}

  useEffect(() => {
    const getResourceData = async () => {
      try {
        const response = await axios.get(
          `${host.url}/resource/${params.id}/resource`
        );
        setData(response.data?.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getResourceData();
  }, [params.id]);

  console.log(data);
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
            <h1 className={cn(`font-bold`)}>
              Edit [{data?.resource_title}] resource
            </h1>
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
                          value={data?.resource_title} // Controlled input
                          onChange={(e) => {
                            handleInputChange(e);
                            field.onChange(e);
                          }}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this resource a title.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!data.resource_title}
                        id="resource_title"
                        onClick={() =>
                          handleFormUpdate(
                            "resource_title",
                            params.id,
                            data?.resource_title,
                            `resource/${params.id}`,
                            "resource"
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
                  name="resource_minister"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ministering </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ministers Name, seperated  by comma"
                          className="resize-none"
                          {...field}
                          value={data?.resource_minister} // Controlled input
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
                        disabled={!data?.resource_minister}
                        id="resource_minister"
                        onClick={() =>
                          handleFormUpdate(
                            "resource_minister",
                            params.id,
                            data?.resource_minister,
                            `resource/${params.id}`,
                            "resource"
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
                          value={data?.resource_tag} // Controlled input
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
                        id="resource_tag"
                        onClick={() =>
                          handleFormUpdate(
                            "resource_tag",
                            params.id,
                            data?.resource_tag,
                            `resource/${params.id}`,
                            "resource"
                          )
                        }
                      >
                        Update
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
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
