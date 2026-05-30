import { Course, Testimonial, Feature, SuccessStory, FAQItem } from '@/types';

export const courses: Course[] = [
    {
        id: 'cloud-computing',
        title: 'Cloud Computing Mastery',
        description: 'Master AWS, Azure and become a cloud architect.',
        shortDescription: 'Master AWS, Azure and cloud architecture...',
        image: '/cloudcomputingcourse.png',
        topics: ['AWS', 'Azure', 'GCP', 'Networking', 'Linux', 'Terraform'],
        level: 'Intermediate',
        duration: '8-10 weeks',
        students: 2340,
        rating: 4.8,
        reviews: 428,
        price: 25000,
        isBestseller: true,
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
        learningOutcomes: [
            'Deploy scalable cloud infrastructure',
            'Master cloud security best practices',
            'Implement infrastructure as code',
            'Optimize cloud costs',
            'Design highly available systems',
        ],
    },
    {
        id: 'devops-bootcamp',
        title: 'DevOps Engineering Bootcamp',
        description: 'Comprehensive DevOps bootcamp covering CI/CD, containerization, orchestration, and monitoring. Become job-ready in 12 weeks.',
        shortDescription: 'Docker, CI/CD, Kubernetes, Observability...',
        image: '/devopsbootcamp.png',
        topics: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'GitHub Actions', 'Monitoring'],
        level: 'Advanced',
        duration: '12 weeks',
        students: 1850,
        rating: 4.9,
        reviews: 356,
        price: 35000,
        technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'ELK Stack'],
        learningOutcomes: [
            'Build automated CI/CD pipelines',
            'Orchestrate containers at scale',
            'Implement infrastructure monitoring',
            'Deploy applications with zero downtime',
            'Master infrastructure automation',
        ],
    },
    {
        id: 'agentic-ai',
        title: 'Agentic AI Engineering',
        description: 'Learn to build autonomous AI agents using LangChain, RAG, and MCP. The future of AI development awaits.',
        shortDescription: 'Build autonomous AI agents for real-world...',
        image: '/agenticaicourse.png',
        topics: ['AI Agents', 'LangChain', 'RAG', 'MCP', 'OpenAI APIs', 'Vector Databases'],
        level: 'Advanced',
        duration: '6 weeks',
        students: 1420,
        rating: 4.9,
        reviews: 289,
        price: 20000,
        isBestseller: true,
        technologies: ['LangChain', 'OpenAI', 'Pinecone', 'Python', 'FastAPI'],
        learningOutcomes: [
            'Design and build intelligent agents',
            'Implement retrieval augmented generation',
            'Integrate multiple APIs seamlessly',
            'Deploy agents to production',
            'Handle complex multi-agent systems',
        ],
    },
    {
        id: 'ai-generalist',
        title: 'AI Generalist Program',
        description: 'Master AI tools and workflows. Learn prompt engineering, automation, and AI productivity systems that 10x your output.',
        shortDescription: 'AI tools and workflows for maximum productivity',
        image: '/aigeneralistcourse.png',
        topics: ['Prompt Engineering', 'AI Tools', 'Automation', 'AI Workflows', 'Productivity Systems'],
        level: 'Beginner',
        duration: '4 weeks',
        students: 3200,
        rating: 4.7,
        reviews: 521,
        price: 20000,
        technologies: ['ChatGPT', 'Midjourney', 'Zapier', 'Make.com', 'Notion AI'],
        learningOutcomes: [
            'Master prompt engineering techniques',
            'Build AI-powered workflows',
            'Automate repetitive tasks',
            'Leverage AI tools for productivity',
            'Create AI content strategically',
        ],
    },
    {
        id: 'fullstack-app',
        title: 'Full Stack App Development',
        description: 'Build production-ready applications with React, Next.js, Node.js. Master modern full-stack development from scratch.',
        shortDescription: 'React, Next.js, Node.js, mongoDB, Sql...',
        image: '/appdevelopmentcourse.png',
        topics: ['React', 'Next.js', 'Node.js', 'MongoDB', 'APIs', 'Authentication'],
        level: 'Intermediate',
        duration: '10 weeks',
        students: 2680,
        rating: 4.8,
        reviews: 482,
        price: 25000,
        technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        learningOutcomes: [
            'Build scalable full-stack applications',
            'Master modern frontend frameworks',
            'Design RESTful and GraphQL APIs',
            'Implement authentication and authorization',
            'Deploy applications to production',
        ],
    },
];

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Priya Sharma',
        role: 'DevOps Engineer',
        // company: 'Startup',
        avatar: 'https://cdn.vectorstock.com/i/500p/82/65/person-gray-photo-placeholder-woman-vector-24138265.jpg',
        content:
            'Anirudh\'s teaching style is exceptional. His real-world examples and practical approach made complex DevOps concepts crystal clear. Got promoted within 6 months!',
        rating: 5,
    },
    {
        id: '2',
        name: 'Arjun Patel',
        role: 'Cloud Architect',
        // company: 'McKinsey & Company',
        avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
        content:
            'The AWS training was comprehensive and industry-focused. I learned concepts in this course that took my colleagues years to master. Highly recommended!',
        rating: 5,
    },
    {
        id: '3',
        name: 'Neha Gupta',
        role: 'AI Engineer',
        // company: 'Startup (Funded)',
        avatar: 'https://img.magnific.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80',
        content:
            'The Agentic AI course opened my eyes to building real intelligent systems. The mentor support and practical projects were game-changing. Now building my own AI startup!',
        rating: 5,
    },
    {
        id: '4',
        name: 'Rahul Verma',
        role: 'Full Stack Developer',
        // company: 'Vercel',
        avatar: 'https://img.magnific.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740&q=80',
        content:
            'Professional, structured, and deeply technical. This is not a tutorial collection - it\'s a proper engineering education. Worth every penny.',
        rating: 5,
    },
    {
        id: '5',
        name: 'Isha Desai',
        role: 'Career Switcher → DevOps',
        // company: 'Amazon AWS',
        avatar: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=400&h=400&fit=crop',
        content:
            'Changed my career trajectory completely. From finance to DevOps in 4 months. The structured learning path and community support made all the difference.',
        rating: 5,
    },
    {
        id: '6',
        name: 'Vivek Kumar',
        role: 'Founder & CTO',
        // company: 'TechStartup Inc',
        avatar: 'https://img.magnific.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid&w=740&q=80',
        content:
            'As a founder, I need practical skills. Anirudh\'s courses deliver exactly that. Applied learnings immediately in our product and scaled from 0 to 50K users.',
        rating: 5,
    },
];

