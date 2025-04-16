"use client";

import { Tabs } from "../ui/aceternity-tabs";
import { BasicInfo } from "../Settings/BasicInfo";
import { User } from "@/lib/types/global/user";
import { Subscription } from "../Settings/Subscription";

export function AnimatedTabs({ user }: { user: User }) {
  const tabs = [
    {
      title: "Basic info",
      value: "basic-info",
      content: <BasicInfo user={user} />,
    },
    {
      title: "Subscription",
      value: "subscription",
      content: <Subscription />
    },
    {
      title: "Preferences",
      value: "preferences",
      content: <Subscription />
    },
  ];

  return <Tabs tabs={tabs} />;
}
