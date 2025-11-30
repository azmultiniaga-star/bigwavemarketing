import React from 'react';

export const Stats = () => {
    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Side: Mission */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Our Impact</h2>
                        <blockquote className="text-2xl font-medium leading-relaxed text-gray-800 border-l-4 border-cta pl-6">
                            "We’re committed to helping businesses grow faster through smarter marketing strategies and high-performing execution."
                        </blockquote>
                        <p className="mt-6 text-gray-600">
                            We focus on metrics that matter. No vanity metrics, just real revenue growth and measurable results.
                        </p>
                    </div>

                    {/* Right Side: Stats Cards */}
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl font-bold text-cta mb-2">$25M+</p>
                            <p className="text-gray-600 font-medium">Revenue Influenced</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-5xl font-bold text-accent-blue mb-2">350%</p>
                            <p className="text-gray-600 font-medium">Average Client Growth</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                            <p className="text-5xl font-bold text-primary mb-2">95%</p>
                            <p className="text-gray-600 font-medium">Improved Ad Performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
