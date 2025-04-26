import { Dispatch, SetStateAction } from "react";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";
import { EditableInput } from "../GeneralComponents/EditableInput";

interface ComponentSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ComponentSheet = ({ isOpen, setIsOpen }: ComponentSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-[1000px]">
        <SheetHeader>
          <EditableInput />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
