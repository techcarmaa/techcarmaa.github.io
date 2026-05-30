'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/constants';
import { TestimonialCard } from '@/components/ui/Card';
import { AnimatedSection, StaggerContainer } from '@/components/animations/AnimationComponents';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function TestimonialsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section id="testimonials" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm">Success Stories</span>
                    <h2 className="heading-h2 mt-2 mb-4">Loved by Students</h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        See how our courses have transformed careers and lives
                    </p>
                </AnimatedSection>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Left Scroll Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: canScrollLeft ? 1 : 0.3 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className="rounded-full w-12 h-12 p-0"
                        >
                            <ChevronLeft size={20} />
                        </Button>
                    </motion.div>

                    {/* Testimonials */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="flex-shrink-0 w-96"
                            >
                                <TestimonialCard
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    // company={testimonial.company}
                                    content={testimonial.content}
                                    rating={testimonial.rating}
                                    avatar={testimonial.avatar}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: canScrollRight ? 1 : 0.3 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className="rounded-full w-12 h-12 p-0"
                        >
                            <ChevronRight size={20} />
                        </Button>
                    </motion.div>
                </div>

                {/* Stats Highlight */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { number: '95%', label: 'Student Satisfaction' },
                        { number: '90%', label: 'Job Placement Rate' },
                        { number: '150%', label: 'Avg Salary Hike' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center glass-dark rounded-2xl p-8">
                            <motion.p
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                className="text-4xl font-bold gradient-text"
                            >
                                {stat.number}
                            </motion.p>
                            <p className="text-muted-foreground mt-2">{stat.label}</p>
                        </div>
                    ))}
                </motion.div> */}
            </div>
        </section>
    );
}
