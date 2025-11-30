import React from 'react';

export const Testimonials = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Hear from the founders and marketing directors we've partnered with.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Decorative Quote Mark */}
                    <div className="absolute -top-12 -left-12 text-9xl text-gray-100 font-serif z-0">"</div>

                    <div className="relative z-10 bg-secondary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-lg">
                        {/* Portrait */}
                        <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full bg-gray-300 overflow-hidden border-4 border-white shadow-md">
                            {/* Placeholder Image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-xl md:text-2xl font-medium text-gray-800 italic mb-6">
                                "BigWave transformed our digital presence. Their data-driven approach helped us scale our ad spend profitably, and we saw a 3x increase in leads within the first month. Truly a partner, not just a vendor."
                            </p>
                            <div>
                                <h4 className="text-lg font-bold text-primary">Sarah Jenkins</h4>
                                <p className="text-gray-500">CMO, TechFlow Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
