"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const platforms = [
    {
        name: 'Facebook',
        image: '/images/facebook-preview.png',
        color: 'bg-[#1877F2]',
        stats: { label: 'ROAS', value: '4.5x' }
    },
    {
        name: 'Instagram',
        image: '/images/instagram-preview.png',
        color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
        stats: { label: 'Engagement', value: 'High' }
    },
    {
        name: 'TikTok',
        image: '/images/tiktok-preview.png',
        color: 'bg-black',
        stats: { label: 'CTR', value: '2.1%' }
    },
    {
        name: 'Google',
        image: '/images/google-preview.png',
        color: 'bg-white border border-gray-200',
        stats: { label: 'Conv.', value: '18%' }
    }
];

export const PlatformSlideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % platforms.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getPositionStyles = (index: number) => {
        const length = platforms.length;
        let diff = (index - activeIndex + length) % length;

        // Adjust diff to be shortest distance
        if (diff > length / 2) diff -= length;

        if (diff === 0) {
            // Active (Center)
            return "z-20 scale-100 opacity-100 translate-x-0 shadow-2xl";
        } else if (diff === 1) {
            // Next (Right)
            return "z-10 scale-90 opacity-60 translate-x-[60%] blur-[1px]";
        } else if (diff === -1) {
            // Prev (Left)
            return "z-10 scale-90 opacity-60 -translate-x-[60%] blur-[1px]";
        } else {
            // Others (Hidden behind)
            return "z-0 scale-75 opacity-0 translate-x-0";
        }
    };

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
            {platforms.map((platform, index) => (
                <div
                    key={index}
                    className={`absolute w-[280px] h-[550px] rounded-3xl overflow-hidden transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${getPositionStyles(index)} ${platform.name === 'Google' ? 'bg-white border border-gray-100' : 'bg-black'}`}
                >
                    {/* Image Content */}
                    <div className="relative w-full h-full">
                        <Image
                            src={platform.image}
                            alt={`${platform.name} Preview`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />

                        {/* Overlay for Stats */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent pt-12">
                            <div className="flex items-center justify-between text-white">
                                <span className="font-bold text-lg">{platform.name}</span>
                                <div className="text-right">
                                    <p className="text-xs opacity-80">{platform.stats.label}</p>
                                    <p className="font-bold">{platform.stats.value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
    );
};
