"use client";

import { ComponentPreview } from "@/components/Playground/ComponentPreview";
import { ComponentSheet } from "@/components/Playground/ComponentSheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function PlaygroundPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [code, setCode] = useState<string>(`// Write your code below!
// We are using react-live under the hood and it 
// does not support exports, so don't export your components.
    
function Component() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Simple Component</div>
        <p className="text-gray-500">Start editing me!</p>
      </div>
    </div>
  );
}
`);
  return (
    <div className={cn("h-full w-full flex")}>
      {!isOpen && (
        <Button className="" onClick={() => setIsOpen(true)}>
          Start building
        </Button>
      )}
      <ComponentSheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        code={code}
        setCode={setCode}
      />
      {isOpen && <ComponentPreview code={code} />}
    </div>
  );
}
