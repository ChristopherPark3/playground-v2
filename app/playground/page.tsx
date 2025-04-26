"use client";

import { ComponentSheet } from "@/components/Playground/ComponentSheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PlaygroundPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="h-full w-full flex items-center justify-center">
      {!isOpen && (
        <Button className="" onClick={() => setIsOpen(true)}>
          Start building
        </Button>
      )}
      <ComponentSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
