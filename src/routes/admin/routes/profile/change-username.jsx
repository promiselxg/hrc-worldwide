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
import { cn } from "@/lib/utils";
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
    username: z.string().min(1, "Username is required"),
    password: z.string({ required_error: "This field is required" }),
    confirm_password: z.string({ required_error: "This field is required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const ChangeUsernamePage = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirm_password: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values) {
    setLoading(true);

    try {
      await axios.put(
        `${host.url}/auth/profile/${user.id}`,
        {
          username: values.username,
          password: values.password,
          confirm_password: values.confirm_password,
          type: "username",
        },
        getAuthConfig()
      );

      toast({
        className: "bg-[green] text-white",
        title: "Username updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error updating username",
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="username"
                      placeholder="New Username"
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormDescription className="text-[12px] text-[#333]">
                    Enter a new username
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2 w-full">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Password</FormLabel>
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
                      Your account password
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
            </div>
            <Button
              type="submit"
              id="submitBtn"
              disabled={isSubmitting || !isValid}
            >
              {loading && <Loader2 className="animate-spin" />}
              {loading ? "Please wait" : "Update Username"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ChangeUsernamePage;
