import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "../ui/input";

type TextSizes = "sm" | "md" | "lg" | "xl";

const heightMap: Record<TextSizes, string> = {
  xl: "7",
  lg: "7",
  md: "6",
  sm: "5",
};

interface EditableInputProps {
  size?: TextSizes;
}

export const EditableInput = ({ size = "md" }: EditableInputProps) => {
  const [value, setValue] = useState<string>("");
  const [isEditing, setIsEditing, inputRef] = useOutsideClick<HTMLDivElement>();

  return (
    <div
      ref={inputRef}
      className={cn(
        "p-1.5 rounded-xl px-3 hover:bg-neutral-100 transition-colors duration-300 w-52",
        isEditing && "bg-neutral-100"
      )}
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <Input
          value={value}
          placeholder="My Component"
          className={`p-0 space-y-0 placeholder:text-${size} border-none focus-visible:ring-0 shadow-none h-${heightMap[size]} md:text-${size} w-52`}
          autoFocus
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <p
          className={cn(
            `text-${size} transition-colors duration-300`,
            !value && "text-gray-500"
          )}
        >
          {value || "My Component"}
        </p>
      )}
    </div>
  );
};
