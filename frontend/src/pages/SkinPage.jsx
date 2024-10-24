import { assets } from "../assets/assets";

const SkinPage = () => {
    // Array of images for the 2nd, 4th, and 6th boxes
    const boxImages = [
        assets.cream,
        assets.lipstick,
        assets.brush,
    ];

    // Array of texts for the 1st, 3rd, and 5th boxes
    const boxTexts = [
        "YUSHU CREAM",  // Text for 1st box
        "YUSHU LIPSTICK", // Text for 3rd box
        "YUSHU BRUSH" // Text for 5th box
    ];

    // Define style for the text boxes
    const textBoxStyle = {
        bgColor: 'bg-[#CC9F84]',
        textColor: 'text-white',
    };

    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${assets.bgImage})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text on top of the image */}
            <div className="relative z-10 flex flex-col items-center justify-center h-4/5 text-center">
                <h1 className="text-white text-5xl md:text-6xl font-bold italic">Beauty Inspired</h1>
                <h1 className="text-white text-5xl md:text-6xl font-bold italic mt-4">
                    by <span className="text-[#D1D1D1] font-extrabold italic">Natural Life</span>
                </h1>
            </div>

            {/* 3x2 Grid of Boxes Overlapping the Image */}
            <div className="relative z-20 -mt-24 flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3">
                    {[...Array(6)].map((_, index) => {
                        if (index % 2 === 0) { // For 1st, 3rd, and 5th boxes (0, 2, 4)
                            return (
                                <div
                                    key={index}
                                    className={`w-56 h-56 ${textBoxStyle.bgColor} shadow-lg hover:shadow-xl transition-all duration-200`}
                                >
                                    <div className="flex items-center justify-center h-full">
                                        <p className={`text-center text-4xl ${textBoxStyle.textColor}`}>
                                            {boxTexts[index / 2]} {/* Use index/2 to get correct text */}
                                        </p>
                                    </div>
                                </div>
                            );
                        } else { // For 2nd, 4th, and 6th boxes (1, 3, 5)
                            return (
                                <div
                                    key={index}
                                    className="w-56 h-56 bg-cover bg-center shadow-lg hover:shadow-xl transition-all duration-200"
                                    style={{ backgroundImage: `url(${boxImages[(index - 1) / 2]})` }} // Use (index-1)/2 for images
                                >
                                    <div className="flex items-center justify-center h-full">

                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkinPage;
