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
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Editor from "@/components/editor/editor";

import { Quill } from "react-quill";

const formSchema = z.object({
  about_category: z.string({
    required_error: "Choose the about us section you wish to update.",
  }),
  about_us: z.string({ required_error: "This field is required" }),
});

const Delta = Quill.import("delta");

const AboutUs = () => {
  const [loading, setLoading] = useState(false);
  const [selectedImages, setselectedImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");
  const [lastChange, setLastChange] = useState("");
  const [readOnly, setReadOnly] = useState(true);

  const quillRef = useRef();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  //  Select File to Upload
  const imageHandleChange = (e) => {
    setselectedImages([]);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const selectedFiles = [];
      filesArray.forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          // File size is bigger than 5MB
          toast({
            variant: "destructive",
            title: "Selected File is > 5MB.",
            description: `File "${file.name}" exceeds 5MB limit.`,
          });
        } else {
          // File size is within the limit
          selectedFiles.push(file);
        }
      });
      setFiles(selectedFiles);
      const fileArray = selectedFiles.map((file) => URL.createObjectURL(file));
      setselectedImages((prevImages) => prevImages.concat(fileArray));
      selectedFiles.forEach((file) => URL.revokeObjectURL(file));
    }
  };
  //  Remove an Item from an Array
  const removeSelectedImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setselectedImages(updatedImages);
  };
  //  Display the selected Item
  const renderImages = (source) => {
    return source.map((image, i) => (
      <div
        className="w-full h-[60px] rounded-md relative mb-5   bg-contain"
        key={i}
      >
        <X
          className="absolute -top-2 -right-2 bg-[rgba(0,0,0,0.9)] rounded-full text-white p-[5px]  cursor-pointer"
          onClick={() => removeSelectedImage(i)}
        />
        <img
          src={image}
          alt={`images ${i}`}
          width={200}
          height={100}
          className="object-contain h-[60px]"
        />
      </div>
    ));
  };

  async function onSubmit(values) {}
  const data = "this is a default data";

  console.log(lastChange);
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
                    defaultValue={new Delta().insert(`${data}`)}
                    onTextChange={setLastChange}
                    className="h-[200px]"
                  />
                  <div className="flex absolute bottom-0 p-4 w-full border border-[#ccc]">
                    <label htmlFor="checkbox">
                      Edit:{" "}
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={readOnly}
                        className=" cursor-pointer"
                        onChange={(e) => setReadOnly(e.target.checked)}
                      />
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
                    onChange={imageHandleChange}
                    className="hidden"
                  />

                  <div className="w-full grid md:grid-cols-10 grid-cols-3 gap-3">
                    {selectedImages && renderImages(selectedImages)}
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
