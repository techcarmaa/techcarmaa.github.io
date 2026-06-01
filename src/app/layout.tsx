import type { Metadata, Viewport } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import '@/styles/globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://anirudh.io'),
    title: 'Anirudh Dobhal | Cloud, DevOps & AI Expert | Premium Tech Courses',
    description:
        'Master Cloud Computing, DevOps, AI, and Full Stack Development with Anirudh Dobhal. 10+ years of industry expertise. 5000+ students trained. 90% job placement rate.',
    keywords: [
        'cloud computing course',
        'devops course',
        'ai course',
        'agentic ai training',
        'full stack development course',
        'online tech training',
        'devops bootcamp',
        'ai engineering course',
        'kubernetes course',
        'aws course',
        'tech education',
        'programming courses',
    ],
    authors: [{ name: 'Anirudh Dobhal' }],
    creator: 'Anirudh Dobhal',
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
        googleBot: 'index, follow',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://anirudh.io',
        title: 'Anirudh Dobhal | Cloud, DevOps & AI Expert',
        description: 'Master in-demand tech skills with industry-focused courses and expert mentorship.',
        siteName: 'Anirudh Dobhal',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Anirudh Dobhal - Cloud & DevOps Expert',
                type: 'image/jpeg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anirudh Dobhal | Tech Courses',
        description: 'Learn Cloud, DevOps & AI from industry expert with 10+ years experience',
        creator: '@anirudh',
        images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop'],
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#0f1929',
    colorScheme: 'dark light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://anirudh.io" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Structured Data - Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Anirudh Dobhal - Tech Education',
                            url: 'https://anirudh.io',
                            logo: 'https://anirudh.io/logo.png',
                            description: 'Premium tech education platform for Cloud, DevOps, AI, and Full Stack Development',
                            contactPoint: {
                                '@type': 'ContactPoint',
                                contactType: 'Customer Service',
                                email: 'hello@anirudh.io',
                                telephone: '+91-9876543210',
                            },
                            sameAs: [
                                'https://twitter.com/anirudh',
                                'https://linkedin.com/in/anirudh',
                                'https://github.com/anirudh',
                            ],
                            founder: {
                                '@type': 'Person',
                                name: 'Anirudh Dobhal',
                                description: 'Software Architect with 10+ years industry experience',
                            },
                        }),
                    }}
                />

                {/* Breadcrumb Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: 'https://anirudh.io',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: 'Courses',
                                    item: 'https://anirudh.io/#courses',
                                },
                            ],
                        }),
                    }}
                />
            </head>

            <body className="dark bg-background text-foreground">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
