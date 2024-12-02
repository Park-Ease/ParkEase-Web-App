
const TestimonialCard = ({ stars, text, userName, designation }) => {
    return (
        <div className="group relative h-[300px] w-[400px] md:w-[450px] bg-white rounded-lg border border-gray-200 shadow-lg p-5 flex flex-col justify-between">
            <div>
                <div className="flex mb-2">
                    {[...Array(stars)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927a1 1 0 011.902 0l1.15 3.53a1 1 0 00.95.691h3.708a1 1 0 01.592 1.805l-3 2.181a1 1 0 00-.364 1.118l1.15 3.53a1 1 0 01-1.538 1.118L10 13.882l-3.05 2.182a1 1 0 01-1.538-1.118l1.15-3.53a1 1 0 00-.364-1.118l-3-2.181a1 1 0 01.592-1.805h3.708a1 1 0 00.95-.691l1.15-3.53z" />
                        </svg>
                    ))}
                </div>
                <p className="text-gray-800 text-base mb-4">{text}</p>
            </div>
            <div className="flex items-center mt-4">
                <div>
                    <p className="font-semibold text-gray-900">{userName}</p>
                    <p className="text-sm text-gray-500">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
