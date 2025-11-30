"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <Link
                            href="/services"
                            className="block text-gray-600 hover:text-primary font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/case-studies"
                            className="block text-gray-600 hover:text-primary font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/blog"
                            className="block text-gray-600 hover:text-primary font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/about"
                            className="block text-gray-600 hover:text-primary font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <div className="pt-2">
                            <Button href="/contact" variant="primary" className="w-full justify-center">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
