// React and Next.js imports
import React, { useState } from "react";

// Third-party library imports
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// Custom Accordion imports
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import content from "@/constants/faq";
import Meteors from "@/components/ui/meteors";

// Custom icon component
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

// AccordionCustomIcon component modified for FAQ content
const AccordionCustomIcon = ({ content }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {content.map((item, index) => (
                <Accordion key={index} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
                    <AccordionHeader className="text-2xl font-funnel-sans font-bold text-[#fcd904] hover:text-[#fcd904]/60" onClick={() => handleOpen(index + 1)}>{item.question}</AccordionHeader>
                    <AccordionBody>
                        <p className="text-gray-400 font-medium font-funnel-sans text-lg">{item.answer}</p>
                        {item.link && (
                            <a
                                href={item.link}
                                className="mt-2 flex items-center opacity-60 transition-all hover:opacity-100"
                            >
                                Learn more <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                            </a>
                        )}
                    </AccordionBody>
                </Accordion>
            ))}
        </>
    );
};

// FAQ component using AccordionCustomIcon
const FAQ = () => {
    

    return (
        <section id="faqs" className="relative mx-auto w-screen flex items-center justify-center bg-black/90 py-20">
            <div className="container flex flex-col gap-10">
                <div>
                    <h3 className="!mt-0 text-center text-6xl text-[#fcd904] font-funnel-display font-bold">Frequently Asked Questions</h3>
                    <h4 className="text-muted-foreground text-center text-gray-400 mt-3">
                        Can&apos;t find the answer you&apos;re looking for? Reach out to our customer support team.
                    </h4>
                </div>
                <div className="not-prose mt-4 flex flex-col gap-4 md:pb-20 md:mt-8">
                    <AccordionCustomIcon content={content} />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
