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
            <div className="max-w-sm w-full bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Hey! Come Check Out Our Amazing Clothing Deals 👋
                    </div>
                    <p className="text-gray-700 text-base">
                        We've got the latest trends and best deals waiting for you. Don't miss out!
                    </p>
                </div>
                <div className="px-6 py-4 bg-gray-100">
                    <button onClick={handleClick} className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
                        Close
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default AdComponent;