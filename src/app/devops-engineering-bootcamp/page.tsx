export const metadata = {
  title: "DevOps Engineering Bootcamp | Anirudh Dobhal",
  description: "Join the DevOps Engineering Bootcamp by Anirudh Dobhal. Learn Docker, Kubernetes, CI/CD, observability, and production-ready DevOps skills with hands-on labs and a capstone project.",
  keywords: ["DevOps", "Kubernetes", "Docker", "CI/CD", "Cloud", "Bootcamp", "Engineering"],
  openGraph: {
    title: "DevOps Engineering Bootcamp | Anirudh Dobhal",
    description: "Join the DevOps Engineering Bootcamp by Anirudh Dobhal. Learn Docker, Kubernetes, CI/CD, observability, and production-ready DevOps skills with hands-on labs and a capstone project.",
    url: "https://anirudh.io/devops-engineering-bootcamp",
    siteName: "Anirudh Dobhal EdTech",
    type: "website",
    images: [{ url: "/og/devops-bootcamp.png", width: 1200, height: 630, alt: "DevOps Engineering Bootcamp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Engineering Bootcamp | Anirudh Dobhal",
    description: "Join the DevOps Engineering Bootcamp by Anirudh Dobhal. Learn Docker, Kubernetes, CI/CD, observability, and production-ready DevOps skills with hands-on labs and a capstone project.",
    images: ["/og/devops-bootcamp.png"],
  },
};

import DevOpsLanding from "./DevOpsLanding";

export default function Page() {
  return <DevOpsLanding />;
}
