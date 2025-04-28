import { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { Sun, Moon, Copy, Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface CodeEditorProps {
  defaultValue?: string;
  language?: string;
  onChange?: (value: string | undefined) => void;
  readOnly?: boolean;
  height?: number | string;
}

export const CodeEditor = ({
  defaultValue = "// Write your code here",
  language = "typescript",
  onChange,
  readOnly = false,
  height = 500,
}: CodeEditorProps) => {
  const [theme, setTheme] = useState<"light" | "vs-dark">("vs-dark");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [code, setCode] = useState<string>(defaultValue);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      setCode(value || "");
      if (onChange) onChange(value);

      setIsCopied(false);
    },
    [onChange]
  );

  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [code]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "vs-dark" : "light"));
  }, []);

  const isDark = theme === "vs-dark";

  return (
    <div
      className={cn(
        "rounded-xl border transition-colors duration-300 pb-4",
        isDark ? "bg-zinc-800 border-zinc-700" : "bg-gray-100 border-gray-200"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-end space-x-2 p-2 border-b transition-colors",
          isDark ? "border-zinc-700" : "border-gray-200"
        )}
      >
        <div className="flex">
          <button
            onClick={toggleTheme}
            className={cn(
              "transition-colors p-2 rounded-lg border",
              isDark
                ? "bg-zinc-700 border-zinc-600 text-zinc-200 hover:bg-zinc-600 hover:text-white"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            )}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          >
            {isDark ? (
              <Moon className="size-3.5" />
            ) : (
              <Sun className="size-3.5" />
            )}
          </button>
        </div>
        <div className="flex">
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleCopyCode}
                  className={cn(
                    "transition-colors p-2 rounded-lg border",
                    isDark
                      ? "bg-zinc-700 border-zinc-600 text-zinc-200 hover:bg-zinc-600 hover:text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  )}
                  aria-label="Copy code to clipboard"
                >
                  {isCopied ? (
                    <Check className="size-3.5 text-green-500" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-zinc-800 border border-zinc-600 text-zinc-300 flex items-center space-x-1"
              >
                {isCopied ? "Copied!" : "Copy code"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-opacity-70 z-10",
              isDark ? "bg-zinc-900" : "bg-gray-200"
            )}
          >
            <Loader2
              className={cn(
                "size-8 animate-spin",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            />
          </div>
        )}
        <Editor
          height={height}
          theme={theme}
          language={language}
          defaultValue={defaultValue}
          onChange={handleEditorChange}
          className="transition-colors duration-300"
          onMount={() => setIsLoading(false)}
          loading={
            <div
              className={cn(
                "flex items-center justify-center h-full",
                isDark ? "bg-zinc-800" : "bg-gray-100"
              )}
            >
              <Loader2
                className={cn(
                  "size-8 animate-spin",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};
