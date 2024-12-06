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

import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  minsitry_description: z
    .string({ required_error: "This field is required" })
    .min(5, { message: "description must be at least 5 characters long." }),
  minsitry_category: z.string({ required_error: "Choose ministry category" }),
});

const EditMinistyPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedImages, setselectedImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);

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
    return source?.map((image, i) => (
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
  const handleFormUpdate = async (field, value) => {};
  const handleImageUpload = async (field, value) => {};

  async function onSubmit(values) {}
  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              to={`/admin/ministry`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
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
                  name="minsitry_category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ministry category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="select banner position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="youth">Youth Ministry</SelectItem>
                          <SelectItem value="children">
                            Children Ministry
                          </SelectItem>
                          <SelectItem value="music">Music Ministry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-[12px] text-[#333]">
                        Choose ministry category.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="minsitry_category"
                        onClick={() =>
                          handleFormUpdate("minsitry_category", field?.value)
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
                  name="minsitry_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Description"
                          {...field}
                          className="form-input"
                          id="minsitry_description"
                          onKeyUp={() => {}}
                        ></Textarea>
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        brief description.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="minsitry_description"
                        onClick={() =>
                          handleFormUpdate("minsitry_description", field?.value)
                        }
                      >
                        Update
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                    onChange={imageHandleChange}
                    className="hidden"
                  />
                  <div className="w-full grid md:grid-cols-10 grid-cols-3 gap-3">
                    {selectedImages.length > 0
                      ? renderImages(selectedImages, "file")
                      : renderImages(data?.imgUrl)}
                  </div>
                </div>
                <Button
                  type="button"
                  id="submitBtn"
                  disabled={selectedImages.length < 1}
                  onClick={() => handleImageUpload("image", data?.imageId)}
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

export default EditMinistyPage;
