import { FiGrid } from "react-icons/fi";
import { GiTakeMyMoney, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: FiGrid,
  },
  {
    name:"Money Tracking",
    path:"/money-tracking",
    icon: GiTakeMyMoney,
    children:[
      {
        name:"Dashboard",
        path:"/money-tracking/dashboard",
        icon: FiGrid,
      },
      {
        name:"Income",
        path:"/money-tracking/income",
        icon: GiReceiveMoney,
      },
      {
        name:"Expenses",
        path:"/money-tracking/expenses",
        icon: GiPayMoney,
      },
      {
        name:"Reports",
        path:"/money-tracking/reports",
        icon: BsBarChartFill,
      }

    ]
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: FaRegCalendarAlt,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: IoMdAnalytics,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: CgProfile,
  },
];