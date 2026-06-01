import type { Metadata } from "next";

 const metadata: Metadata = {
  // ── Title tag (50–60 chars) ──────────────────────────────────────────────
  // Primary keyword front-loaded, brand at end
  title: "DevOps Course by Industry Expert | Docker, Kubernetes, CI/CD | DevOpsMastery",

  // ── Meta description (145–160 chars) ────────────────────────────────────
  // Includes primary + secondary keywords, clear value prop, soft CTA
  description:
    "India's most hands-on DevOps course. Master Docker, Kubernetes, Jenkins, GitHub Actions & AWS with real production labs. Taught by ex-McKinsey & Samsung architect. Enroll at ₹35,000.",

  // ── Canonical URL ────────────────────────────────────────────────────────
  // Replace with your actual domain
  alternates: {
    canonical: "https://carmaatech.com/devops-course",
  },

  // ── Keywords (supplementary signal, low weight in Google but used by others) ──
  keywords: [
    "devops course",
    "devops course in online",
    "devops training online",
    "kubernetes course",
    "docker course",
    "jenkins course",
    "github actions tutorial",
    "ci cd pipeline course",
    "devops certification",
    "devops course for beginners",
    "devops bootcamp india",
    "aws devops course",
    "terraform course",
    "infrastructure as code course",
    "devops engineer training",
    "devsecops course",
    "observability course prometheus grafana",
    "devops course in Dehradun",
  ],

  // ── Robots ───────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (social sharing) ─────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://carmaatech.com/devops-course",
    siteName: "DevOps Mastery",
    title: "DevOps Course by Industry Expert | Docker, Kubernetes, CI/CD",
    description:
      "India's most hands-on DevOps course. Master Docker, Kubernetes, Jenkins, GitHub Actions & AWS. Taught by ex-McKinsey & Samsung architect Anirudh Dobhal.",
    images: [
      {
        url: "https://carmaatech.com/devops-course.jpg", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "DevOps Course — Docker, Kubernetes, CI/CD by Anirudh Dobhal",
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "DevOps Course by Industry Expert | Docker, Kubernetes, CI/CD",
    description:
      "India's most hands-on DevOps course. Real production labs. Taught by ex-McKinsey & Samsung architect. ₹35,000 — limited seats.",
    images: ["https://carmaatech.com/devops-course.jpg"],
  },

  // ── Additional meta ──────────────────────────────────────────────────────
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "og:price:amount": "35000",
    "og:price:currency": "INR",
  },
};


 const courseJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Course schema
    {
      "@type": "Course",
      name: "Complete DevOps Course — Docker, Kubernetes, CI/CD & Cloud",
      description:
        "A comprehensive, hands-on DevOps course covering Docker, Kubernetes, Jenkins, GitHub Actions, AWS, Terraform, Prometheus, Grafana, and DevSecOps. Taught by Anirudh Dobhal, ex-McKinsey Software Architect and ex-Samsung Lead Engineer.",
      url: "https://carmaatech.com/devops-course",
      image: "https://carmaatech.com/devops-course.jpg",
      provider: {
        "@type": "Organization",
        name: "DevOps Mastery",
        url: "https://carmaatech.com",
        sameAs: ["https://carmaatech.com/devops-course"],
      },
      instructor: {
        "@type": "Person",
        name: "Anirudh Dobhal",
        jobTitle: "CTO & Instructor",
        worksFor: { "@type": "Organization", name: "Carmaa" },
        alumniOf: [
          { "@type": "Organization", name: "McKinsey & Company" },
          { "@type": "Organization", name: "Samsung Electronics" },
        ],
      },
      offers: {
        "@type": "Offer",
        price: "35000",
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
        validFrom: "2025-01-01",
        priceValidUntil: "2025-12-31",
        url: "https://carmaatech.com/devops-course",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT50H",
        inLanguage: "en-IN",
      },
      teaches: [
        "Docker containerization",
        "Kubernetes orchestration",
        "Jenkins CI/CD pipelines",
        "GitHub Actions automation",
        "AWS cloud infrastructure",
        "Terraform infrastructure as code",
        "Prometheus and Grafana monitoring",
        "DevSecOps practices",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Rahul K." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "This is the first DevOps course where I actually understood why we use Kubernetes instead of just memorizing commands. The labs are genuinely production-level.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Priya M." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "The Jenkins + GitHub Actions module alone was worth the price. I built the same pipeline in my take-home assignment.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Arjun S." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "The observability module is outstanding. I have Prometheus + Grafana running in our production cluster now.",
        },
      ],
    },
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://carmaatech.com" },
        { "@type": "ListItem", position: 2, name: "DevOps Course", item: "https://carmaatech.com/devops-course" },
      ],
    },
    // FAQ schema (boosts SERP real estate)
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need prior DevOps experience to join this DevOps course?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No prior DevOps experience is needed. You need solid programming fundamentals and basic Linux familiarity. The DevOps course starts from Docker basics and progressively builds to production-grade Kubernetes and CI/CD pipelines.",
          },
        },
        {
          "@type": "Question",
          name: "How is this DevOps course different from free YouTube tutorials?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This DevOps course teaches systems thinking — why architectural decisions are made, what breaks in production, how to debug live issues, and how enterprise teams structure pipelines. You also get curated labs, a capstone project, and direct instructor access.",
          },
        },
        {
          "@type": "Question",
          name: "Does this DevOps course cover AWS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AWS is the primary cloud platform covered — including ECS/Fargate, ECR, Aurora, S3/CloudFront, Lambda, SQS, CloudWatch, and CloudFormation. The IaC module covers AWS CDK.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a certificate after completing the DevOps course?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — a verified completion certificate is issued after all modules and the capstone project. You'll also have a real GitHub portfolio project that demonstrates your DevOps skills to employers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the refund policy for this DevOps course?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full refund within 30 days, no questions asked. Email us and it is processed the same day.",
          },
        },
      ],
    },
  ],
};

import DevOpsLanding from "./DevOpsLanding";


export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <DevOpsLanding />
    </>
  );
}