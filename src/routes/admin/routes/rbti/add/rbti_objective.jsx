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

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import axios from "axios";
import host from "@/utils/host";
import { getAuthConfig } from "@/utils/headerConfig";
import { CustomEditorPreview } from "@/components/wysiwyg/preview";
import { CustomEditor } from "@/components/wysiwyg/editor";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  category: z.string({
    required_error: "Choose the about us section you wish to update.",
  }),
  about_us_content: z.string({ required_error: "This field is required" }),
});

const RBTIObjective = () => {
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    category: "",
    about_us_content: "",
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {}
  // /:model/:category
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormPost = async () => {
    const formData = {
      category: "rbti_objective",
      about_us_content: data?.about_us_content,
      model: "rbti",
    };
    try {
      setLoading(true);
      const response = await axios.post(
        `${host.url}/data/rbti`,
        formData,
        getAuthConfig()
      );
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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${host.url}/data/rbti/rbti_objective`,
          getAuthConfig()
        );
        setData(response.data?.data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className="h-fit w-full flex flex-col pb-[100px] md:pb-20">
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>RBTI - Objectives</h1>
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
                    };

                    return (
                      <FormItem>
                        <FormLabel>RBTI - Objectives</FormLabel>
                        <Select
                          onValueChange={handleChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="rbti_objective">
                              RBTI - Objectives
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[12px] text-[#333]">
                          Choose the about us section you wish to update.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="flex flex-col space-y-5">
                  <FormLabel>RBTI - Objectives</FormLabel>
                  {editing ? (
                    <FormField
                      control={form.control}
                      name="about_us_content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <CustomEditor
                              value={data?.about_us_content}
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

                          <Button
                            type="button"
                            disabled={!field.value || loading}
                            id="about_us_content"
                            onClick={
                              data?.id
                                ? () =>
                                    handleFormUpdate(
                                      "about_us_content",
                                      data.id,
                                      data.about_us_content,
                                      `data/${data.id}`,
                                      "rbti"
                                    )
                                : () => handleFormPost()
                            }
                          >
                            {loading && <Loader2 className="animate-spin" />}
                            {data?.id ? "Update" : "Submit"}
                          </Button>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : (
                    <>
                      <CustomEditorPreview value={data?.about_us_content} />
                      <Button
                        type="button"
                        className="w-fit"
                        onClick={() => setEditing(!editing)}
                      >
                        Edit Content
                      </Button>
                    </>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RBTIObjective;
