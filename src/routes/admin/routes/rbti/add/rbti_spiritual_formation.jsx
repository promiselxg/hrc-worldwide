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
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Editor from "@/components/editor/editor";
import { useEditorContext } from "@/context/editor.context";

import axios from "axios";
import host from "@/utils/host";
import { config } from "@/utils/headerConfig";

const formSchema = z.object({
  about_category: z.string({
    required_error: "Choose the about us section you wish to update.",
  }),
  about_us: z.string({ required_error: "This field is required" }),
});

const RBTISpiritualFormation = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (quillRef.current) {
        // Get HTML content
        const htmlContent = quillRef?.current?.root?.innerHTML;

        // Check if the content length is less than 8
        if (!selectedValue || (htmlContent && htmlContent.length < 50)) {
          toast({
            variant: "destructive",
            description: "The content must be at least 50 characters long.",
          });
        }

        const data = {
          category: selectedValue,
          about_us_content: htmlContent,
          model: "rbti",
        };

        const response = await axios.post(
          `${host.url}/data/rbti`,
          data,
          config
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
      console.log(error);
      toast({
        variant: "destructive",
        description:
          error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="h-fit w-full flex flex-col pb-[100px] md:pb-20">
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>RBIT Spiritual Formation</h1>
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
                      setSelectedValue(value);
                    };

                    return (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
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
                            <SelectItem value="rbti_spiritual_formation">
                              RBTI - Spiritual Formation
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
                <div className="flex flex-col relative h-[400px]">
                  <FormLabel className="mb-5">Content</FormLabel>
                  <Editor
                    ref={quillRef}
                    readOnly={readOnly}
                    className="h-[250px]"
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
                        className="bg-[--primary-bg] text-[white] px-5 py-2 rounded-[8px] text-sm transition-all duration-100 delay-100 hover:bg-[--text-black]"
                      >
                        {readOnly ? "Edit Content" : "Save Content"}
                      </button>
                    </label>
                  </div>
                </div>
                <Button
                  onClick={handleSubmit}
                  id="submitBtn"
                  disabled={loading || !selectedValue || !editorContent}
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

export default RBTISpiritualFormation;
