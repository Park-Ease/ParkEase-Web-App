import { client } from "@/lib/prisma";
import { Role } from "@prisma/client";

const getAllManagers = async () => {
  try {
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
      };
    }
  
    console.log("All Managers", managers);
  
    return { status: 200, data: managers };
  } catch (error) {
    console.error("Error fetching all managers", error);
    return { status: 500, message: "Internal server error", data: null };
  }
};

export default getAllManagers;
