import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to grow? Let's discuss your goals and how we can help you achieve them.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contact Info */}
                        <div className="lg:w-1/3 space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4">Get in Touch</h3>
                                <p className="text-gray-600 mb-6">
                                    Fill out the form or reach out to us directly. We usually respond within 24 hours.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                                            📧
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="font-medium text-gray-900">hello@bigwave.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                                            📱
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Phone</p>
                                            <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                                            💬
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">WhatsApp</p>
                                            <a href="#" className="font-medium text-cta hover:underline">Chat with us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {['Instagram', 'LinkedIn', 'Twitter'].map((social, index) => (
                                        <a key={index} href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                            {social[0]}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                        <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                                        <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Company Ltd." />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="budget" className="text-sm font-medium text-gray-700">Project Budget (Optional)</label>
                                        <select id="budget" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                            <option value="">Select a range</option>
                                            <option value="<5k">Less than $5k</option>
                                            <option value="5k-10k">$5k - $10k</option>
                                            <option value="10k-50k">$10k - $50k</option>
                                            <option value="50k+">$50k+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <Button type="submit" className="w-full md:w-auto px-8 py-4 text-lg">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
