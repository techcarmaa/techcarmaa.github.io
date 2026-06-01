'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { courses } from '@/lib/constants';
import { CourseCard } from '@/components/ui/Card';
import { AnimatedSection, StaggerContainer } from '@/components/animations/AnimationComponents';
import { Button } from '@/components/ui/Button';

export function CoursesSection() {
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    const filteredCourses = selectedLevel
        ? courses.filter((course) => course.level === selectedLevel)
        : courses;

    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

    return (
        <section id="courses" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm">Curated Curriculum</span>
                    <h2 className="heading-h2 mt-2 mb-4">Premium Courses</h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Master in-demand skills with industry-focused courses designed for career transformation
                    </p>
                </AnimatedSection>

                {/* Level Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <Button
                        variant={selectedLevel === null ? 'primary' : 'secondary'}
                        onClick={() => setSelectedLevel(null)}
                    >
                        All Courses
                    </Button>
                    {levels.map((level) => (
                        <Button
                            key={level}
                            variant={selectedLevel === level ? 'primary' : 'secondary'}
                            onClick={() => setSelectedLevel(level)}
                        >
                            {level}
                        </Button>
                    ))}
                </motion.div>

                {/* Courses Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course, index) => {
                        const courseLink = course.id === 'devops-bootcamp' ? '/devops-course' : null;
                        const card = (
                            <CourseCard
                                title={course.title}
                                description={course.shortDescription}
                                image={course.image}
                                level={course.level}
                                duration={course.duration}
                                students={course.students}
                                rating={course.rating}
                                price={course.price}
                                isBestseller={course.isBestseller}
                                onEnroll={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            />
                        );

                        return (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true, margin: '-100px' }}
                            >
                                {courseLink ? (
                                    <Link href={courseLink} className="group block">
                                        {card}
                                    </Link>
                                ) : (
                                    card
                                )}
                            </motion.div>
                        );
                    })}
                </StaggerContainer>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-2 text-center"
                >
                    <p className="text-muted-foreground mb-4">Ready to transform your career?</p>
                    <Button variant="primary" size="lg">
                        Explore All Courses
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
