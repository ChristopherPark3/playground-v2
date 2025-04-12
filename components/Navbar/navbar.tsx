"use client";

import { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav
      className={cn(
        "border-r max-w-fit transition-all duration-300 ease-spring",
        isExpanded ? "w-[132px]" : "w-12"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col space-y-2 h-full p-2">
        {NavbarItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex items-center h-fit p-2 space-x-2 transition-colors duration-150 hover:bg-gray-200 rounded-lg cursor-default",
              pathName.includes(item.id) && "bg-gray-200"
            )}
            onClick={() => router.push(`/${item.id}`)}
          >
            <div>{item.icon}</div>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-spring",
                isExpanded ? "opacity-100 max-w-[80px]" : "opacity-0 max-w-0"
              )}
            >
              <p className="text-xs whitespace-nowrap">{item.displayText}</p>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};
