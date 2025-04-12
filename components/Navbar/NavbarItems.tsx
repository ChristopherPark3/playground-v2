import { Handshake, Puzzle, Settings, TestTube } from "lucide-react";

export const NavbarItems = [
  { id: "playground", displayText: "Playground", icon: <TestTube  className="size-4"/> },
  { id: "components", displayText: "Components", icon: <Puzzle  className="size-4"/> },
  { id: "community", displayText: "Community", icon: <Handshake  className="size-4"/> },
  {id: "settings", displayText: "Settings", icon: <Settings className="size-4"/>}
];
