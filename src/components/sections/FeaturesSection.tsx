'use client';

import { motion } from 'framer-motion';
import { features } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { AnimatedSection, StaggerContainer } from '@/components/animations/AnimationComponents';
import * as LucideIcons from 'lucide-react';

type IconName = typeof features[0]['icon'];

function getIcon(name: string, size: number = 24) {
    const icons: Record<string, any> = {
        Users: LucideIcons.Users,
        FileText: LucideIcons.FileText,
        MessageSquare: LucideIcons.MessageSquare,
        Users2: LucideIcons.Users,
        Lock: LucideIcons.Lock,
    };

    const Icon = icons[name] || LucideIcons.Star;
    return <Icon size={size} className="text-accent" />;
}

export function FeaturesSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm">Why Choose Us</span>
                    <h2 className="heading-h2 mt-2 mb-4">Premium Learning Experience</h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to excel in your tech career journey
                    </p>
                </AnimatedSection>

                {/* Features Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div key={feature.id} variants={item}>
                            <Card className="h-full flex flex-col">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                                >
                                    {getIcon(feature.icon, 24)}
                                </motion.div>

                                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Detailed Benefits Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="glass-dark rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="gradient-text">Career Ready</span>
                        </h3>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Curriculum aligned with job market demands</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Real-world project experience</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Interview preparation included</span>
                            </li>
                            {/* <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Placement support guaranteed</span>
                            </li> */}
                        </ul>
                    </div>

                    <div className="glass-dark rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="gradient-text">Expert Mentorship</span>
                        </h3>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Learn from 10+ year industry veteran</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Weekly live mentorship sessions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>One-on-one doubt clearing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Industry networking opportunities</span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-dark rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="gradient-text">Flexible Learning</span>
                        </h3>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Learn at your own pace</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Lifetime course access</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Regular content updates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent">✓</span>
                                <span>Community support forever</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
