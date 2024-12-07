import { ScrollArea } from "@/components/ui/scroll-area";
import { AuthContext } from "@/context/auth.context";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import host from "@/utils/host";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const Login = () => {
  const { toast } = useToast();
  const { user, loading, error, dispatch } = useContext(AuthContext);
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
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${host.url}/auth/login`, formData);
      if (res.data.success) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.token });
        window.location = "/admin";
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: `${error.message}` },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err?.response?.data });
      toast({
        description: `${error?.message}`,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (user) {
      window.location = "/admin";
    }
  }, [user]);

  return (
    <>
      <ScrollArea className="w-full bg-[#000] h-screen ">
        <div className="w-full px-5 md:w-1/2 mx-auto flex justify-center items-center flex-col h-screen">
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
              disabled={loading || !formData.username || !formData.password}
              type="submit"
              id="submitBtn"
              className={`${cn(
                `${
                  loading && " cursor-not-allowed"
                } border-none outline-none bg-[--admin-primary-bg] p-3 rounded-md uppercase text-white font-[600] transition-all delay-75 hover:text-[#000]  disabled:cursor-not-allowed mt-5`
              )}`}
            >
              {loading ? "processing..." : "Login"}
            </button>
          </form>
        </div>
      </ScrollArea>
    </>
  );
};

export default Login;
