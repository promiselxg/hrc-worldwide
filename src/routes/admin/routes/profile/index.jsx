import { useState } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import ChangeUsernamePage from "./change-username";
import ChangePasswordPage from "./change-password";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("username");

  return (
    <div className="h-fit w-full flex flex-col pb-[100px] md:pb-20">
      <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col min-h-screen">
        <div className="p-5">
          <h1 className={cn(`font-bold text-xl`)}>Profile Management</h1>
        </div>

        <div className="p-5 bg-white container w-full rounded-md shadow-md">
          {/* Toggle Selector */}
          <RadioGroup
            defaultValue="username"
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="flex gap-4 mb-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="username" id="username" />
              <Label htmlFor="username">Change Username</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="password" id="password" />
              <Label htmlFor="password">Change Password</Label>
            </div>
          </RadioGroup>

          {/* Conditionally Render Component */}
          {selectedOption === "username" ? (
            <ChangeUsernamePage />
          ) : (
            <ChangePasswordPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
