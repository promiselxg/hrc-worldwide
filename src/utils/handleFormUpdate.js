import { __ } from "@/lib/utils";
import axios from "axios";
import host from "./host";
import { getAuthConfig } from "./headerConfig";
import { toast } from "@/hooks/use-toast";

export const handleFormUpdate = async (field, id, value, url, model) => {
  if (!value) return false;
  const fieldName = __(field);
  fieldName.innerHTML = "Updating...";
  fieldName.disabled = true;
  try {
    const response = await axios.put(
      `${host.url}/${url}`,
      {
        id,
        value,
        field,
        model: model || "team",
      },
      getAuthConfig()
    );

    if (response.data.status !== "success") {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: response.data.message,
      });
    } else {
      toast({
        description: `Updated successfully.`,
        className: "bg-green-500 text-white",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: error?.response?.data?.message,
    });
  } finally {
    fieldName.innerHTML = "Update";
    fieldName.disabled = false;
  }
};
