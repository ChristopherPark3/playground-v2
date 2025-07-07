interface CustomSheetProps {
  isOpen: boolean;
  setIsOpen: boolean;
  width?: number;
  side?: "right" | "bottom";
}

export const CustomSheet = ({
  isOpen,
  setIsOpen,
  width = 800,
  side = "right",
}: CustomSheetProps) => {
  return (
    <div className="">
      <p>Custom sheet</p>
    </div>
  );
};
