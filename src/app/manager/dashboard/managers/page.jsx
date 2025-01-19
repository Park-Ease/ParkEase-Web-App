import React from "react";
import getAllManagers from "@/actions/getAllManagers";
import ToastHandler from "@/components/global/ToastHandler";
import ManagerCard from "@/components/global/ManagerCard";
import Link from "next/link";

const AdminManagersPage = async () => {
  const { status, data, message, role } = await getAllManagers();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-black/90 px-16 py-10">
      <h1 className="text-[#fcd904] text-5xl text-center font-funnel-sans font-bold mb-10">
        Managers
      </h1>
      <ToastHandler message={message} isError={status !== 200} />
      {status === 200 && data.length === 0 && (
        <p className="text-white text-2xl font-funnel-sans font-bold">
          No managers found
        </p>
      )}
      {status === 200 && data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((manager, index) => (
            <ManagerCard key={manager.id} manager={manager} />
          ))}
        </div>
      )}

      {role=="admin" && (
        <Link
        href={"/manager/dashboard/managers/add"}
          className="absolute bottom-10 right-10 text-black font-bold bg-[#fcd904] px-6 py-3 rounded-lg shadow-md hover:bg-[#dcb304] hover:shadow-lg transition-all duration-300"
        >
          Add +
        </Link>
      )}

    </div>

  );
};

export default AdminManagersPage;
