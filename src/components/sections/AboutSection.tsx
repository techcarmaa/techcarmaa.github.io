'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/constants';
import { AnimatedSection } from '@/components/animations/AnimationComponents';

export function AboutSection() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <AnimatedSection className="text-center mb-2">
                    <span className="text-accent font-semibold text-sm">Meet Your Mentor</span>
                    <h2 className="heading-h2 mt-2 mb-4">Anirudh Dobhal</h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Veteran Software Architect with 10+ years of industry experience building scalable systems
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <AnimatedSection direction="left">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="relative"
                        >
                            <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden border-2 border-primary/50 shadow-glow-xl">
                                <img
                                    src="/annibhaiya.jpg"
                                    alt="Anirudh Dobhal"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    {/* Content */}
                    <AnimatedSection direction="right" className="space-y-6">
                        <div>
                            <h3 className="heading-h3 mb-4">Industry Experience</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                With 10+ years of hands-on experience, I've architected and deployed systems serving millions of users
                                globally. My journey spans from early-stage startups to Fortune 500 companies.
                            </p>

                            <div className="space-y-4">

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                        <img
                                            src="/mack.png"
                                            alt="McKinsey Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-foreground">
                                            McKinsey & Company
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Cloud Architecture Consultant
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                        <img
                                            src="/samsung.png"
                                            alt="Samsung Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-foreground">
                                            Samsung HQ South Korea
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Senior DevOps Engineer
                                        </p>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="text-accent font-bold text-lg mt-0.5">◆</span>
                                    <div>
                                        <p className="font-semibold text-foreground">McKinsey & Company</p>
                                        <p className="text-sm text-muted-foreground">Cloud Architecture Consultant</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-accent font-bold text-lg mt-0.5">◆</span>
                                    <div>
                                        <p className="font-semibold text-foreground">Samsung HQ South Korea</p>
                                        <p className="text-sm text-muted-foreground">Senior DevOps Engineer</p>
                                    </div>
                                </div>

                           
                            </div> */}
                        </div>

                        {/* Certifications */}
                        <div className="pt-6 border-t border-border">
                            <p className="font-semibold text-foreground mb-3">Certifications & Awards</p>
                            <div className="flex flex-wrap gap-2">
                                {['AWS Solutions Architect', 'Kubernetes Certified', 'Azure Fundamentals'].map((cert) => (
                                    <span key={cert} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Stats */}
                <motion.div
                    className="flex flex-wrap justify-center gap-20 mt-16 pt-16 border-t border-border"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center flex flex-col items-center min-w-[120px]"
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                <p className="text-3xl md:text-4xl font-bold gradient-text">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {stat.label}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
