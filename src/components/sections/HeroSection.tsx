'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trustBadges } from '@/lib/constants';
import { AnimatedSection } from '@/components/animations/AnimationComponents';

export function HeroSection() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-10 md:pt-20 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            />

            <div className="container-custom relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badges */}
                        <motion.div variants={item} className="flex flex-wrap gap-3">
                            {[
                                { icon: '◆', label: 'AI Powered' },
                                { icon: '◆', label: 'Industry Ready' },
                                // { icon: '◆', label: 'Job Guaranteed' },
                            ].map((badge) => (
                                <span
                                    key={badge.label}
                                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-foreground flex items-center gap-2"
                                >
                                    <span className="text-accent font-bold">{badge.icon}</span>
                                    {badge.label}
                                </span>
                            ))}
                        </motion.div>

                        {/* Main Headline */}
                        <motion.div variants={item} className="space-y-4">
                            <h1 className="heading-h1 text-white leading-tight">
                                Master Cloud, DevOps & AI Skills
                                <span className="gradient-text ml-2">That Companies Actually Hire For</span>
                            </h1>
                            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                                Learn directly from industry veteran Anirudh Dobhal with 10+ years of real-world experience building
                                scalable systems in top global companies.
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button variant="primary" size="lg" className="group"
                                onClick={() => {
                                    document.getElementById('courses')?.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                Explore Courses
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <ArrowRight size={20} />
                                </motion.span>
                            </Button>
                            <Button variant="outline" size="lg"
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                Book Free Consultation
                            </Button>
                        </motion.div>

                        {/* Trust Section */}
                        <motion.div variants={item} className="pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-4">Trusted by professionals at</p>
                            <div className="flex flex-wrap gap-3">
                                {trustBadges.slice(0, 5).map((badge) => (
                                    <motion.div
                                        key={badge}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs font-semibold text-primary"
                                    >
                                        {badge}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Floating Cards */}
                    <div className="relative h-96 md:h-full hidden lg:block">
                        {/* Placeholder Instructor Image with Glow */}
                        {/* <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute top-0 right-0 w-80 h-80 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-glow-xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                                alt="Anirudh Dobhal"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                        </motion.div> */}

                        {/* Floating Achievement Cards */}
                        {/* <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute top-20 left-0 glass-dark rounded-xl p-4 w-56"
                        >
                            <div className="flex items-center gap-3">
                                <Star className="text-accent" fill="currentColor" />
                                <div>
                                    //
                                    <p className="font-semibold text-sm">5000+ Students</p>
                                    <p className="text-xs text-muted-foreground">Training successfully</p>
                                </div>
                            </div>
                        </motion.div> */}

                        {/* <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.5,
                            }}
                            className="absolute bottom-20 right-0 glass-dark rounded-xl p-4 w-56"
                        >
                            <div className="flex items-center gap-3">
                                <Star className="text-accent" fill="currentColor" />
                                <div>
                                    <p className="font-semibold text-sm">95% Satisfaction</p>
                                    <p className="text-xs text-muted-foreground">Student satisfaction rate</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            {/* <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="w-1 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div> */}
        </section>
    );
}
