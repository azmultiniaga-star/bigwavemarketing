import React from 'react';
import Link from 'next/link';

export const Services = () => {
    const services = [
        {
            title: "Paid Marketing",
            description: "Scale your reach with targeted campaigns on Meta, TikTok, and Google Ads.",
            icon: "📈",
            link: "/services"
        },
        {
            title: "Website Development",
            description: "High-converting, fast, and responsive websites built for growth.",
            icon: "💻",
            link: "/services"
        },
        {
            title: "SEO",
            description: "Dominate search results and drive organic traffic to your business.",
            icon: "🔍",
            link: "/services"
        },
        {
            title: "Social Media Management",
            description: "Build a loyal community and engage your audience with consistent management.",
            icon: "📱",
            link: "/services"
        },
        {
            title: "Content Creation",
            description: "Professional graphic design and video production that tells your brand story.",
            icon: "🎨",
            link: "/services"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Expertise</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide a comprehensive suite of digital solutions to help your business thrive in the modern landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:border-transparent transition-all duration-300">
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link href={service.link} className="inline-flex items-center text-cta font-medium hover:underline">
                                Learn More <span className="ml-2">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
