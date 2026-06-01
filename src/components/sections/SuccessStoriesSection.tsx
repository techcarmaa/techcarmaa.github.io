'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animations/AnimationComponents';
import { successStories } from '@/lib/constants';

export function SuccessStoriesSection() {
    const steps = [
        { number: '01', title: 'Beginner', description: 'Start with fundamentals' },
        { number: '02', title: 'Intermediate', description: 'Build real projects' },
        { number: '03', title: 'Advanced', description: 'Master advanced concepts' },
        { number: '04', title: 'Industry Ready', description: 'Get hired in top companies' },
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                {/* <AnimatedSection className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm">Career Growth</span>
                    <h2 className="heading-h2 mt-2 mb-4">Student Success Stories</h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Real stories of career transformation and growth
                    </p>
                </AnimatedSection> */}

                {/* Learning Path */}
                <div className="mb-20">
                    <h3 className="heading-h3 text-center mb-12">Your Learning Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true, margin: '-100px' }}
                                className="relative"
                            >
                                <div className="glass-dark rounded-2xl p-6 text-center h-full">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.1,
                                        }}
                                        className="text-5xl font-bold gradient-text mb-3"
                                    >
                                        {step.number}
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>

                                {/* Connecting Line */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{
                                            delay: index * 0.2,
                                            duration: 0.6,
                                        }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-transparent origin-left"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Success Stories */}
                {/* <div>
                    <h3 className="heading-h3 text-center mb-12">Placement Highlights</h3>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {successStories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true, margin: '-100px' }}
                                className="glass-dark rounded-2xl overflow-hidden"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                <div className="p-6">
                                    <div className="mb-3">
                                        <p className="font-semibold text-foreground">{story.name}</p>
                                        <p className="text-sm text-muted-foreground">{story.company}</p>
                                    </div>

                                    <div className="space-y-2 mb-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Before:</span>
                                            <span className="text-foreground">{story.previousRole}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">After:</span>
                                            <span className="text-primary font-semibold">{story.role}</span>
                                        </div>
                                        <div className="pt-2 border-t border-border flex justify-between">
                                            <span className="text-muted-foreground">Salary Growth:</span>
                                            <span className="text-accent font-bold">+{story.salaryHike}%</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground italic">&quot;{story.testimonial}&quot;</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div> */}

                {/* Stats Banner */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-16 glass-dark rounded-2xl p-8 text-center"
                >
                    <p className="text-lg text-muted-foreground mb-4">
                        Join 5000+ students who have transformed their careers
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-3xl font-bold gradient-text">90%</p>
                            <p className="text-xs text-muted-foreground mt-1">Placement Rate</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold gradient-text">150%</p>
                            <p className="text-xs text-muted-foreground mt-1">Avg Salary Hike</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold gradient-text">5000+</p>
                            <p className="text-xs text-muted-foreground mt-1">Students Trained</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold gradient-text">4.8/5</p>
                            <p className="text-xs text-muted-foreground mt-1">Avg Rating</p>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}
