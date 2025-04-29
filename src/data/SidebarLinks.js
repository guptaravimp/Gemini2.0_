import { RiGeminiLine } from "react-icons/ri";
import { VscRefresh } from "react-icons/vsc";
import { IoSettings } from "react-icons/io5";
import { LuCircleHelp } from "react-icons/lu";

export const sidebarLinks = [
  {
    title: "Gem manager",
    icon: RiGeminiLine,
    link: "/gem-manager"
  },
  {
    title: "Help",
    icon: LuCircleHelp,
    link: "/help"
  },
  {
    title: "Activity",
    icon: VscRefresh,
    link: "/activity"
  },
  {
    title: "Settings",
    icon: IoSettings,
    link: "/settings"
  }
];
