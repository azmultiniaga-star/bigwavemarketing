import React from 'react';
import { CTABanner } from '@/components/home/CTABanner';
import { Button } from '@/components/ui/Button';

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            client: "TechFlow Solutions",
            industry: "SaaS",
            title: "Scaling Lead Gen for B2B SaaS",
            challenge: "High CPL and low lead quality from LinkedIn ads.",
            results: ["3x Increase in Leads", "40% Lower CPL", "$1.2M Pipeline Generated"],
            image: "bg-blue-100"
        },
        {
            client: "Urban Wear",
            industry: "E-commerce",
            title: "Doubling ROAS for Fashion Brand",
            challenge: "Stagnant growth and rising ad costs on Meta.",
            results: ["350% ROAS (up from 120%)", "2x Revenue YoY", "50k New Customers"],
            image: "bg-pink-100"
        },
        {
            client: "Dr. Smith Clinic",
            industry: "Healthcare",
            title: "Local SEO & Paid Search Domination",
            challenge: "Low visibility in local search results.",
            results: ["#1 Ranking for Key Terms", "200+ Monthly Appointments", "5x ROI"],
            image: "bg-green-100"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Case Studies</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real results for real businesses. See how we help our partners grow.
                    </p>
                </div>
            </section>

            {/* Case Studies List */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-20">
                        {caseStudies.map((study, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                                {/* Image Placeholder */}
                                <div className={`w-full md:w-1/2 h-80 rounded-3xl ${study.image} flex items-center justify-center shadow-sm`}>
                                    <span className="text-gray-500 font-medium text-lg">{study.client} Visual</span>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2">
                                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                                        {study.industry}
                                    </div>
                                    <h2 className="text-3xl font-bold text-primary mb-4">{study.title}</h2>
                                    <div className="mb-6 space-y-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900">Challenge:</h4>
                                            <p className="text-gray-600">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Results:</h4>
                                            <ul className="list-disc list-inside text-gray-600">
                                                {study.results.map((result, idx) => (
                                                    <li key={idx}>{result}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Button href="#" variant="outline">
                                        Read Full Case Study
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
