"use client";

import { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  LogOut,
  PanelLeft,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useUser, useClerk } from "@clerk/nextjs";

export const Navbar2 = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const pathName = usePathname();
  const router = useRouter();
  const user = useUser();
  const { signOut } = useClerk();

  const handleExpandToggle = () => {
    if (isHovered) {
      setOpenTooltipId(null);
      setIsExpanded(!isExpanded);
    }
  };

  const handleNavItemMouseEnter = (id: string) => {
    if (!isExpanded) {
      setOpenTooltipId(id);
    }
  };

  const handleNavItemMouseLeave = () => {
    setOpenTooltipId(null);
  };

  const handleSignOut = () => {
    signOut(() => router.push("/sign-in"));
  };

  return (
    <>
      {user.isSignedIn && (
        <nav
          className={cn(
            "border-r max-w-fit transition-all duration-300 ease-spring",
            isExpanded ? "w-[132px]" : "w-12"
          )}
        >
          <div className="flex flex-col justify-between h-full pb-4">
            <div className="flex flex-col space-y-2 h-full p-2">
              <div
                className="flex items-center p-2 transition-colors duration-300 hover:bg-gray-200 rounded-lg cursor-default w-fit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleExpandToggle}
              >
                {isHovered ? (
                  !isExpanded ? (
                    <ArrowRightToLine
                      className="size-4 animate-in fade-in duration-300"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <ArrowLeftToLine
                      className="size-4 animate-in fade-in duration-300"
                      strokeWidth={1.5}
                    />
                  )
                ) : (
                  <div className="flex space-x-2">
                    <PanelLeft className="size-4" strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <hr />
              {NavbarItems.map((item) => (
                <TooltipProvider delayDuration={120} key={item.id}>
                  <Tooltip open={!isExpanded && openTooltipId === item.id}>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          "animate-on-hover flex items-center h-fit p-2 space-x-2 transition-colors duration-150 hover:bg-gray-200 rounded-lg cursor-default",
                          pathName.includes(item.id) &&
                            item.activeBackgroundColor +
                              ` text-white hover:${item.activeBackgroundColor}`
                        )}
                        onClick={() => router.push(`/${item.id}`)}
                        onMouseEnter={() => handleNavItemMouseEnter(item.id)}
                        onMouseLeave={handleNavItemMouseLeave}
                      >
                        <div>{item.icon}</div>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-150 ease-spring",
                            isExpanded
                              ? "opacity-100 max-w-[80px]"
                              : "opacity-0 max-w-0"
                          )}
                        >
                          <p className="text-xs whitespace-nowrap select-none">
                            {item.displayText}
                          </p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      sideOffset={16}
                      className="rounded-lg"
                    >
                      {item.displayText}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <TooltipProvider delayDuration={120}>
              <Tooltip open={!isExpanded && openTooltipId === "logout"}>
                <TooltipTrigger asChild>
                  <div
                    className="flex items-center h-fit p-2 mx-2 space-x-2 transition-colors duration-150 hover:bg-gray-200 rounded-lg cursor-default"
                    onClick={handleSignOut}
                    onMouseEnter={() => handleNavItemMouseEnter("logout")}
                    onMouseLeave={handleNavItemMouseLeave}
                  >
                    <div>
                      <LogOut className="size-4" strokeWidth={1.5} />
                    </div>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-150 ease-spring",
                        isExpanded
                          ? "opacity-100 max-w-[80px]"
                          : "opacity-0 max-w-0"
                      )}
                    >
                      <p className="text-xs whitespace-nowrap select-none">
                        Logout
                      </p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  sideOffset={16}
                  className="rounded-lg"
                >
                  Logout
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </nav>
      )}
    </>
  );
};
