import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AuthContext } from "@/context/auth.context";
import { Power } from "lucide-react";
import { useContext } from "react";
const AdminFooter = () => {
  const { handleLogOut } = useContext(AuthContext);
  return (
    <>
      <div className="flex">
        <Select>
          <SelectTrigger className="w-full border-[rgba(255,255,255,0.3)]">
            <SelectValue placeholder="Log-out" />
          </SelectTrigger>
          <SelectContent className="flex items-center gap-3">
            <SelectItem value="light" onClick={() => handleLogOut()}>
              <Power size={18} />
              Logout
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default AdminFooter;
