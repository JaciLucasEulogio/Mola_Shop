import React from 'react';

const PromoBanner = () => {
    return (
        <section className="bg-gradient-to-r from-pink-500 to-purple-500 py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <h2 className="text-white text-3xl font-semibold mb-4 md:mb-0 md:mr-4">
                        Discover Our Latest Collection
                    </h2>
                    <a href="/cart" className="bg-white text-pink-500 hover:bg-pink-400 hover:text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300">
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;