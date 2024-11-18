"use client";

import React from "react";

const ManagerCard = ({ manager }) => {
  return (
    <div className="relative max-w-xs border border-solid border-[#fcd904] rounded-lg transition-all duration-500 hover:shadow-lg">
      {/* Manager Info */}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-5 transition-all duration-500">
          Manager {manager.id || "007"}
        </h4>
        <p className="text-md font-normal text-gray-400">
          Email: {manager.email || "coolmanager@gmail.com"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Joined: {new Date(manager.createdAt).toLocaleDateString() || "N/A"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Parking Lot Id: {manager.manager.lotId || "2134"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Parking Lot Location: {manager.manager.lot.location || "Los Angeles"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Total Parking Slots: {manager.manager.lot.totalSlots || "0"}
        </p>
      </div>
    </div>
  );
};

export default ManagerCard;
