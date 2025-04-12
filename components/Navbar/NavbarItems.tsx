import { Handshake, Puzzle, Settings, TestTube } from "lucide-react";

export const NavbarItems = [
  {
    id: "playground",
    displayText: "Playground",
    icon: <TestTube className="size-4" strokeWidth={1.5} />,
    activeBackgroundColor: "bg-green-400",
  },
  {
    id: "components",
    displayText: "Components",
    icon: <Puzzle className="size-4" strokeWidth={1.5} />,
    activeBackgroundColor: "bg-red-400",
  },
  {
    id: "community",
    displayText: "Community",
    icon: <Handshake className="size-4" strokeWidth={1.5} />,
    activeBackgroundColor: "bg-orange-400",
  },
  {
    id: "settings",
    displayText: "Settings",
    icon: <Settings className="size-4" strokeWidth={1.5} />,
    activeBackgroundColor: "bg-blue-400",
  },
];
