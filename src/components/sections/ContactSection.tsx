// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { AnimatedSection } from '@/components/animations/AnimationComponents';
// import { Button } from '@/components/ui/Button';
// import { Mail, Phone, MessageCircle } from 'lucide-react';

// export function ContactSection() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         interestedCourse: '',
//         message: '',
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate form submission
//         setTimeout(() => {
//             setIsSubmitting(false);
//             setSubmitted(true);
//             setFormData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 interestedCourse: '',
//                 message: '',
//             });

//             setTimeout(() => setSubmitted(false), 3000);
//         }, 1500);
//     };

//     const courses = [
//         'Cloud Computing Mastery',
//         'DevOps Engineering Bootcamp',
//         'Agentic AI Engineering',
//         'AI Generalist Program',
//         'Full Stack App Development',
//     ];

//     const contactSchema = {
//         '@context': 'https://schema.org',
//         '@type': 'LocalBusiness',
//         name: 'Carmaa Tech',
//         description: 'Premium tech courses for Cloud, DevOps, and AI',
//         contactPoint: {
//             '@type': 'ContactPoint',
//             contactType: 'Customer Service',
//             email: 'support@carmaacarcare.com',
//             telephone: '+91-8979620136',
//         },
//     };

//     return (
//         <section id="contact" className="section-padding relative overflow-hidden">
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
//             />

//             <div className="container-custom max-w-4xl">
//                 {/* Header */}
//                 <AnimatedSection className="text-center mb-16">
//                     <span className="text-accent font-semibold">Get Started</span>
//                     <h2 className="heading-h2 mt-2 mb-4">Join Our Community</h2>
//                     <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                         Take the first step towards your dream tech career. Reach out to us today.
//                     </p>
//                 </AnimatedSection>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Contact Info */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                         viewport={{ once: true, margin: '-100px' }}
//                         className="space-y-6"
//                     >
//                         {/* Email */}
//                         <div className="glass-dark rounded-2xl p-6">
//                             <div className="flex items-center gap-3 mb-3">
//                                 <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
//                                     <Mail size={24} className="text-primary" />
//                                 </div>
//                                 <h3 className="font-semibold text-foreground">Email</h3>
//                             </div>
//                             <a href="mailto:hello@anirudh.io" className="text-muted-foreground hover:text-primary transition-colors">
//                                 support@carmaacarcare.com
//                             </a>
//                         </div>

//                         {/* Phone */}
//                         <div className="glass-dark rounded-2xl p-6">
//                             <div className="flex items-center gap-3 mb-3">
//                                 <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
//                                     <Phone size={24} className="text-primary" />
//                                 </div>
//                                 <h3 className="font-semibold text-foreground">Phone</h3>
//                             </div>
//                             <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
//                                 +91 8979620136
//                             </a>
//                         </div>

//                         {/* WhatsApp */}
//                         <div className="glass-dark rounded-2xl p-6">
//                             <div className="flex items-center gap-3 mb-3">
//                                 <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
//                                     <MessageCircle size={24} className="text-green-500" />
//                                 </div>
//                                 <h3 className="font-semibold text-foreground">WhatsApp</h3>
//                             </div>
//                             <a
//                                 href="https://wa.me/918979620136"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-muted-foreground hover:text-green-500 transition-colors"
//                             >
//                                 Chat with us
//                             </a>
//                         </div>
//                     </motion.div>

