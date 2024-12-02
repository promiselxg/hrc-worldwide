import { useToast } from "@/hooks/use-toast";
import { __ } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const { toast } = useToast();
  const [isloading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData?.username || !formData.password) {
      return false;
    }
    try {
      setLoading(true);
      __("submitBtn").innerHTML = "Authenticating...";
      const { data } = await axios.post("/api/auth/login", formData);
      if (data?.message !== "Login Successful") {
        toast({
          description: data?.message,
          variant: "destructive",
        });
      } else {
        window.location = `/admin/dashboard?q=${data?.userInfo?.token}`;
      }
    } catch (error) {
      console.log(error);
      toast({
        description:
          "An unknown error occured while trying to sign you in, our Engineers have been contacted concerning the error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full bg-[#000]">
        <div className="w-full px-5 md:w-1/2 mx-auto flex justify-center items-center flex-col md:h-screen h-fit">
          <img
            src="/images/logo.png"
            width={200}
            height={200}
            alt="logo"
            className="md:mb-5"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:w-1/2 w-full gap-y-3 text-white font-[600] uppercase"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border-none outline-0 p-3 rounded-md bg-[--primary-bg] text-white font-[600]"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-none outline-0 p-3 rounded-md bg-[--primary-bg] text-white font-[600]"
            />

            <button
              disabled={isloading}
              type="submit"
              id="submitBtn"
              className="border-none outline-none bg-[--admin-primary-bg] p-3 rounded-md uppercase text-white font-[600] hover:opacity-[0.8] transition-all delay-75 hover:text-[#000]  disabled:cursor-not-allowed mt-5"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
