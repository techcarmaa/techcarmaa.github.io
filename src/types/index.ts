export interface Course {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    image: string;
    topics: string[];
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    duration: string;
    students: number;
    rating: number;
    reviews: number;
    price: number;
    isBestseller?: boolean;
    technologies: string[];
    learningOutcomes: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    // company: string;
    avatar: string;
    content: string;
    rating: number;
    image?: string;
}

export interface Instructor {
    name: string;
    title: string;
    bio: string;
    image: string;
    experience: number;
    students: number;
    projects: number;
    satisfaction: number;
    companies: string[];
    certifications: string[];
    socialLinks?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export interface LeadFormData {
    name: string;
    email: string;
    phone: string;
    interestedCourse: string;
    message?: string;
}

export interface SuccessStory {
    id: string;
    name: string;
    role: string;
    previousRole: string;
    company: string;
    salaryHike: number;
    image: string;
    testimonial: string;
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
    image?: string;
}
