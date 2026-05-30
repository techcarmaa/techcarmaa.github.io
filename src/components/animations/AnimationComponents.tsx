'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedSection({
    children,
    delay = 0,
    duration = 0.6,
    className = '',
    direction = 'up',
}: AnimatedSectionProps) {
    const variants = {
        hidden: {
            opacity: 0,
            ...(direction === 'up' && { y: 40 }),
            ...(direction === 'down' && { y: -40 }),
            ...(direction === 'left' && { x: -40 }),
            ...(direction === 'right' && { x: 40 }),
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{
                delay,
                duration,
                ease: 'easeOut',
            }}
            viewport={{ once: true, margin: '-100px' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1,
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FloatingCard({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function GlowEffect({
    children,
    color = 'blue',
    className = '',
}: {
    children: ReactNode;
    color?: 'blue' | 'purple' | 'cyan';
    className?: string;
}) {
    const glowColors = {
        blue: 'shadow-glow-lg',
        purple: 'shadow-purple-500/50',
        cyan: 'shadow-cyan-500/50',
    };

    return (
        <motion.div
            whileHover={{
                boxShadow: `0 0 40px ${color === 'blue' ? '#3b82f6' : color === 'purple' ? '#a855f7' : '#06b6d4'}`,
            }}
            transition={{ duration: 0.3 }}
            className={`${glowColors[color]} transition-shadow ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function PulseGlow({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
