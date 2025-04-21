import { DottedBackground } from "@/components/GeneralComponents/DottedBackground";
import { ReactNode } from "react";

export default function PlaygroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full h-full relative">
      <DottedBackground />
      <div className="absolute w-full h-full">{children}</div>
    </div>
  );
}
