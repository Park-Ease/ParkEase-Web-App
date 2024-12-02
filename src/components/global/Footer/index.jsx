"use client";

import React from "react"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { TextShine } from "@/components/ui/text-shine";
import ScrollContext from "@/context/ScrollContext";

export default function Footer() {
    const { targetRef, handleScrollToComponent } = React.useContext(ScrollContext);
    const socialPostMessage = encodeURIComponent(
        "Check out the innovative ParkEase Parking Slot Detection and Management App! Truly revolutionary idea with intuitive interfaces on mobile and web. Really loved the idea and enjoyed exploring the features! Will definitely download and try it out! Big shoutout to the amazing creators: @ArjunNambiar, @AdityaKiran, @AshishBaghel, and @AjaySBiradar. #ParkEase #SmartParking #MakeParkingSeamless"
    );

    return (
        <footer id="socials" className=" py-12 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10 md:gap-28 md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <Image src="/parkease-logo.png" alt="Parkease Logo" width={50} height={50} />
                        <Link href="/" className="flex items-center gap-2 mt-2">
                            <h2 className="text-xl font-bold">ParkEase</h2>
                        </Link>

                        <h1 className="dark:text-gray-300 mt-4">
                            Made with ❣️ by{" "}
                            <span className="dark:text-[#039ee4]">
                                <Link href="https://github.com/Park-Ease">@A4Awesome Team</Link>
                            </span>
                        </h1>
                        <div className="mt-2">
                            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://parkease-web-app.vercel.app&summary=${socialPostMessage}`}>
                                <Button variant="filled" className="flex gap-2 font-funnel-sans font-semibold whitespace-nowrap">
                                    Share Your Thoughts On
                                    <ArrowTopRightOnSquareIcon className="icon-class ml-1 w-3.5" />
                                </Button>
                            </Link>
                        </div>
                        <p className="text-sm dark:text-gray-400 mt-5">
                            © {new Date().getFullYear()} ParkEase. All rights reserved.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Pages</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" onClick={() => { targetRef.current = document.getElementById("hero"); handleScrollToComponent(); }} className="hover:text-[#fcd904]">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={() => { targetRef.current = document.getElementById("features"); handleScrollToComponent(); }} className="hover:text-[#fcd904]">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={() => { targetRef.current = document.getElementById("testimonials"); handleScrollToComponent(); }} className="hover:text-[#fcd904]">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={() => { targetRef.current = document.getElementById("faqs"); handleScrollToComponent(); }} className="hover:text-[#fcd904]">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Socials</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="https://github.com/Park-Ease" className="hover:text-[#fcd904] flex items-center">
                                        Github
                                        <ArrowTopRightOnSquareIcon className="ml-1 w-4" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/arjun-nambiar-439aaa255/" className="hover:text-[#fcd904] flex items-center">
                                        LinkedIn
                                        <ArrowTopRightOnSquareIcon className="ml-1 w-4" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://x.com/ArjunNambiar03" className="hover:text-[#fcd904] flex items-center">
                                        X
                                        <ArrowTopRightOnSquareIcon className="ml-1 w-4" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/privacy-policy" className="hover:text-[#fcd904]">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="hover:text-[#fcd904]">
                                        Terms of Service
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex my-10 items-center justify-center   ">
                    <TextShine text="PARKEASE" shineColor="#fcd904" duration={5} />
                    {/* <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-funnel-display font-bold bg-clip-text text-black select-none">
                        PARKEASE
                    </h1> */}
                </div>

            </div>
        </footer>
    );
}
