"use client";

import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const AddManager = () => {
    const [formData, setFormData] = useState({ email: "", parkingLotId: "" });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post("/api/add-manager", formData);

            if (data.success) {
                toast.success*("Manager added successfully!");
            } else {
                toast.error(data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error adding manager:", error);
            alert(error.response?.data?.message || "Failed to add manager!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center bg-black/90 px-6 py-10">
            <h1 className="text-[#fcd904] text-4xl text-center font-funnel-sans font-bold mb-8">
                Add New Manager
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white/10 rounded-lg p-6 md:p-8 w-full max-w-[500px] flex flex-col space-y-6 mt-10"
            >
                <div>
                    <label
                        htmlFor="email"
                        className="block text-[#fcd904] text-lg font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg bg-black/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fcd904]"
                        placeholder="Enter manager email"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="parkingLotId"
                        className="block text-[#fcd904] text-lg font-bold mb-2"
                    >
                        Parking Lot ID
                    </label>
                    <input
                        type="text"
                        name="parkingLotId"
                        id="parkingLotId"
                        value={formData.parkingLotId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg bg-black/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fcd904]"
                        placeholder="Enter parking lot ID"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full text-black font-semibold bg-[#fcd904] px-4 py-2 rounded-lg shadow-md hover:bg-[#dcb304] hover:shadow-lg transition-all duration-300 ${loading && "opacity-50 cursor-not-allowed"
                        }`}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Add Manager"}
                </button>
            </form>
        </div>
    );
};

export default AddManager;
