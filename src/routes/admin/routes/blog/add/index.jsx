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

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import Editor from "@/components/editor/editor";
import { useImageContext } from "@/context/imageUpload.context";
import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
import { useEditorContext } from "@/context/editor.context";

const formSchema = z.object({
  blog_title: z
    .string({ required_error: "This field is required" })
    .min(5, { message: "post title must be at least 5 characters long." }),
  tag: z.string().optional(),
});

const AddBlogPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const { quillRef, readOnly, editorContent, setEditorContent } =
    useEditorContext();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {}

  return (
    <>
      <div className="h-screen w-full flex flex-col pb-[100px] md:pb-20 overflow-y-scroll">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/blog`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Add new blog post</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="blog_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post&apos;s Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Post's title"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Give this blog a title.
                      </FormDescription>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-5 h-[400px]">
                  <FormLabel>Blog Content</FormLabel>
                  <Editor
                    ref={quillRef}
                    readOnly={readOnly}
                    className="h-[300px]"
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

export default AddBlogPage;
