import { cn } from "@/lib/utils";

export const Header = ({
  title,
  description,
  headerClassName,
  descriptionClassName,
}: {
  title: string;
  headerClassName?: string;
  description?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div className="flex items-baseline space-x-4">
      <h1 className={cn("text-4xl font-light",headerClassName)}>{title}</h1>
      <p className={cn("text-xs",descriptionClassName)}>{description}</p>
    </div>
  );
};
