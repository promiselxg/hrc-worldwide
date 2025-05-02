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
import { AuthContext } from "@/context/auth.context";
import { useToast } from "@/hooks/use-toast";
import { getAuthConfig } from "@/utils/headerConfig";
import host from "@/utils/host";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    current_password: z.string({ required_error: "This field is required" }),
    new_password: z.string({ required_error: "This field is required" }),
    confirm_password: z.string({ required_error: "This field is required" }),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const ChangePasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const { user, handleLogOut } = useContext(AuthContext);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values) {
    if (
      !values.current_password ||
      !values.new_password ||
      !values.confirm_password
    ) {
      toast({
        variant: "destructive",
        title: "Error updating Password",
        description: "please fill out the form",
      });
      return;
    }
    try {
      setLoading(true);
      await axios.put(
        `${host.url}/auth/profile/${user.id}`,
        {
          current_password: values.current_password,
          new_password: values.new_password,
          confirm_password: values.confirm_password,
          type: "password",
        },
        getAuthConfig()
      );

      toast({
        className: "bg-[green] text-white",
        title: "Password updated successfully",
      });

      handleLogOut();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error updating Password",
        description:
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="p-5 bg-white container w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 mb-20"
          >
            <FormField
              control={form.control}
              name="current_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current_password"
                      placeholder="Current Password"
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormDescription className="text-[12px] text-[#333]">
                    Enter your current password
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="new-password"
                      placeholder="password"
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormDescription className="text-[12px] text-[#333]">
                    Create a new password
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="confirm-new-password"
                      placeholder="Confirm Password"
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormDescription className="text-[12px] text-[#333]">
                    Confirm Password
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              id="submitBtn"
              disabled={isSubmitting || !isValid}
            >
              {loading && <Loader2 className="animate-spin" />}
              {loading ? "Please wait" : "Update password"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ChangePasswordPage;
