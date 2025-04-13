"use client"

import { useGetUser } from "@/hooks/react-query/useGetUser";

export default function SettingsPage() {
  const { data: user, isLoading: isUserLoading } = useGetUser(
    "69f96a2d-6991-4f99-a1d9-4ea04515e1ce"
  );

  
  return <div className="h-full">{user?.email}</div>;
}
