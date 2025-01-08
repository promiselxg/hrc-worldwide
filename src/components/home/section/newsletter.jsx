/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import BgWrapper from "@/components/bg-wrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import host from "@/utils/host";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  full_name: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

const NewsletterSection = () => {
  const [loading, setLoading] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
    },
  });

  async function onSubmit(data) {
    const formData = {
      full_name: data.full_name,
      email: data.email,
    };
    try {
      setLoading(true);
      if (!data.full_name || !data.email) {
        toast({
          title: "Please fill out the form",
          variant: "destructive",
        });
      }
      const response = await axios.post(
        `${host.url}/auth/newsletter`,
        formData
      );
      if (response) {
        toast({
          title: "Newsletter subscription was successful.",
        });
        setIsDialogOpen(false);
      }
    } catch (error) {
      toast({
        title: "Error occured, please try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <BgWrapper height="400px">
        <div className="container md:w-[1200px] mx-auto">
          <div className="md:px-[50px] flex flex-col md:flex-row gap-8 items-center">
            <div className="w-[80%] md:w-[60%]">
              <h2 className="text-[40px] md:text-[60px] font-[400] font-gothic leading-[1.1]">
                <span className="md:block">
                  Ready to begin this New Experience
                </span>
                <span className="md:block">
                  with Christ or you are joining us
                </span>
                <span className="md:block">for the first time?</span>
              </h2>
            </div>
            <div className="md:w-[40%]">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger>
                  <span className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato p-5">
                    JOIN US TO EXPERIENCE A NEW LIFE IN CHRIST
                  </span>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Subscribe to our newsletter</DialogTitle>
                    <div className="text-black">
                      <p>
                        Looking for inspiration, community updates, and ways to
                        grow in faith? Subscribe to our weekly newsletter!
                        Here&apos;s what you&apos;ll get:
                      </p>
                      <ul className="flex flex-col gap-1 my-2">
                        <li>✨ Uplifting messages to encourage you.</li>
                        <li>📅 Updates on upcoming events and services.</li>
                        <li>
                          💬 Stories and testimonies from our church family.
                        </li>
                        <li>
                          🙏 Opportunities to join us in prayer and service.
                        </li>
                      </ul>
                      Don’t miss out on what God is doing in and through our
                      church.
                    </div>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-2"
                      >
                        <FormField
                          control={form.control}
                          name="full_name"
                          render={({ field }) => (
                            <FormItem className="mt-4 w-full">
                              <FormLabel className="text-left justify-start items-start flex">
                                Full name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your full name "
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-left justify-start items-start flex">
                                Email Address
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Email Address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="my-2">
                          <Button
                            type="submit"
                            disabled={loading}
                            className="my-5 flex w-full items-center gap-2"
                          >
                            {loading && <Loader2 className=" animate-spin" />}
                            {loading ? "please wait..." : "Subscribe"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  );
};

export default NewsletterSection;
