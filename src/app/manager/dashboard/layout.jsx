"use client";

import React, { useEffect } from "react";
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
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";
import { SignOutButton } from "@clerk/nextjs";

function SidebarWithLogo({ children }) {
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
      }
      else if (response.data.status === 403 || response.data.status === 400) {
        toast.error(response.data.message);
        router.push("/");
      }
      else {
        toast.error(response.data.message);
      }
      setIsManager(false);
    };
    checkManager();
  }, []);

  return (isManager && <div className="flex">
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
        <Link href="/manager/dashboard/videos">
          <ListItem
            className={`text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black
              ${pathname === "/manager/dashboard/videos" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <PlayCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <p className="text-lg font-funnel-sans font-normal">Videos</p>
          </ListItem>
        </Link>
        <Link href="/manager/dashboard/parking-slots">
          <ListItem
            className={`
              text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black
              ${pathname === "/manager/dashboard/parking-slots" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <MapPinIcon className="h-5 w-5" />
            </ListItemPrefix>
            <p className="text-lg font-funnel-sans font-normal">Parking Slots</p>
          </ListItem>
        </Link>
        <Link href="/manager/dashboard/managers">
          <ListItem
            className={`
              "text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black"
              ${pathname === "/manager/dashboard/managers" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <ShieldCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            <p className="text-lg font-funnel-sans font-normal">Managers</p>
          </ListItem>
        </Link>
        <hr className="my-6 border-blue-gray-50" />
        <Link href="/manager/dashboard/profile">
          <ListItem
            className={`
              "text-lg font-funnel-sans font-normal hover:bg-[#fcd904]/50 hover:text-black"
              ${pathname === "/manager/dashboard/profile" ? "bg-[#fcd904] text-black" : ""}  
            `}
          >
            <ListItemPrefix>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            <p className="text-lg font-funnel-sans font-normal">Profile</p>
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
            href="/upgrade"
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
