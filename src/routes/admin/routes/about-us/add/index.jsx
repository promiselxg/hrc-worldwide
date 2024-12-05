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
import { CloudUpload, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Editor from "@/components/editor/editor";
import { useEditorContext } from "@/context/editor.context";

import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
import { useImageContext } from "@/context/imageUpload.context";

const formSchema = z.object({
  about_category: z.string({
    required_error: "Choose the about us section you wish to update.",
  }),
  about_us: z.string({ required_error: "This field is required" }),
});

const AboutUs = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();

  const {
    quillRef,
    readOnly,
    toggleEditorReadOnly,
    editorContent,
    setEditorContent,
  } = useEditorContext();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {}

  const handleSubmit = () => {
    if (quillRef.current) {
      // Get Delta format
      const deltaContent = quillRef.current.getContents();
      console.log("Delta content:", deltaContent);

      // Get HTML content
      const htmlContent = quillRef.current.root.innerHTML;
      console.log("HTML content:", htmlContent);

      setContent(htmlContent);
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
                  name="about_category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose the about us section you wish to update." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hrc">
                            About HRC Worldwide
                          </SelectItem>
                          <SelectItem value="rbti">About RBTI</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-[12px] text-[#333]">
                        Choose the about us section you wish to update.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col relative h-[330px]">
                  <FormLabel className="mb-5">About Us</FormLabel>
                  <Editor
                    ref={quillRef}
                    readOnly={readOnly}
                    className="h-[200px]"
                    defaultValue={
                      editorContent || "<p>Start editing here...</p>"
                    }
                    onTextChange={(delta, oldDelta, source) => {
                      // Update editor content state on change
                      if (quillRef.current) {
                        setEditorContent(quillRef.current.root.innerHTML);
                      }
                    }}
                  />
                  <div className="flex absolute bottom-0 p-4 w-full border border-[#ccc]">
                    <label htmlFor="checkbox">
                      <button
                        onClick={() => toggleEditorReadOnly()}
                        className="bg-[--primary-bg] text-[white] px-5 rounded-[5px] text-sm transition-all duration-100 delay-100 hover:bg-[--text-black]"
                      >
                        {readOnly ? "Edit Content" : "Save Content"}
                      </button>
                    </label>
                  </div>
                </div>

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
                <Button type="submit" id="submitBtn" disabled={loading}>
                  Submit
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
