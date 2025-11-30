import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/bigwave-logo.png"
                        alt="BigWave Marketing"
                        width={200}
                        height={50}
                        priority
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/services" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        Services
                    </Link>
                    <Link href="/case-studies" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        Case Studies
                    </Link>
                    <Link href="/blog" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        Blog
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        About
                    </Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Button href="/contact" variant="primary" className="px-5 py-2 text-sm">
                        Contact Us
                    </Button>
                </div>

                {/* Mobile Menu Button (Placeholder for now) */}
                <button className="md:hidden text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};