//                     {/* Contact Form */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                         viewport={{ once: true, margin: '-100px' }}
//                         className="lg:col-span-2 glass-dark rounded-2xl p-8"
//                     >
//                         {submitted ? (
//                             <motion.div
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 className="flex items-center justify-center min-h-96 text-center"
//                             >
//                                 <div>
//                                     <motion.div
//                                         animate={{ scale: [1, 1.1, 1] }}
//                                         transition={{ duration: 0.5 }}
//                                         className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
//                                     >
//                                         <span className="text-3xl">✓</span>
//                                     </motion.div>
//                                     <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
//                                     <p className="text-muted-foreground">
//                                         We&apos;ve received your message. Our team will contact you soon.
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         ) : (
//                             <form onSubmit={handleSubmit} className="space-y-5">
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             placeholder="Your name"
//                                             required
//                                             className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             placeholder="your@email.com"
//                                             required
//                                             className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
//                                         <input
//                                             type="tel"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             placeholder="+91 9876543210"
//                                             required
//                                             className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-foreground mb-2">Interested Course</label>
//                                         <select
//                                             name="interestedCourse"
//                                             value={formData.interestedCourse}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//                                         >
//                                             <option value="">Select a course</option>
//                                             {courses.map((course) => (
//                                                 <option key={course} value={course}>
//                                                     {course}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-foreground mb-2">Message</label>
//                                     <textarea
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         placeholder="Tell us about your learning goals..."
//                                         rows={4}
//                                         className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
//                                     />
//                                 </div>

//                                 <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full">
//                                     {isSubmitting ? 'Sending...' : 'Send Message'}
//                                 </Button>

//                                 <p className="text-xs text-muted-foreground text-center">
//                                     We&apos;ll never spam you. Read our privacy policy.
//                                 </p>
//                             </form>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }
'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animations/AnimationComponents';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

type FormData = {
    name: string;
    email: string;
    phone: string;
    interestedCourse: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const courses = [
    'Cloud Computing Mastery',
    'DevOps Engineering Bootcamp',
    'Agentic AI Engineering',
    'AI Generalist Program',
    'Full Stack App Development',
];

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.name.trim()) {
        errors.name = 'Name is required.';
    } else if (data.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Enter a valid email address.';
    }

    if (!data.phone.trim()) {
        errors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(data.phone)) {
        errors.phone = 'Enter a valid phone number.';
    }

    return errors;
}

export function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        interestedCourse: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error on change
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const form = e.currentTarget;
            const data = new FormData(form);

            const response = await fetch('https://formsubmit.co/ajax/support@carmaacarcare.com', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', interestedCourse: '', message: '' });
                setTimeout(() => setSubmitted(false), 4000);
            } else {
                alert('Something went wrong. Please try again or contact us directly.');
            }
        } catch {
            alert('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Carmaa Tech',
        description: 'Premium tech courses for Cloud, DevOps, and AI',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'support@carmaacarcare.com',
            telephone: '+91-8979620136',
        },
    };

    const inputClass = (field: keyof FormData) =>
        `w-full px-4 py-3 rounded-lg bg-input border text-foreground placeholder-muted-foreground 
        focus:outline-none focus:ring-2 focus:ring-primary transition-all 
        ${errors[field] ? 'border-red-500 focus:ring-red-500' : 'border-border'}`;

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            <div className="container-custom max-w-4xl">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <span className="text-accent font-semibold">Get Started</span>
                    <h2 className="heading-h2 mt-2 mb-4">Join Our Community</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Take the first step towards your dream tech career. Reach out to us today.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="space-y-6"
                    >
                        <div className="glass-dark rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <Mail size={24} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                            </div>
                            <a href="mailto:support@carmaacarcare.com" className="text-muted-foreground hover:text-primary transition-colors">
                                support@carmaacarcare.com
                            </a>
                        </div>

                        <div className="glass-dark rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <Phone size={24} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground">Phone</h3>
                            </div>
                            <a href="tel:+918979620136" className="text-muted-foreground hover:text-primary transition-colors">
                                +91 8979620136
                            </a>
                        </div>

                        <div className="glass-dark rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                                    <MessageCircle size={24} className="text-green-500" />
                                </div>
                                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                            </div>

                            <a
                                href="https://wa.me/918979620136"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-green-500 transition-colors"
                            >
                                Chat with us
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="lg:col-span-2 glass-dark rounded-2xl p-8"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-center min-h-96 text-center"
                            >
                                <div>
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
                                    >
                                        <span className="text-3xl">✓</span>
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                                    <p className="text-muted-foreground">
                                        We&apos;ve received your message. Our team will contact you soon.
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                {/* FormSubmit hidden config fields */}
                                <input type="hidden" name="_subject" value="New Enquiry - Carmaa Tech" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                {/* Honeypot — traps bots */}
                                <input type="text" name="_honey" style={{ display: 'none' }} />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className={inputClass('name')}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className={inputClass('email')}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 9876543210"
                                            className={inputClass('phone')}
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Interested Course
                                        </label>
                                        <select
                                            name="interestedCourse"
                                            value={formData.interestedCourse}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        >
                                            <option value="">Select a course</option>
                                            {courses.map((course) => (
                                                <option key={course} value={course}>
                                                    {course}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your learning goals..."
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                    />
                                </div>

                                <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    We&apos;ll never spam you. Read our privacy policy.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div >
        </section >
    );
}