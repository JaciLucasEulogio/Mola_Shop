import React, { useState } from 'react';

const AdComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <aside className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 flex">
                <div className="w-1/2 p-6 flex items-center justify-center">
                    <img src="https://i.ibb.co/4SMSLyJ/discount-homepageimg.png" alt="Discount Image" className="w-3/4 h-auto object-contain" />
                </div>
                <div className="w-1/2 px-6 py-8 flex flex-col justify-center">
                    <div className="font-bold text-3xl mb-4 text-center text-gray-800">
                        Hey! Come Check Out Our Amazing Clothing Deals 👋
                    </div>
                    <p className="text-gray-700 text-lg text-center">
                        We've got the latest trends and best deals waiting for you. Don't miss out!
                    </p>
                    <div className="mt-6 flex justify-center">
                        <button onClick={handleClick} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AdComponent;


