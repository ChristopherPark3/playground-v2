"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AllProviders({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ClerkProvider>
  );
}
