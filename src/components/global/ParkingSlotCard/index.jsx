"use client";

import React from "react";

const ParkingSlotCard = ({ slot }) => {
  return (
    <div className="relative min-w-xs border border-solid border-[#fcd904] rounded-lg transition-all duration-500 hover:shadow-lg">
      {/* Slot Info */}
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-5 transition-all duration-500">
          Parking Slot {slot.slotNumber || "N/A"}
        </h4>
        <p className="text-md font-normal text-gray-400">
          Lot Id: {slot.lotId || "N/A"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Status: {slot.status==true ? "Available" : "Occupied"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Latitude: {slot.locationX || "N/A"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Longitude: {slot.locationY || "N/A"}
        </p>
        <p className="text-md font-normal text-gray-400">
          Created At: {new Date(slot.createdAt).toLocaleDateString() || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ParkingSlotCard;
