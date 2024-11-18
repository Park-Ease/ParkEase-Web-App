"use client";

import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Avatar } from "@material-tailwind/react";

const ProfilePage = () => {
    const { user } = useUser();
    console.log("user from clerk", user);

    if (!user) {
        return <div className="flex items-center justify-center h-screen bg-black text-white">Loading...</div>;
    }

    return (
        <div className="p-6 w-screen h-screen bg-black/90 space-y-8 flex flex-col items-center">
            <h1 className="text-[#fcd904] text-4xl md:text-5xl font-funnel-sans font-bold text-center mt-14">
                Profile
            </h1>
            <div className="bg-white/10 rounded-xl p-6 md:p-10 w-full max-w-[500px] flex flex-col items-start">
                <div className="text-white mb-6 flex self-center">
                    <Avatar src={user?.imageUrl} alt="avatar" size="xl" />
                </div>
                <div className="text-white text-lg md:text-xl my-2">
                    <strong>User ID:</strong> {user?.id || "user_124453223"}
                </div>
                <div className="text-white text-lg md:text-xl my-2">
                    <strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress || "somebody@gmail.com"}
                </div>
                <div className="text-white text-lg md:text-xl my-2">
                    <strong>Full Name:</strong> {user?.fullName || "Jane Doe"}
                </div>
                <div className="text-white text-lg md:text-xl my-2">
                    <strong>Account Created At:</strong>{" "}
                    {new Date(user?.createdAt).toLocaleDateString() || "12th January 2024"}
                </div>
                <div className="text-white text-lg md:text-xl my-2">
                    <strong>Last Sign-in:</strong>{" "}
                    {new Date(user?.lastSignInAt).toLocaleDateString() || "14th January 2024"}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
