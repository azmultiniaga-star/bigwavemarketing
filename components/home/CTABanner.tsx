import React from 'react';
import { Button } from '../ui/Button';

export const CTABanner = () => {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent-aqua blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let’s Get Started</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Ready to scale? Book a free strategy session and get actionable insights for your business.
                </p>
                <Button href="/contact" variant="primary" className="bg-cta text-white hover:bg-white hover:text-cta text-lg px-10 py-4 shadow-xl">
                    Contact Us
                </Button>
            </div>
        </section>
    );
};
