"use client";

import { AnimatedTabs } from "@/components/GeneralComponents/AnimatedTabs";
import { useGetUser } from "@/hooks/react-query/useGetUser";
import { useUser } from "@clerk/nextjs";

export default function SettingsPage() {
  const { user: clerkUser } = useUser();
  const { data: user, isLoading: isUserLoading } = useGetUser(clerkUser?.id);

  console.log(user);

  if (isUserLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-full p-10 w-full flex flex-col space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">
          {user?.first_name} {user?.last_name}
        </h1>
        <h3 className="text-gray-500">{user?.email}</h3>
      </div>
      <AnimatedTabs user={user} />
    </div>
  );
}
