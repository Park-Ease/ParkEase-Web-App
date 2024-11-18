"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import ScrollContext from "@/context/ScrollContext";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

function NavbarForDropdownWithMultipleLanguages() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const [lang, setLang] = React.useState("English");
  const { targetRef, handleScrollToComponent } = React.useContext(ScrollContext);
  const router = useRouter();
  const [isManager, setIsManager] = React.useState(false);

  React.useEffect(() => {
    const checkManager = async () => {
      const response = await axios.get("/api/check-manager");
      if (response.data.status === 200) {
        toast.success(response.data.message);
        setIsManager(true);
      }
      else{
        toast.error(response.data.message);
        setIsManager(false);
      }
    };
    checkManager();
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const handleRouteToAdmin = () => {
    router.push("/manager/dashboard/videos")
  }

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-md font-funnel-sans font-medium"
        onClick={() => { targetRef.current = document.getElementById("hero"); handleScrollToComponent() }}
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-md font-funnel-sans font-medium"
        onClick={() => { targetRef.current = document.getElementById("features"); handleScrollToComponent() }}
      >
        <a href="#" className="flex items-center">
          Features
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-md font-funnel-sans font-medium"
        onClick={() => { targetRef.current = document.getElementById("testimonials"); handleScrollToComponent() }}
      >
        <a href="#" className="flex items-center">
          Testimonials
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-md font-funnel-sans font-medium"
        onClick={() => { targetRef.current = document.getElementById("faqs"); handleScrollToComponent() }}
      >
        <a href="#" className="flex items-center">
          FAQs
        </a>
      </Typography>
      {isManager && <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-md font-funnel-sans font-medium"
        onClick={handleRouteToAdmin}
      >
        <a href="#" className="flex items-center">
          Manager
        </a>
      </Typography>}
    </ul>
  );

  const countries = [
    {
      flag: "🇺🇸",
      name: "English",
    },
    {
      flag: "🇪🇸",
      name: "Spain",
    },
    {
      flag: "🇫🇷",
      name: "France",
    },
    {
      flag: "🇩🇪",
      name: "Germany",
    },
  ];

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="logo-box flex items-center justify-center gap-2">
          <Image src="/parkease-logo.png" alt="Parkease Logo" width={30} height={30} />
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-funnel-display font-medium"
          >
            ParkEase
          </Typography>
        </div>
        <div className="ml-2 hidden lg:block">{navList}</div>
        <div className="hidden flex-wrap items-center gap-2 lg:flex">
          <SignedOut>
            <Button variant="gradient" size="sm" className="font-funnel-sans font-medium">
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button variant="gradient" size="sm" className="font-funnel-sans font-medium">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button
                size="sm"
                variant="outlined"
                className="hidden items-center gap-2 lg:flex font-funnel-sans font-medium"
              >
                <span className="h-min text-base leading-none">
                  {countries.find(({ name }) => name === lang)?.flag}
                </span>
                {countries.find(({ name }) => name === lang)?.name}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                    }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="hidden max-h-72 w-14 lg:block">
              {countries.map(({ name, flag }) => (
                <MenuItem
                  key={name}
                  className="flex items-center gap-2 font-funnel-sans font-normal"
                  onClick={() => setLang(name)}
                >
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex w-full flex-nowrap items-center gap-x-4 lg:hidden">
          <SignedOut>
            <Button variant="gradient" size="sm" className="font-funnel-sans font-medium" fullWidth>
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button variant="gradient" size="sm" className="font-funnel-sans font-medium" fullWidth>
              <Link href="/sign-up">Signup</Link>
            </Button>
          </SignedOut>
          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button
                size="sm"
                variant="outlined"
                className="flex items-center justify-center gap-2 lg:hidden font-funnel-sans font-medium"
              >
                🇺🇸 English{" "}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`w-3.h-3.5 h-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                    }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="block max-h-72 w-20 lg:hidden">
              {countries.map(({ name, flag }) => (
                <MenuItem key={name} className="flex items-center gap-4 font-funnel-sans font-normal">
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarForDropdownWithMultipleLanguages;