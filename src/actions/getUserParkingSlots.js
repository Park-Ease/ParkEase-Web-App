import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const getUserParkingSlots = async () => {
  try {
    const user = await currentUser();
    if (!user || !user.emailAddresses[0].emailAddress) {
      return {
        status: 401,
        message: "User not found. Please login.",
        data: null,
      };
    }

    const dbUser = await client.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
      include: {
        manager: {
          include: {
            lot: {
              include: {
                slots: true,
              },
            },
          },
        },
      },
    });

    if (!dbUser || !dbUser.manager) {
      return {
        status: 400,
        message: "User is not a manager or does not exist.",
        data: null,
      };
    }

    const parkingSlots = dbUser.manager?.lot?.slots || [];

    return {
      status: 200,
      message: "Parking slots fetched successfully",
      data: parkingSlots,
    };
  } catch (error) {
    console.error("Error getting user parking slots:", error);
    return {
      status: 500,
      message: "Error while fetching user parking slots!",
      data: null,
    };
  }
};

export default getUserParkingSlots;
