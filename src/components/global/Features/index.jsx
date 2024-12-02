import React from "react";
import featuresList from "@/constants/features-list";
import { MagicCard } from "@/components/ui/magic-card";

const Features = () => {

    return (
        <section id="features" className="py-32 bg-black/90">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <h2 className="text-4xl font-bold text-white leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0 font-funnel-display">
                            Enjoy the finest features with our products
                        </h2>
                    </div>
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <h4 className="font-normal text-gray-500 mb-5">
                            Simplify your parking management with our innovative features.
                            <br />
                            Our features are designed to streamline your parking operations, enhance user experience, and improve overall efficiency.
                        </h4>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feature, index) => (
                        <MagicCard
                            key={index}
                            className="cursor-pointer flex flex-col items-center justify-center p-4 rounded-2xl shadow-2xl text-center bg-[#fcd904]"
                            gradientColor={"whitesmoke"}
                        >
                            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 mx-auto">
                                <feature.icon className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize">
                                {feature.title}
                            </h4>
                            <p className="text-sm font-normal text-gray-700 leading-5">
                                {feature.description}
                            </p>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
