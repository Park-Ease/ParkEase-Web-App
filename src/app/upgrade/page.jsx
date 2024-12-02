import Image from "next/image";
import React from "react";

const Upgrade = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[#fcd904]">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full md:px-10 px-6 md:py-16 py-10 bg-gray-900 rounded-2xl flex flex-col justify-between items-center h-full">
          <div className="flex flex-col justify-center items-center gap-8">
            <Image
              src="/parkease-logo.png"
              alt="parkease logo image"
              height={100}
              width={100}
            />
            <div className="flex flex-col items-center">
              <h2 className="text-[#fcd904] md:text-6xl text-4xl font-bold font-manrope leading-snug">
                Coming Soon!
              </h2>
              <h3 className="text-gray-500 text-base md:text-lg font-normal leading-relaxed mt-4">
                PRO version will be out soon...
              </h3>
              <ul className="text-gray-300 mt-8 text-sm md:text-base font-normal leading-snug space-y-2">
                <li className="text-lg text-gray-600">Features</li>
                <li>🔒 Parking Theft Detection</li>
                <li>🚗 Better Slot Priority Management</li>
                <li>📊 Advanced Parking Analytics</li>
                <li>⚙️ Customizable Features for Unique Needs</li>
                <li>🔔 Real-Time Notifications and Alerts</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm md:text-base font-normal mt-10">
            Get in touch with us:{" "}
            <a
              href="mailto:sslayer441@gmail.com"
              className="hover:text-gray-100 transition-all duration-300"
            >
              sslayer441@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
