"use client";

import React, { useEffect, useState } from "react";
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
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";
import { SignOutButton } from "@clerk/nextjs";

function SidebarWithLogo({ children }) {
  const [isOpen, setIsOpen] = useState(false); // For toggling sidebar
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isManager, setIsManager] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkManager = async () => {
      const response = await axios.get("/api/check-manager");
      if (response.data.status === 200) {
        toast.success(response.data.message);
        setIsManager(true);
        return;
      } else if (response.data.status === 403 || response.data.status === 400) {
        toast.error(response.data.message);
        router.push("/");
      } else {
        toast.error(response.data.message);
      }
      setIsManager(false);
    };
    checkManager();
  }, [router]);

  return (
    isManager && (
      <div className="flex">
        {/* Hamburger Menu for small screens */}
        <button
          className="absolute top-4 left-4 z-50 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-gray-800" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-gray-800" />
          )}
        </button>

        {/* Sidebar */}
        <Card
          className={`fixed top-0 left-0 h-full w-[18rem] lg:w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 lg:translate-x-0 z-50 rounded-none`}
        >
          {/* Close Button Inside Sidebar */}
          <button
            className="absolute top-4 right-4 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-gray-800" />
          </button>

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
            <Link href="/manager/dashboard/videos">
              <ListItem
                className={`text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black active:bg-[#fcd904]/50 focus:text-black focus:bg-[#fcd904]
                  ${pathname === "/manager/dashboard/videos"
                    ? "bg-[#fcd904] text-black"
                    : ""
                  }  
                `}
              >
                <ListItemPrefix>
                  <PlayCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Videos
              </ListItem>
            </Link>
            <Link href="/manager/dashboard/parking-slots">
              <ListItem
                className={`text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black active:bg-[#fcd904]/50 focus:text-black focus:bg-[#fcd904]
                  ${pathname === "/manager/dashboard/parking-slots"
                    ? "bg-[#fcd904] text-black"
                    : ""
                  }  
                `}
              >
                <ListItemPrefix>
                  <MapPinIcon className="h-5 w-5" />
                </ListItemPrefix>
                Parking Slots
              </ListItem>
            </Link>
            <Link href="/manager/dashboard/managers">
              <ListItem
                className={`text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black active:bg-[#fcd904]/50 focus:text-black focus:bg-[#fcd904]
                  ${pathname === "/manager/dashboard/managers"
                    ? "bg-[#fcd904] text-black"
                    : ""
                  }  
                `}
              >
                <ListItemPrefix>
                  <ShieldCheckIcon className="h-5 w-5" />
                </ListItemPrefix>
                Managers
              </ListItem>
            </Link>
            <hr className="my-6 border-blue-gray-100" />
            <Link href="/manager/dashboard/profile">
              <ListItem
                className={`text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black active:bg-[#fcd904]/50 focus:text-black focus:bg-[#fcd904]
                ${pathname === "/manager/dashboard/profile"
                    ? "bg-[#fcd904] text-black"
                    : "text-inherit"
                  }  
                `}
              >
                <ListItemPrefix>
                  <UserIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
            </Link>
            <SignOutButton redirectUrl="/">
              <ListItem className="text-lg bg-red-600 text-white mb-5 font-funnel-sans font-normal hover:bg-red-600">
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </SignOutButton>
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
              Upgrade to ParkEase PRO and get advanced features like parking
              theft detection, better slot priority, analytics, and more.
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
                href="/upgrade"
                variant="small"
                className="font-funnel-sans font-medium"
              >
                Upgrade Now
              </Typography>
            </div>
          </Alert>
        </Card>

        {/* Main Content */}
        <div className="flex-grow lg:ml-[20rem]">{children}</div>
      </div>
    )
  );
}

export default SidebarWithLogo;
