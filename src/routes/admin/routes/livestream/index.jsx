/* eslint-disable no-unused-vars */
import "../admin.css";

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

import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import axios from "axios";
import host from "@/utils/host";
import { getAuthConfig } from "@/utils/headerConfig";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  platform: z.string({
    required_error: "Choose streaming platform",
  }),
  url: z.string({ required_error: "This field is required" }),
});

const AddLiveStream = () => {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: "",
      url: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values) {
    setLoading(true);
    const requiredFields = ["platform", "url"];
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
        const response = await axios.post(
          `${host.url}/livestream`,
          ...values,
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
      <div className="h-fit w-full flex flex-col">
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Add Livestream URL</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="platform"
                  render={({ field }) => {
                    // Handle the change of selected value
                    const handleChange = (value) => {
                      field.onChange(value);
                    };

                    return (
                      <FormItem>
                        <FormLabel>Streaming Platform</FormLabel>
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
                            <SelectItem value="youtube">Youtube</SelectItem>
                            <SelectItem value="facebook">Facebook</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[12px] text-[#333]">
                          Select Streaming Platform
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Live stream URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Live stream URL"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Live stream URL
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  id="submitBtn"
                  disabled={loading || isSubmitting || !isValid}
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

export default AddLiveStream;
