"use client";

import React, { useState, useEffect } from 'react';

export const TrustedLogos = () => {
    const logos = [
        { name: 'Google', color: 'text-gray-400' },
        { name: 'Shopify', color: 'text-gray-400' },
        { name: 'Meta', color: 'text-gray-400' },
        { name: 'HubSpot', color: 'text-gray-400' },
        { name: 'Canva', color: 'text-gray-400' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % logos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleLogos = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(logos[(currentIndex + i) % logos.length]);
        }
        return visible;
    };

    return (
        <section className="py-12 border-y border-gray-100 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-widest">Trusted by Industry Leaders</p>

                {/* Mobile Slideshow */}
                <div className="md:hidden flex justify-between items-center gap-4 transition-all duration-500 px-4">
                    {getVisibleLogos().map((logo, index) => (
                        <div key={`${currentIndex}-${index}`} className={`text-lg font-bold ${logo.color} flex flex-col items-center gap-2 min-w-[80px]`}>
                            <span className="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            {logo.name}
                        </div>
                    ))}
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <div key={index} className={`text-2xl font-bold ${logo.color} flex items-center gap-2`}>
                            <span className="w-8 h-8 bg-gray-200 rounded-full block"></span>
                            {logo.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
