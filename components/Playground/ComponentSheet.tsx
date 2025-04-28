import { Dispatch, SetStateAction } from "react";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";
import { EditableInput } from "../GeneralComponents/EditableInput";
import { CodeEditor } from "./CodeEditor";
interface ComponentSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ComponentSheet = ({ isOpen, setIsOpen }: ComponentSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-[1000px] flex flex-col gap-4">
        <SheetHeader>
          <EditableInput />
        </SheetHeader>
        <CodeEditor />
      </SheetContent>
    </Sheet>
  );
};
