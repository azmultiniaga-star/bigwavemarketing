import React from 'react';
import { Button } from '../ui/Button';
import { PlatformSlideshow } from './PlatformSlideshow';

export const Hero = () => {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-secondary to-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Content */}
                    <div className="lg:w-1/2 space-y-8 z-10">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-primary">
                            We’re Not Just Media Buyers — <br />
                            <span className="text-black">We’re Your Growth Partners.</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            We help brands achieve stronger, more predictable growth through strategic advertising, content, creative, and data-driven marketing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                                Book a Free Strategy Session
                            </Button>
                            <Button href="https://wa.me/1234567890" variant="outline" className="text-lg px-8 py-4">
                                WhatsApp Our Team
                            </Button>
                        </div>

                        {/* Trust Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 mt-8">
                            <div>
                                <p className="text-3xl font-bold text-primary">200+</p>
                                <p className="text-sm text-gray-500">Completed Campaigns</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">6x</p>
                                <p className="text-sm text-gray-500">Avg. ROAS Improvement</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">9</p>
                                <p className="text-sm text-gray-500">Industries Served</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Placeholder */}
                    <div className="lg:w-1/2 relative flex justify-center items-center">
                        <PlatformSlideshow />
                    </div>
                </div>
            </div>
        </section>
    );
};
