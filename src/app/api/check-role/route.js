import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { client } from "@/lib/prisma";

export async function GET(req) {
  try {
    const user = await currentUser();

    if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
      return NextResponse.json({
        message: "User not found! Please login again.",
        role: "user",
        status: 400,
      });
    }

    const email = user.emailAddresses[0].emailAddress;

    const userData = await client.user.findUnique({
      where: { email },
      select: { role: true },
    });

    //console.log("Userdata Role:",userData.role);

    if (!userData || !(userData.role === Role.MANAGER || userData.role === Role.ADMIN)) {
      return NextResponse.json({
        message: "Unauthorized! You are not an admin or manager.",
        role: "user",
        status: 403,
      });
    }

    return NextResponse.json({
      message: `Authorized! You are ${userData.role === Role.MANAGER ? "a manager" : "an admin"}.`,
      role: userData.role.toLowerCase(),
      status: 200,
    });
  } catch (error) {
    console.error("Error occurred while checking user role:", error);
    return NextResponse.json(
      { message: "Internal server error", status: 500, role: "user" },
      { status: 500 }
    );
  }
}
