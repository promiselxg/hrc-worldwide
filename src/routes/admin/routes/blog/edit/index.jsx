/* eslint-disable no-unused-vars */
//import RichTextEditor from "@/components/RichTextEditor";
import RichTextEditor from "@/components/RichTextEditor";
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
import { ChevronLeft, CloudUpload, Loader2, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import Editor from "@/components/editor/editor";
import axios from "axios";
import SelectedImagesDisplay from "@/components/image-upload/selectedImageDisplay";
import { useImageContext } from "@/context/imageUpload.context";
import { useEditorContext } from "@/context/editor.context";
import host from "@/utils/host";

const formSchema = z.object({
  blog_title: z
    .string({ required_error: "This field is required" })
    .min(5, { message: "post title must be at least 5 characters long." }),
  tag: z.string().optional(),
});

const EditBlogPost = () => {
  const [loading, setLoading] = useState(false);
  const [blogContent, setBlogContent] = useState("initializing...");

  const [formData, setFormData] = useState({
    blog_title: "",
    blog_tag: "",
  });
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();

  const { quillRef, readOnly, editorContent, setEditorContent } =
    useEditorContext();

  const [content, setContent] = useState("");

  const [data, setData] = useState([]);
  const params = useParams();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleFormUpdate = async (field, value) => {};
  const handleImageUpload = async (field, value) => {};

  async function onSubmit(values) {}

  const handleSubmit = async () => {};

  useEffect(() => {
    const getRecord = async () => {
      if (!params?.id || params.id === "") {
        window.location = "/admin/blog";
      }
      try {
        const { data } = await axios.get(
          `${host.url}/blog/${params?.id}/blogPost`
        );
        if (data?.message === "No Record found with the ID Provided") {
          window.location = "/admin/blog";
        }
        setData(data);
        setBlogContent(data?.data?.blog_content);
      } catch (error) {
        console.log(error);
      }
    };
    getRecord();
  }, [params.id]);

  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.clipboard.dangerouslyPasteHTML(editorContent);
    }
  }, [blogContent, quillRef, editorContent]);

  console.log(blogContent);
  console.log(editorContent);
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
            <h1 className={cn(`font-bold`)}>Edit blog post</h1>
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
                      <Button
                        type="button"
                        disabled={!content}
                        id="blog_title"
                        onClick={() => handleFormUpdate("blog_title", content)}
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
                <div className="flex flex-col space-y-5 h-[400px]">
                  <FormLabel>Blog Content</FormLabel>
                  <Editor
                    ref={quillRef}
                    readOnly={readOnly}
                    className="h-[300px]"
                    defaultValue={editorContent || blogContent}
                    onTextChange={(delta, oldDelta, source) => {
                      // Update editor content state on change
                      if (quillRef.current) {
                        setEditorContent(quillRef.current.root.innerHTML);
                      }
                    }}
                  />
                </div>

                <div className="flex flex-col space-y-5">
                  <span>Add cover Photo</span>
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
                      images={selectedImages}
                      onRemoveImage={removeSelectedImage}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleSubmit}
                  id="submitBtn"
                  disabled={
                    loading ||
                    !formData.blog_title ||
                    selectedImages.length === 0
                  }
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

export default EditBlogPost;
