import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Role } from "@prisma/client";

const checkUserAndCreate = async (req) => {
  try {
    const user = await currentUser();
    console.log("User:", user);
    const email = user.emailAddresses[0].emailAddress;

    if (!user || !email)
      return {
        message: "User or email not found! Please login again.",
        status: 400,
      };

    const userExists = await client.user.findUnique({
      where: { email },
    });

    if (userExists)
      return {
        message: "User already exists!",
        status: 201,
      };

    const newUser = await client.user.create({
      data: {
        email,
        role: Role.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    if (!newUser)
      return {
        message: "New user could not be created!",
        status: 500,
      };

    console.log("New User:", newUser);

    return {
      message: "User created successfully!",
      status: 200,
    };
  } catch (error) {
    console.log("Error in checkUserAndCreate:", error);
    return {
      message: "Error while checking if user exists!",
      status: 500,
    };
  }
};

export default checkUserAndCreate;
