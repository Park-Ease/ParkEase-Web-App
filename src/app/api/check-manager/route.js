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
        isManager: false,
        status: 400,
      });
    }

    const email = user.emailAddresses[0].emailAddress;

    const userData = await client.user.findUnique({
      where: { email },
      select: { role: true },
    });

    if (!userData || userData.role !== Role.MANAGER) {
      return NextResponse.json({
        message: "Unauthorized! You are not a manager.",
        isManager: false,
        status: 403,
      });
    }

    return NextResponse.json({
      message: "Authorized! You are a manager.",
      isManager: true,
      status: 200,
    });
  } catch (error) {
    console.error("Error occurred while checking user role:", error);
    return NextResponse.json(
      { message: "Internal server error", status: 500, isManager: false },
      { status: 500 }
    );
  }
}
