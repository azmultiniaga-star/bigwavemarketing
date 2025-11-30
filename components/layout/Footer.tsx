import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="mb-4 block">
                            <Image
                                src="/bigwave-logo-orange.png"
                                alt="BigWave Marketing"
                                width={200}
                                height={50}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We help brands achieve stronger, more predictable growth through strategic advertising and data-driven marketing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">hello@bigwave.com</li>
                            <li className="text-gray-400">+1 (555) 123-4567</li>
                            <li className="flex space-x-4 mt-4">
                                {/* Social Icons Placeholders */}
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cta transition-colors cursor-pointer">
                                    <span className="text-xs">IG</span>
                                </div>
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cta transition-colors cursor-pointer">
                                    <span className="text-xs">LI</span>
                                </div>
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cta transition-colors cursor-pointer">
                                    <span className="text-xs">TW</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BigWave Marketing. All rights reserved.</p>
                    <p>Designed for Growth.</p>
                </div>
            </div>
        </footer>
    );
};
