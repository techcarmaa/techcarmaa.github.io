import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { SuccessStoriesSection } from '@/components/sections/SuccessStoriesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <CoursesSection />
            <FeaturesSection />
            <TestimonialsSection />
            <SuccessStoriesSection />
            <FAQSection />
            <ContactSection />
        </>
    );
}
