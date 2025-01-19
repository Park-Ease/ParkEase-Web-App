"use client";

import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Avatar } from "@material-tailwind/react";
import { formatDate } from "@/lib/utils";

const ProfilePage = () => {
    const { user } = useUser();

    if (!user) {
        return <div className="h-screen text-3xl font-funnel-sans flex items-center justify-center bg-black/90 text-white">Loading...</div>;
    }

    return (
        <div className="p-6 h-screen bg-black/90 space-y-8 flex flex-col items-center">
            <h1 className="text-[#fcd904] text-4xl md:text-5xl font-funnel-sans font-bold text-center mt-14">
                Profile
            </h1>
            <div className="bg-white/10 rounded-xl p-6 md:p-10 w-full max-w-[500px] flex flex-col items-start">
                <div className="text-white mb-6 flex self-center">
                    <Avatar src={user?.imageUrl} alt="avatar" size="xl" />
                </div>
                <div className="space-y-4 w-full">
                    {[
                        { label: "Full Name", value: user?.fullName || "Jane Doe" },
                        { label: "Email", value: user?.emailAddresses[0]?.emailAddress || "somebody@gmail.com" },
                        { label: "Account Created At", value: formatDate(user?.createdAt) || "12th January 2024" },
                        { label: "Last Sign-in", value: formatDate(user?.lastSignInAt) || "14th January 2024" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="text-white text-lg md:text-xl flex justify-between items-center"
                        >
                            <strong className="w-1/2">{item.label}:</strong>
                            <span className="w-1/2 text-right">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
