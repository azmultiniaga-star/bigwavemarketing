import React from 'react';
import { CTABanner } from '@/components/home/CTABanner';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">About BigWave</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are a team of strategists, creatives, and data analysts dedicated to growing your business.
                    </p>
                </div>
            </section>

            {/* Agency Story */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Founded in 2020, BigWave Marketing started with a simple belief: marketing should be a reliable growth engine, not a gamble. We saw too many agencies focusing on vanity metrics like "likes" and "impressions" while businesses struggled to see real ROI.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We set out to change that by combining creative excellence with rigorous data analysis. Today, we help brands across 9 industries scale their revenue and build lasting connections with their customers.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-gray-200 rounded-3xl h-80 w-full flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Team Photo Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Mission & Values</h2>
                        <p className="text-gray-600">The principles that guide our work every day.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Transparency", desc: "We believe in open communication. You'll always know where your budget is going and what results it's driving." },
                            { title: "Results-First", desc: "We prioritize metrics that impact your bottom line: revenue, leads, and ROAS." },
                            { title: "Partnership", desc: "We act as an extension of your team, not just a vendor. Your success is our success." }
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Why Choose Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Data-Driven Strategy",
                            "Creative Excellence",
                            "Multi-Industry Experience",
                            "Proactive Communication"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-6 border border-gray-100 rounded-xl hover:border-accent-blue transition-colors">
                                <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue font-bold">
                                    ✓
                                </div>
                                <span className="font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
