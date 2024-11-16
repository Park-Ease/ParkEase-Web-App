"use client";

import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
} from "@material-tailwind/react";
import {
  PlayCircleIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserIcon,
  PowerIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SidebarWithLogo({ children }) {
  const [openAlert, setOpenAlert] = React.useState(true);
  const pathname = usePathname();

  return (<div className="flex">
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Image
          src="/parkease-logo.png"
          alt="Parkease Logo"
          width={30}
          height={30}
        />
        <Typography
          variant="h5"
          color="black"
          className="font-funnel-sans font-semibold"
        >
          ParkEase
        </Typography>
      </div>
      <List>
        <Link href="/admin/dashboard/videos">
          <ListItem
            className={`
              text-lg font-funnel-sans font-normal,
              ${pathname === "/admin/dashboard/videos" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <PlayCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Videos
          </ListItem>
        </Link>
        <Link href="/admin/dashboard/parking-slots">
          <ListItem
            className={`
              text-lg font-funnel-sans font-normal,
              ${pathname === "/admin/dashboard/parking-slots" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <MapPinIcon className="h-5 w-5" />
            </ListItemPrefix>
            Parking Slots
          </ListItem>
        </Link>
        <Link href="/admin/dashboard/admins">
          <ListItem
            className={`
              "text-lg font-funnel-sans font-normal",
              ${pathname === "/admin/dashboard/admins" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <ShieldCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            Admins
          </ListItem>
        </Link>
        <hr className="my-5 border-blue-gray-50" />
        <Link href="/admin/dashboard/profile">
          <ListItem
            className={`
              "text-lg font-funnel-sans font-normal",
              ${pathname === "/admin/dashboard/profile" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
        <Link href="/admin/dashboard/support">
          <ListItem
            className={`
               text-lg font-funnel-sans font-normal,
              ${pathname === "/admin/dashboard/support" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.449 8.448 16.388 11a4.52 4.52 0 0 1 0 2.002l3.061 2.55a8.275 8.275 0 0 0 0-7.103ZM15.552 19.45 13 16.388a4.52 4.52 0 0 1-2.002 0l-2.55 3.061a8.275 8.275 0 0 0 7.103 0ZM4.55 15.552 7.612 13a4.52 4.52 0 0 1 0-2.002L4.551 8.45a8.275 8.275 0 0 0 0 7.103ZM8.448 4.55 11 7.612a4.52 4.52 0 0 1 2.002 0l2.55-3.061a8.275 8.275 0 0 0-7.103 0Zm8.657-.86a9.776 9.776 0 0 1 1.79 1.415 9.776 9.776 0 0 1 1.414 1.788 9.764 9.764 0 0 1 0 10.211 9.777 9.777 0 0 1-1.415 1.79 9.777 9.777 0 0 1-1.788 1.414 9.764 9.764 0 0 1-10.212 0 9.776 9.776 0 0 1-1.788-1.415 9.776 9.776 0 0 1-1.415-1.788 9.764 9.764 0 0 1 0-10.212 9.774 9.774 0 0 1 1.415-1.788A9.774 9.774 0 0 1 6.894 3.69a9.764 9.764 0 0 1 10.211 0ZM14.121 9.88a2.985 2.985 0 0 0-1.11-.704 3.015 3.015 0 0 0-2.022 0 2.985 2.985 0 0 0-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 0 0 0 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 0 0 1.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 0 0 0-2.022 2.985 2.985 0 0 0-.704-1.11Z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Support
          </ListItem>
        </Link>
        <Link href="/logout">
          <ListItem className="text-lg bg-red-600 text-white font-funnel-sans font-normal">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <ArrowTrendingUpIcon className="mb-2 h-5 w-5" />
        <Typography
          variant="h6"
          className="mb-1 text-lg font-funnel-sans font-semibold"
        >
          Upgrade to PRO
        </Typography>
        <Typography
          variant="small"
          className="w-full font-funnel-sans font-normal opacity-80"
        >
          Upgrade to ParkEase PRO and get advanced features like parking theft
          detection, better slot priority, analytics, and more.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-funnel-sans font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-funnel-sans font-medium"
          >
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
    {children}
  </div>
  );
}

export default SidebarWithLogo;
