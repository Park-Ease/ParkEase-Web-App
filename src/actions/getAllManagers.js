import { client } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";

const getAllManagers = async () => {
  try {
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;

    const userDetails = await client.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!userDetails)
      return {
        status: 401,
        message: "User not found. Please try again.",
        data: null,
        role: "user",
      };

    const managers = await client.user.findMany({
      where: { role: Role.MANAGER },
      include: {
        manager: {
          select: {
            lotId: true,
            lot: {
              select: {
                location: true,
                totalSlots: true,
              },
            },
          },
        },
      },
    });

    if (!managers || managers.length === 0) {
      return {
        status: 400,
        message: "No managers found",
        data: null,
        role: userDetails?.role,
      };
    }

    console.log("All Managers", managers);

    return {
      status: 200,
      data: managers,
      message: "All managers retrieved successfully!",
      role: userDetails?.role.toLowerCase(),
    };
  } catch (error) {
    console.error("Error fetching all managers", error);
    return { status: 500, message: "Internal server error", data: null };
  }
};

export default getAllManagers;
