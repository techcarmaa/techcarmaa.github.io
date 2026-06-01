'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    glass?: boolean;
    hover?: boolean;
}

export function Card({ children, glass = true, hover = true, className = '', ...props }: CardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
            transition={{ duration: 0.3 }}
            className={cn(
                'rounded-2xl p-6 transition-all duration-300',
                glass && 'glass-dark',
                !glass && 'bg-card border border-border',
                hover && 'cursor-pointer',
                className
            )}
            {...(props as any)}
        >
            {children}
        </motion.div>
    );
}

interface CourseCardProps {
    title: string;
    description: string;
    image: string;
    level: string;
    duration: string;
    students: number;
    rating: number;
    price: number;
    isBestseller?: boolean;
    onEnroll?: () => void;
}

export function CourseCard({
    title,
    description,
    image,
    level,
    duration,
    students,
    rating,
    price,
    isBestseller = false,
    onEnroll,
}: CourseCardProps) {
    return (
        <Card className="group overflow-hidden ">
            <div className="relative mb-4 overflow-hidden rounded-lg">
                <img src={image} alt={title} className="h-[19rem] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                {isBestseller && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                        Best Seller
                    </div>
                )}
            </div>

            <div className="space-y-3">
                <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">{level}</span>
                    <span>{duration}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-semibold">{rating}</span>
                        <span className="text-muted-foreground">({students.toLocaleString()})</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-2xl font-bold text-primary">₹{price}</span>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onEnroll}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-glow-md transition-shadow"
                    >
                        Enroll
                    </motion.button>
                </div>
            </div>
        </Card>
    );
}

interface TestimonialCardProps {
    name: string;
    role: string;
    // company: string;
    content: string;
    rating: number;
    avatar: string;
}

export function TestimonialCard({ name, role, content, rating, avatar }: TestimonialCardProps) {
    return (
        <Card className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <p className="font-semibold text-foreground">{name}</p>
                    {/* <p className="text-xs text-muted-foreground">
                        {role} at {company}
                    </p> */}
                </div>
            </div>

            <div className="flex gap-1">
                {Array(rating)
                    .fill(0)
                    .map((_, i) => (
                        <span key={i} className="text-yellow-400">
                            ★
                        </span>
                    ))}
            </div>

            <p className="text-sm text-muted-foreground italic leading-relaxed">&quot;{content}&quot;</p>
        </Card>
    );
}
