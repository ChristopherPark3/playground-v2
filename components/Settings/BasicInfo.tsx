"use client";

import { User } from "@/lib/types/global/user";
import { format } from "date-fns";

export const BasicInfo = ({ user }: { user: User | null }) => {
  const formattedDate = user?.created_at
    ? format(new Date(user.created_at), "MMMM do, yyyy")
    : "Unknown date";
  
  console.log(user)
  return (
    <div className="w-full flex flex-col space-y-4">
      
      <p>Email</p>
      <p>Username</p>
      <p>Profile image</p>
    </div>
  );
};