export const features: Feature[] = [
    {
        id: '1',
        title: 'Industry-Oriented Curriculum',
        description: 'Curriculum designed based on current industry demands and real job requirements.',
        icon: 'Zap',
    },
    {
        id: '2',
        title: 'Real Projects',
        description: 'Build 10+ production-grade projects that you can showcase in your portfolio.',
        icon: 'Code2',
    },
    {
        id: '3',
        title: 'Job Ready Skills',
        description: 'Learn exactly what companies hire for, backed by 10+ years of industry experience.',
        icon: 'Briefcase',
    },
    {
        id: '4',
        title: 'Live Mentorship',
        description: 'Weekly live sessions with Anirudh and industry experts for personalized guidance.',
        icon: 'Users',
    },
    {
        id: '5',
        title: 'Resume Preparation',
        description: 'Dedicated guidance on crafting an ATS-optimized resume that gets interviews.',
        icon: 'FileText',
    },
    {
        id: '6',
        title: 'Interview Preparation',
        description: 'Mock interviews and interview strategies covering technical and HR rounds.',
        icon: 'MessageSquare',
    },
    {
        id: '7',
        title: 'Community Support',
        description: 'Join 5000+ students in an active community for peer learning and collaboration.',
        icon: 'Users2',
    },
    {
        id: '8',
        title: 'Lifetime Access',
        description: 'Access course content forever with regular updates and new material additions.',
        icon: 'Lock',
    },
];

export const successStories: SuccessStory[] = [
    {
        id: '1',
        name: 'Amit Kumar',
        role: 'Senior Cloud Architect',
        previousRole: 'Junior Developer',
        company: 'Microsoft Azure',
        salaryHike: 150,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        testimonial: 'Went from ₹4L to ₹10L in 2 years. The cloud computing course was the turning point.',
    },
    {
        id: '2',
        name: 'Divya Singh',
        role: 'DevOps Lead',
        previousRole: 'QA Engineer',
        company: 'Google Cloud',
        salaryHike: 200,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        testimonial: 'Career switch from QA to DevOps with 200% salary increase. Grateful for the structured guidance.',
    },
    {
        id: '3',
        name: 'Rohan Patel',
        role: 'AI Engineer',
        previousRole: 'Data Analyst',
        company: 'OpenAI Partner',
        salaryHike: 180,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        testimonial: 'The Agentic AI course helped me transition from data analytics to AI engineering with a 180% raise.',
    },
];

export const faqItems: FAQItem[] = [
    {
        id: '1',
        question: 'How long does each course take to complete?',
        answer:
            'Course durations vary from 4 weeks (AI Generalist) to 12 weeks (DevOps Bootcamp). Each course is designed to be completed while maintaining a full-time job, with flexible scheduling.',
        category: 'course',
    },
    {
        id: '2',
        question: 'Do I get a certificate after completing the course?',
        answer:
            'Yes! You receive a completion certificate for each course. Many employers recognize our certificates as they reflect real-world skills and project experience.',
        category: 'certification',
    },
    {
        id: '3',
        question: 'Is job support provided?',
        answer:
            'Absolutely. We provide comprehensive job support including resume review, portfolio guidance, interview preparation, and networking with hiring partners.',
        category: 'job-support',
    },
    {
        id: '4',
        question: 'Can a complete beginner take these courses?',
        answer:
            'Yes! While some courses require basic programming knowledge, the AI Generalist course is perfect for absolute beginners. We also provide foundational modules.',
        category: 'beginner',
    },
    {
        id: '5',
        question: 'Are there live classes or is it all pre-recorded?',
        answer:
            'We offer both! Pre-recorded content for flexibility, plus weekly live mentorship sessions with Anirudh and industry experts for interactive learning.',
        category: 'classes',
    },
    {
        id: '6',
        question: 'Can I access course content after completion?',
        answer:
            'Yes! You get lifetime access to all course materials. Content is regularly updated with new projects, tools, and industry best practices.',
        category: 'access',
    },
    {
        id: '7',
        question: 'What payment options are available?',
        answer:
            'We accept credit/debit cards, UPI, bank transfers, and EMI options. Installment plans are available for bootcamps to make learning accessible.',
        category: 'payment',
    },
    {
        id: '8',
        question: 'What if I want to switch courses or need a refund?',
        answer:
            'We offer a 7-day money-back guarantee. You can also switch between courses within the first 2 weeks, no questions asked.',
        category: 'refund',
    },
];

export const trustBadges = ['AWS', 'Docker', 'Kubernetes', 'DevOps', 'AI Generalist',];

export const stats = [
    { label: 'Years Experience', value: '10+' },
    // { label: 'Students Trained', value: '5000+' },
    { label: 'Live Projects', value: '100+' },
    { label: 'Student Satisfaction', value: '95%' },
    // { label: 'Job Placements', value: '90%' },
    // { label: 'Average Salary Hike', value: '150%' },
];
