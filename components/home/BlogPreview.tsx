import React from 'react';
import Link from 'next/link';

export const BlogPreview = () => {
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
        }
    ];

    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-primary mb-4">Latest Insights</h2>
                        <p className="text-gray-600">Expert advice to help you grow.</p>
                    </div>
                    <Link href="/blog" className="hidden md:inline-block text-primary font-medium hover:text-cta transition-colors">
                        View All Articles &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
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

                <div className="mt-8 text-center md:hidden">
                    <Link href="/blog" className="text-primary font-medium hover:text-cta transition-colors">
                        View All Articles &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};
