import React from 'react';
import { CTABanner } from '@/components/home/CTABanner';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
    const services = [
        {
            title: "Performance Marketing",
            description: "Scale your revenue with high-ROI paid advertising campaigns on Meta, Google, TikTok, and YouTube.",
            features: ["Meta Ads (FB/IG)", "Google Ads (Search/Shopping)", "TikTok Ads", "Retargeting Strategies"],
            icon: "📈"
        },
        {
            title: "Creative & Content",
            description: "Capture attention with scroll-stopping visuals and compelling copy that converts visitors into customers.",
            features: ["Video Ads Production", "Social Media Content", "Graphic Design", "Branding Assets"],
            icon: "🎨"
        },
        {
            title: "Websites & Funnels",
            description: "Turn traffic into leads with high-converting landing pages and seamless user experiences.",
            features: ["Landing Page Design", "Conversion Rate Optimization", "Web Development", "Lead Capture Funnels"],
            icon: "💻"
        },
        {
            title: "Strategy & Consulting",
            description: "Get a clear roadmap for growth with in-depth audits, competitor analysis, and strategic planning.",
            features: ["Growth Strategy", "Analytics Audit", "Competitor Analysis", "Campaign Planning"],
            icon: "🧠"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital marketing solutions designed to help you scale.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-4xl mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button href="/contact" variant="outline" className="w-full">
                                    Learn More
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
