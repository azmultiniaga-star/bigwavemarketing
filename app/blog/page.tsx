import React from 'react';
import { CTABanner } from '@/components/home/CTABanner';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            title: "How to Improve Your Digital Strategy in 2025",
            excerpt: "The digital landscape is shifting. Here are the key trends you need to know to stay ahead.",
            date: "Oct 24, 2025",
            category: "Strategy"
        },
        {
            title: "3 Ways to Increase ROAS Without Higher Spend",
            excerpt: "Optimization isn't just about spending more. It's about spending smarter. Learn our top tactics.",
            date: "Nov 12, 2025",
            category: "Performance"
        },
        {
            title: "Why Brands Fail in Social Media (And How to Fix It)",
            excerpt: "Are you posting without purpose? Discover the common pitfalls brands make and how to avoid them.",
            date: "Nov 28, 2025",
            category: "Social Media"
        },
        {
            title: "The Ultimate Guide to TikTok Ads",
            excerpt: "TikTok is no longer just for dancing. It's a powerful ad platform. Here's how to use it.",
            date: "Dec 05, 2025",
            category: "Paid Social"
        },
        {
            title: "Email Marketing Automation 101",
            excerpt: "Stop sending manual emails. Automate your flows to nurture leads while you sleep.",
            date: "Dec 10, 2025",
            category: "Automation"
        },
        {
            title: "SEO vs. PPC: Which is Right for You?",
            excerpt: "The age-old debate. We break down the pros and cons of each channel for different business types.",
            date: "Dec 15, 2025",
            category: "Strategy"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Our Blog</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Insights, strategies, and news from the world of digital marketing.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for Blog Image */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent-blue/10 group-hover:scale-105 transition-transform duration-500"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">
                                        <span>{post.category}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <Link href="#" className="text-cta font-medium text-sm hover:underline">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="flex justify-center mt-16 gap-2">
                        <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold hover:bg-gray-200">2</button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold hover:bg-gray-200">→</button>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
