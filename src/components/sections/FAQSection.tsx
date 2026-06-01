'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '@/lib/constants';
import { AnimatedSection } from '@/components/animations/AnimationComponents';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section id="faq" className="section-padding relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container-custom max-w-3xl mx-auto">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm">Common Questions</span>
                    <h2 className="heading-h2 mt-2 mb-4">Frequently Asked Questions</h2>
                    <p className="text-base text-muted-foreground">
                        Everything you need to know about our courses and learning program
                    </p>
                </AnimatedSection>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-4"
                >
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.4,
                            }}
                            viewport={{ once: true, margin: '-50px' }}
                            className="glass-dark rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                            >
                                <h3 className="font-semibold text-foreground text-lg pr-8">{item.question}</h3>
                                <motion.div
                                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown size={24} className="text-primary" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openItems.includes(item.id) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t border-border"
                                    >
                                        <p className="p-6 text-muted-foreground leading-relaxed">{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-16 text-center glass-dark rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                    <p className="text-muted-foreground mb-6">
                        Book a free consultation with our team to discuss your learning goals
                    </p>
                    <motion.a
                        href="tel:+918979620136"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow-md transition-shadow"
                    >
                        Call Now
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
