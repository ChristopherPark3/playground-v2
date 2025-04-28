import { Dispatch, SetStateAction } from "react";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";
import { EditableInput } from "../GeneralComponents/EditableInput";
import { CodeEditor } from "./CodeEditor";
interface ComponentSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}

export const ComponentSheet = ({
  isOpen,
  setIsOpen,
  code,
  setCode,
}: ComponentSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-[50vw] flex flex-col gap-4">
        <SheetHeader>
          <EditableInput />
        </SheetHeader>
        <CodeEditor code={code} setCode={setCode} defaultValue={code} />
      </SheetContent>
    </Sheet>
  );
};
