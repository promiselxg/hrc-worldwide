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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { useImageContext } from "@/context/imageUpload.context";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import host from "@/utils/host";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { CloudUpload, Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { getAuthConfig } from "@/utils/headerConfig";
import { useEditorContext } from "@/context/editor.context";
import Editor from "@/components/editor/editor";

const formSchema = z.object({
  ministry_category: z.string({ required_error: "Choose ministry category" }),
});

const Ministry = () => {
  const [loading, setLoading] = useState(false);
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const { quillRef, readOnly, editorContent, setEditorContent } =
    useEditorContext();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ministry_category: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);

    // Validate required fields
    const requiredFields = ["ministry_category"];
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
        if (quillRef.current) {
          // Get HTML content
          const htmlContent = quillRef?.current?.root?.innerHTML;

          // Check if the content length is less than 8
          if (htmlContent && htmlContent.length < 50) {
            toast({
              variant: "destructive",
              description: "The content must be at least 50 characters long.",
            });
          }
          // Prepare data for submission
          const data = {
            ...values,
            ministry_description: htmlContent,
            ministry_image_url: photos[0].secure_url,
            ministry_image_id: photos[0].public_id,
          };
          // Submit data to the backend
          const response = await axios.post(
            `${host.url}/ministry`,
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
            <h1 className={cn(`font-bold`)}>Ministry</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="ministry_category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ministry category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="youth ministry">
                            Youth Ministry
                          </SelectItem>
                          <SelectItem value="smart kids">Smart Kids</SelectItem>
                          <SelectItem value="one sound">One Sound</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-[12px] text-[#333]">
                        Choose ministry category.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col space-y-5 h-[400px]">
                  <FormLabel>Description.</FormLabel>
                  <Editor
                    ref={quillRef}
                    readOnly={readOnly}
                    className="h-[300px]"
                    defaultValue={
                      editorContent || "<p>brief description....</p>"
                    }
                    onTextChange={(delta, oldDelta, source) => {
                      // Update editor content state on change
                      if (quillRef.current) {
                        setEditorContent(quillRef.current.root.innerHTML);
                      }
                    }}
                  />
                </div>
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

export default Ministry;
