import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Role } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const user = await currentUser();
    if (!user || !user.emailAddresses?.length) {
      return NextResponse.json(
        { message: "User not found! Please login again.", status: 400 },
        { status: 400 }
      );
    }

    const data = await request.json();

    if (!data || !data.email || !data.parkingLotId) {
      return NextResponse.json(
        { message: "Please provide valid user details.", status: 400 },
        { status: 400 }
      );
    }

    console.log("Data sent by the user:", data);

    // Check if user exists
    let userId;
    const existingUser = await client.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      if (existingUser.role !== Role.MANAGER) {
        const updatedUser = await client.user.update({
          where: { id: existingUser.id },
          data: { role: Role.MANAGER },
        });
        userId = updatedUser.id;
      } else {
        userId = existingUser.id;
      }
    } else {
      const newUser = await client.user.create({
        data: {
          email: data.email,
          role: Role.MANAGER,
        },
      });
      userId = newUser.id;
    }

    const newManager = await client.manager.create({
      data: {
        userId,
        lotId: data.parkingLotId,
      },
    });

    return NextResponse.json(
      { message: "New manager created successfully!", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred while adding a new manager:", error);

    if (error.code === "P2002") {
      return NextResponse.json(
        { message: "Manager or Parking Lot already assigned.", status: 400 },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error", status: 500 },
      { status: 500 }
    );
  }
}
