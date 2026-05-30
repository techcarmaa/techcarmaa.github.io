"use client";

import { useEffect, useState } from "react";
import {
  Telescope,
  ShieldCheck,
  Target,
  Cloud,
  Server,
  GitBranch,
  Boxes,
  Activity,
} from "lucide-react";
import EnrollmentPopup from "@/components/sections/EnrollmentPopup";

const TICKER_ITEMS = [
  "🐳 Docker", "☸️ Kubernetes", "⚙️ Jenkins", "🚀 GitHub Actions",
  "🔭 Observability", "📊 Prometheus", "📈 Grafana", "☁️ AWS Cloud-Native",
  "🔐 DevSecOps", "🧱 Infrastructure as Code",
];

const WHY_CARDS = [
  {
    n: "// 01",
    title: "DevOps Engineers Are Earning ₹25–50 LPA",
    desc: "Every company from funded startups to global MNCs is desperately hiring engineers who can bridge code and infrastructure. Demand exceeds supply by 5x — and it's only growing.",
    pill: "₹25–50 LPA average",
  },
  {
    n: "// 02",
    title: "Most Courses Teach Theory. Prod Breaks Anyway.",
    desc: "YouTube tutorials don't prepare you for the 3am outage. This course is built entirely around real incident patterns, live clusters, and the architectural decisions that actually matter in production.",
    pill: "100% hands-on labs",
  },
  {
    n: "// 03",
    title: "Kubernetes Is the New Linux. Learn It Now.",
    desc: "Container orchestration is no longer optional — it's foundational. Engineers without it are already behind. This is the gap to close, and the right moment to do it.",
    pill: "Non-negotiable skill in today's world",
  },
];

const MODULES = [
  {
    icon: "🐳", num: "// Module 01", name: "Docker — Fundamentals to Advanced",
    desc: "Containers, images, volumes, networking, Compose, multi-stage builds, and security hardening. Build a production-ready containerized app from scratch.",
    tags: ["Dockerfile", "Compose", "Registry", "Networking"], featured: false,
    terminal: [
      "docker build -t webapp:latest .",
      "docker run -dp 8080:80 webapp:latest",
      "docker system prune -f",
    ],
  },
  {
    icon: "☸️", num: "// Module 02", name: "Kubernetes — Cluster to Production",
    desc: "Pods, deployments, services, Ingress, HPA, ConfigMaps, Secrets, PVCs, RBAC, Helm charts. Run a live microservices app on a real Kubernetes cluster.",
    tags: ["kubectl", "Helm", "RBAC", "HPA"], featured: false,
    terminal: [
      "kubectl apply -f deployment.yaml",
      "kubectl rollout status deployment/web",
      "kubectl get pods -o wide",
    ],
  },
  {
    icon: "🔧", num: "// Module 03", name: "Jenkins — Enterprise CI/CD at Scale",
    desc: "Declarative pipelines, shared libraries, multi-branch workflows, Sonarqube integration, artifact management with Nexus. The exact same setup used in top MNCs.",
    tags: ["Jenkinsfile", "Sonarqube", "Nexus", "Clair"], featured: false,
    terminal: [
      "pipeline {",
      "  agent any",
      "  stages { build test deploy }",
      "}",
    ],
  },
  {
    icon: "🚀", num: "// Module 04", name: "GitHub Actions — Modern Automation",
    desc: "Reusable workflows, secrets management, matrix builds, environment-based deployments, and OIDC for cloud auth. Deploy with confidence on every push.",
    tags: ["YAML Workflows", "Secrets", "OIDC", "Releases"], featured: false,
    terminal: [
      "name: CI",
      "on: [push, pull_request]",
      "jobs:",
      "  build:\n    runs-on: ubuntu-latest",
    ],
  },
  {
    icon: "🔭", num: "// Module 05", name: "Observability — See Everything, Miss Nothing",
    desc: "Full-stack monitoring with Prometheus, Grafana, Loki, Tempo, and OpenTelemetry. Set up dashboards, alerts, distributed tracing, and SLOs that actually matter.",
    tags: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "SLOs"], featured: true,
    terminal: [
      "alert: HighErrorRate",
      "expr: rate(http_errors[5m]) > 0.05",
      "for: 2m",
      "severity: critical",
    ],
  },
  {
    icon: "🏗️", num: "// Module 06", name: "IaC & DevSecOps",
    desc: "Terraform, CDK, CloudFormation, and security baked into pipelines. Container scanning with Clair, secrets detection, and compliance gates — just like enterprise teams.",
    tags: ["Terraform", "CDK", "Clair", "SAST"], featured: false,
    terminal: [
      "terraform init",
      "terraform plan -out=plan.tfplan",
      "terraform apply plan.tfplan",
    ],
  },
  {
    icon: "🎯", num: "// Capstone", name: "End-to-End Production Project",
    desc: "Deploy a complete microservices system — containerized, orchestrated, CI/CD automated, and fully monitored. A project you'll proudly show on your resume and GitHub.",
    tags: ["Portfolio Project", "Production-Grade", "Reviewed"], featured: false,
    terminal: [
      "git clone repo.git",
      "cd repo && npm install",
      "terraform apply -auto-approve",
    ],
  },
];

const TOOLS = [
  { icon: "🐳", name: "Docker" }, { icon: "☸️", name: "Kubernetes" },
  { icon: "⚙️", name: "Jenkins" }, { icon: "🐙", name: "GitHub Actions" },
  { icon: "☁️", name: "AWS" }, { icon: "🏗️", name: "Terraform" },
  { icon: "📊", name: "Prometheus" }, { icon: "📈", name: "Grafana" },
  { icon: "📋", name: "Loki" }, { icon: "🔍", name: "Sonarqube" },
  { icon: "⛑️", name: "Helm" }, { icon: "🛡️", name: "DevSecOps" },
];

const OUTCOMES = [
  { text: <><strong className="text-[var(--text)] font-semibold">Build & deploy containerized applications</strong> using Docker with production-hardened configurations and multi-stage builds</> },
  { text: <><strong className="text-[var(--text)] font-semibold">Orchestrate services with Kubernetes</strong> — auto-scaling, zero-downtime rollouts, Helm packaging, and RBAC security</> },
  { text: <><strong className="text-[var(--text)] font-semibold">Build enterprise CI/CD pipelines</strong> in Jenkins and GitHub Actions with automated testing, security scanning, and deployment gates</> },
  { text: <><strong className="text-[var(--text)] font-semibold">Implement full-stack observability</strong> — metrics, logs, traces, SLOs, and alerting that catches issues before users do</> },
  { text: <><strong className="text-[var(--text)] font-semibold">Write Infrastructure as Code</strong> with Terraform and AWS CDK to provision reproducible cloud environments</> },
  { text: <><strong className="text-[var(--text)] font-semibold">Crack DevOps interviews</strong> with real project experience, a portfolio capstone, and system design insight from an enterprise architect</> },
];

const TESTIMONIALS = [
  {
    initials: "RK", stars: "★★★★★",
    quote: "I went through 3 DevOps courses before this one. This is the first time I actually understood why we use Kubernetes instead of just memorizing commands. The labs are genuinely production-level.",
    // name: "Rahul K.", role: "Backend Engineer → DevOps Engineer @ Razorpay",
    name: "Rahul K.", role: "Backend Engineer → DevOps Engineer",
  },
  {
    initials: "PM", stars: "★★★★★",
    quote: "I have wanted to upgrade myself for better salary packages. The Jenkins + GitHub Actions module alone was worth the price — I built the same pipeline in my take-home assignment.",
    // name: "Priya M.", role: "SDE-2 → Platform Engineer @ Swiggy",
    name: "Priya M.", role: "SDE-2 → Platform Engineer",
  },
  {
    initials: "AS", stars: "★★★★★",
    quote: "The observability module is outstanding. I have Prometheus + Grafana running in our production cluster now — something my team had been putting off for 2 years. Done it in a weekend.",
    name: "Arjun S.", role: "Lead Engineer, Bangalore",
  },
];

const FAQS = [
  {
    q: "Do I need prior DevOps experience?",
    a: "No. You need solid programming fundamentals and basic Linux familiarity. We start from Docker basics and progressively build to production-grade Kubernetes and CI/CD.",
  },
  {
    q: "How is this different from free YouTube tutorials?",
    a: "YouTube teaches commands. This course teaches systems thinking — why decisions are made, what breaks in production, how to debug live issues, and how enterprise teams structure pipelines. You also get curated labs, a capstone project, and direct instructor access.",
  },
  {
    q: "Will the course cover AWS specifically?",
    a: "Yes. AWS is the primary cloud platform — ECS/Fargate, ECR, Aurora, S3/CloudFront, Lambda, SQS, CloudWatch, and CloudFormation. The IaC module covers AWS CDK which the instructor used extensively at Samsung for global deployments.",
  },
  {
    q: "Is there a certificate at the end?",
    a: "Yes — a verified certificate is issued after all modules and the capstone. More importantly, you'll have a real GitHub project that demonstrates your skills to employers.",
  },
  {
    q: "What if I don't like the course?",
    a: "Full refund within 30 days, no questions asked. Email us and it's processed the same day.",
  },
];

// ─────────────────────────────────────────────
// SMALL REUSABLE COMPONENTS
// ─────────────────────────────────────────────
function SectionKicker({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-[var(--primary)] tracking-[0.14em] uppercase mb-3.5 ${center ? "justify-center" : ""}`}>
      <span className="text-[var(--text-dim)] mr-1">//</span>
      {children}
    </div>
  );
}

function SectionH2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-[-0.02em] leading-[1.1] mb-4 italic transition-colors duration-300 hover:text-[var(--primary)] ${className}`}>
      {children}
    </h2>
  );
}

function BtnPrimary({ href, onClick, children, className = "" }: { href?: string; onClick?: () => void; children: React.ReactNode; className?: string }) {
  const classes = `inline-flex items-center gap-2 px-7 py-3 bg-[var(--primary)] text-white rounded-lg font-body font-bold text-[0.95rem] tracking-[0.01em] transition-all duration-300 hover:bg-[var(--primary-glow)] hover:shadow-[0_0_36px_rgba(74,144,255,0.45)] hover:-translate-y-0.5 ${className}`;
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

function BtnGhost({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--text-muted)] border border-[var(--border2)] rounded-lg font-body font-semibold text-[0.95rem] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] ${className}`}
    >
      {children}
    </a>
  );
}

function TerminalPanel({ lines }: { lines: string[] }) {
  return (
    <div className="module-terminal-panel">
      <div className="terminal-bar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
      </div>
      <div className="font-mono text-[0.78rem] leading-[1.7] text-[var(--text-muted)]">
        {lines.map((line, index) => (
          <div key={index} className="terminal-code-line">
            {line.split("\n").map((segment, idx) => (
              <span key={idx}>{segment}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// FAQ ITEM (stateful)
// ─────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b ">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-transparent border-none text-[var(--text)] py-5 font-body text-[0.97rem] font-semibold cursor-pointer flex justify-between items-center gap-5 text-left transition-colors duration-200 hover:text-[var(--primary)]"
      >
        {q}
        <span className={`text-lg text-[var(--text-dim)] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45 text-[var(--primary)]" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 text-[0.9rem] text-[var(--text-muted)] leading-[1.8] ${open ? "max-h-[200px] pb-5" : "max-h-0"}`}>
        {a}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function DevOpsLanding() {
  const [isEnrollmentOpen, setEnrollmentOpen] = useState(false);
  const openEnrollment = () => setEnrollmentOpen(true);
  const closeEnrollment = () => setEnrollmentOpen(false);

  // Dynamic GSAP import for performance (only loads client-side)
  useEffect(() => {
    let cleanup = () => { };
    const loadGsap = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.gsap;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Hero entrance
      gsap.timeline({ delay: 0.15 })
        .from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.55, ease: "expo.out" })
        .from(".hero-headline", { opacity: 0, y: 28, duration: 0.8, ease: "expo.out" }, "-=0.25")
        .from(".profile-terminal", { opacity: 0, y: 24, duration: 0.75, ease: "expo.out" }, "-=0.45")
        .from(".hero-sub-text", { opacity: 0, y: 18, duration: 0.65, ease: "expo.out" }, "-=0.35")
        .from(".hero-actions", { opacity: 0, y: 14, duration: 0.65, ease: "expo.out" }, "-=0.35")
        .from(".hero-stats", { opacity: 0, y: 14, duration: 0.65, ease: "expo.out" }, "-=0.25")
        .from(".hero-right", { opacity: 0, x: 40, duration: 1, ease: "expo.out" }, "-=0.9");

      // Scroll reveals
      gsap.utils.toArray(".reveal").forEach((el: any) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      // Count-up stats
      gsap.utils.toArray("[data-count]").forEach((el: any) => {
        const target = parseInt(el.dataset.count);
        ScrollTrigger.create({
          trigger: el, start: "top 85%", once: true,
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: target, duration: 2, ease: "power2.out",
              onUpdate: function (this: any) { el.textContent = Math.round(this.targets()[0].val) + "+"; },
            });
          },
        });
      });

      // Tool cards stagger
      gsap.utils.toArray(".tool-card").forEach((card: any, i: number) => {
        gsap.from(card, {
          opacity: 0, y: 24, scale: 0.92, duration: 0.45, ease: "back.out(1.5)",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
          delay: (i % 6) * 0.055,
        });
      });

      // Module cards stagger
      gsap.utils.toArray(".module-card").forEach((card: any, i: number) => {
        gsap.from(card, {
          opacity: 0, y: 30, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
          delay: (i % 2) * 0.1,
        });
      });

      // Orb parallax
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        gsap.to(".hero-orb1", { x: x * 35, y: y * 35, duration: 2, ease: "power1.out" });
        gsap.to(".hero-orb2", { x: -x * 20, y: -y * 20, duration: 2.5, ease: "power1.out" });
      };
      window.addEventListener("mousemove", handleMouseMove);
      cleanup = () => window.removeEventListener("mousemove", handleMouseMove);
    };

    loadGsap();
    return () => cleanup();
  }, []);

  // ── RENDER ──
  return (
    <div className="font-body bg-[var(--bg)] text-[var(--text)] overflow-x-hidden antialiased">
      {/* Noise overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-35"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")` }}
      />

      {/* ═══════════════ HERO ═══════════════ */}
      <section aria-label="Hero" className="relative min-h-screen flex items-center px-[clamp(24px,6vw,90px)] py-[60px] overflow-hidden mt-6">
        {/* Grid bg */}
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "linear-gradient(rgba(74,144,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(74,144,255,0.035) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        {/* Orbs */}
        <div className="hero-orb1 absolute w-[800px] h-[800px] -top-[300px] -right-[200px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle,rgba(74,144,255,0.1) 0%,transparent 60%)" }} />
        <div className="hero-orb2 absolute w-[600px] h-[600px] -bottom-[200px] left-0 rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 60%)" }} />

        <div className="relative z-[1] max-w-[1380px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col">


            {/* Headline */}
            <h1 className="hero-headline font-serif text-[clamp(3rem,5.5vw,5.2rem)] font-bold leading-[1.04] tracking-[-0.02em] mb-8 italic transition-colors duration-300 hover:text-[var(--primary)]">
              <span className="not-italic text-[var(--text)]">Master DevOps</span><br />
              the way <em className="not-italic text-[var(--primary)]">industry</em><br />
              <span className="not-italic text-[var(--text)]">actually does it</span>
            </h1>
            {/* Eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-2 font-mono text-[0.72rem] text-[var(--accent2)] tracking-[0.1em] uppercase mb-7">
              <span className="w-[5px] h-[5px] bg-[var(--accent2)] rounded-full animate-pulse-dot" />
              New Cohort · Limited Seats Available
            </div>

            {/* Terminal card */}
            <div className="profile-terminal bg-[var(--card)] border border-[var(--border2)] rounded-[14px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)] mb-9">
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--card2)] border-b ">
                <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[0.7rem] text-[var(--text-dim)]">instructor.profile — zsh</span>
              </div>
              <div className="px-6 py-5 font-mono text-[0.79rem] leading-[2]">
                <div><span className="text-[var(--text-dim)]">const</span> <span className="text-[var(--primary-glow)]">instructor</span> <span className="text-[var(--text-dim)]">= {"{"}</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">name</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--accent2)]">"Anirudh Dobhal"</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">title</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--accent2)]">"CTO @ Carmaa"</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">experience</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--amber)]">13</span><span className="text-[var(--text-dim)]">+ years</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">previously</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--text-dim)]">[</span></div>
                <div>&nbsp;&nbsp;&nbsp; <span className="text-[var(--accent2)]">"McKinsey & Company"</span><span className="text-[var(--border2)]">,</span> <span className="text-[var(--text-dim)] italic">// Software Architect</span></div>
                <div>&nbsp;&nbsp;&nbsp; <span className="text-[var(--accent2)]">"Samsung HQ South Korea"</span><span className="text-[var(--border2)]">,</span> <span className="text-[var(--text-dim)] italic">// Lead Engineer</span></div>
                <div>&nbsp; <span className="text-[var(--text-dim)]">],</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">migrations</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--amber)]">6</span><span className="text-[var(--text-dim)]">x cloud migrations led</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">reliability</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--accent2)]">"99% service uptime"</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">certifications</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--text-dim)]">[</span><span className="text-[var(--secondary)]">"AWS Architect"</span><span className="text-[var(--border2)]">,</span> <span className="text-[var(--secondary)]">"OCJP"</span> <span className="text-[var(--border2)]">,</span><span className="text-[var(--secondary)]">"Marvin VC"</span> <span className="text-[var(--text-dim)]">]</span></div> ,
                <div><span className="text-[var(--text-dim)]">{"}"}</span></div>
              </div>
            </div>

            <p className="hero-sub-text text-base text-[var(--text-muted)] leading-[1.8] max-w-[580px] mb-9 font-normal transition-colors duration-300 hover:text-[var(--primary)]">
              Real systems. Real pipelines. Real production scenarios — taught by someone who built global-scale infrastructure at McKinsey and Samsung. Not a bootcamp instructor. An architect who ships.
            </p>

            <div className="hero-actions flex items-center gap-3.5 flex-wrap mb-11">
              <BtnPrimary onClick={openEnrollment}>Enroll Now — ₹35000 →</BtnPrimary>
              {/* <BtnGhost href="#curriculum" className="">View Curriculum</BtnGhost> */}
              <BtnPrimary href="#curriculum" className="">View Curriculum</BtnPrimary>
            </div>

            <div className="hero-stats flex gap-9 pt-9 border-t  flex-wrap sm:flex-nowrap">
              {[{ count: 50, label: "Hours Content" }, { count: 40, label: "Hands-On Labs" }, { count: 13, label: "Years Experience" }].map(({ count, label }) => (
                <div key={label}>
                  <div className="font-serif text-[2.2rem] font-bold text-[var(--text)] tracking-[-0.02em] leading-none" data-count={count}>0+</div>
                  <div className="font-mono text-[0.72rem] text-[var(--text-muted)] mt-1 tracking-[0.06em] uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo */}
          <div className="hero-right max-w-[380px] mx-auto lg:mx-0 w-full -translate-y-10">
            <div className="relative">
              {/* Photo box */}
              <div className="w-full aspect-[3/4] rounded-[18px] overflow-hidden border border-[var(--border2)] flex items-end justify-center shadow-[0_40px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)]" style={{ background: "linear-gradient(160deg,#0d1828 0%,#140d28 60%,#0a1822 100%)" }}>
                <div className="w-full h-full flex flex-col items-center justify-center gap-[18px]" style={{ background: "linear-gradient(160deg,#0b1626 0%,#160c2c 50%,#091422 100%)" }}>
                  <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[var(--border2)] shadow-lg">
                    <img
                      src="/annibhaiya.jpg"
                      alt="Anirudh Dobhal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-body font-bold text-[1.2rem] text-[var(--text)]">Anirudh Dobhal</div>
                  <div className="font-mono text-[0.72rem] text-[var(--text-dim)]">// replace with actual photo</div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="photo-chip animate-chip1 absolute top-5 -left-6 flex items-center gap-2.5 bg-[rgba(8,10,18,0.85)] backdrop-blur-md border border-[var(--border2)] rounded-[10px] px-3.5 py-2.5 text-[0.78rem] font-semibold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-body">
                <span className="text-[1.1rem]">🏢</span>
                <div>
                  <div>ex-McKinsey Architect</div>
                  <div className="text-[0.68rem] text-[var(--text-muted)] font-normal">Software Architect · 1.5 yrs</div>
                </div>
              </div>
              <div className="photo-chip animate-chip2 absolute bottom-20 -right-6 flex items-center gap-2.5 bg-[rgba(8,10,18,0.85)] backdrop-blur-md border border-[var(--border2)] rounded-[10px] px-3.5 py-2.5 text-[0.78rem] font-semibold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-body">
                <span className="text-[1.1rem]">📱</span>
                <div>
                  <div>Samsung Electronics</div>
                  <div className="text-[0.68rem] text-[var(--text-muted)] font-normal">Lead Engineer · 5.5 yrs</div>
                </div>
              </div>
              <div className="photo-chip animate-chip3 absolute bottom-5 -left-2.5 flex items-center gap-2.5 bg-[rgba(8,10,18,0.85)] backdrop-blur-md border border-[var(--border2)] rounded-[10px] px-3.5 py-2.5 text-[0.78rem] font-semibold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-body">
                <span className="text-[1.1rem]">☁️</span>
                <div>
                  <div>AWS Certified</div>
                  <div className="text-[0.68rem] text-[var(--text-muted)] font-normal">Advanced Architect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TICKER ═══════════════ */}
      <div aria-hidden="true" className="bg-[var(--bg2)] border-y  py-3.5 overflow-hidden">
        <div className="animate-ticker flex w-max">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 px-9 whitespace-nowrap font-mono text-[0.77rem] text-[var(--text-muted)]">
              {item} <span className="text-[var(--border2)] ml-1">//</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ WHY NOW ═══════════════ */}
      <section id="why" className="py-24 relative z-[1]" style={{ background: "linear-gradient(180deg,var(--bg) 0%,var(--bg2) 50%,var(--bg) 100%)" }}>
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal">
            <SectionKicker>Why DevOps, Why Now</SectionKicker>
            <SectionH2>The Industry <em className="not-italic text-[var(--primary)]">Changed.</em><br />Have You?</SectionH2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 bg-[var(--border)] border  rounded-2xl overflow-hidden" style={{ gap: "1px" }}>
            {WHY_CARDS.map((card) => (
              <div key={card.n} className="why-card reveal card-hover-line relative bg-[var(--card)] p-10 overflow-hidden transition-colors duration-300 hover:bg-[var(--card2)]">
                <div className="font-mono text-[0.7rem] text-[var(--text-dim)] tracking-[0.1em] mb-5">{card.n}</div>
                <div className="font-body text-[1.12rem] font-bold mb-3 leading-snug">{card.title}</div>
                <div className="text-[0.88rem] text-[var(--text-muted)] leading-[1.75]">{card.desc}</div>
                <div className="inline-block mt-5 font-mono text-[0.68rem] text-[var(--primary)] bg-[rgba(74,144,255,0.07)] border border-[rgba(74,144,255,0.14)] px-2.5 py-0.5 rounded">{card.pill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CURRICULUM ═══════════════ */}
      <section id="curriculum" className="py-24 relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14">
            <div className="reveal">
              <SectionKicker>Curriculum</SectionKicker>
              <SectionH2>Everything You Need.<br /><em className="not-italic text-[var(--primary)]">Nothing</em> You Don't.</SectionH2>
            </div>
            <div className="reveal">
              <p className="text-base text-[var(--text-muted)] leading-[1.8] font-normal">Six battle-tested modules that take you from zero to production-ready. Every module ends with a real-world project you can show employers.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {MODULES.map((mod) => (
              <div
                key={mod.num}
                className="module-card reveal
bg-[linear-gradient(180deg,var(--card)_0%,rgba(12,15,26,0.96)_100%)]
border border-[rgba(74,144,255,0.08)]
rounded-[14px]
p-7
transition-all duration-300 ease-out
hover:-translate-y-1
hover:border-[rgba(74,144,255,0.28)]
hover:bg-[linear-gradient(180deg,#11182b_0%,#0d1424_100%)]
hover:shadow-[0_0_0_1px_rgba(74,144,255,0.08),0_20px_60px_rgba(18,55,120,0.35)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">

                  {/* Left Side */}
                  <div>
                    <div className="text-[1.8rem] mb-3.5">{mod.icon}</div>

                    <div className="font-mono text-[0.68rem] text-[var(--text-dim)] mb-1.5 tracking-[0.08em]">
                      {mod.num}
                    </div>

                    <div className="font-body text-[1.05rem] font-bold mb-2.5 leading-snug">
                      {mod.name}
                    </div>

                    <div className="text-[0.84rem] text-[var(--text-muted)] leading-[1.7] mb-4">
                      {mod.desc}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {mod.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[0.67rem] px-2 py-0.5 bg-[rgba(255,255,255,0.03)] border  rounded text-[var(--text-dim)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="w-full">
                    <TerminalPanel lines={mod.terminal} />
                  </div>

                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ═══════════════ TOOLS ═══════════════ */}
      <section id="tools" className="py-24 bg-[var(--bg2)] relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal text-center max-w-[540px] mx-auto">
            <SectionKicker center>Tools Stack</SectionKicker>
            <SectionH2 className="text-center">The Exact Stack<br /><em className="not-italic text-[var(--primary)]">Industry Uses</em></SectionH2>
          </div>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="tool-card bg-[var(--card)] border  rounded-xl p-6 flex flex-col items-center gap-2.5 text-center transition-all duration-300 hover:border-[rgba(74,144,255,0.25)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]">
                <div className="text-[2rem]">{tool.icon}</div>
                <div className="font-mono text-[0.73rem] font-semibold text-[var(--text-muted)] tracking-[0.03em]">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ OUTCOMES + ENROLL ═══════════════ */}
      <section id="outcomes" className="py-24 relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start">
            {/* Outcomes */}
            <div>
              <div className="reveal">
                <SectionKicker>What You'll Achieve</SectionKicker>
                <SectionH2>Leave Here<br /><em className="not-italic text-[var(--primary)]">Job-Ready.</em></SectionH2>
              </div>
              <div className="flex flex-col gap-[18px] mt-8">
                {OUTCOMES.map((item, i) => (
                  <div key={i} className="outcome-item reveal flex gap-3.5 items-start">
                    <div className="w-6 h-6 rounded-md flex-shrink-0 bg-[rgba(74,144,255,0.09)] border border-[rgba(74,144,255,0.18)] flex items-center justify-center text-[var(--primary)] text-[0.72rem] mt-0.5">✓</div>
                    <div className="text-[0.93rem] text-[var(--text-muted)] leading-[1.65]">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enroll box */}
            <div id="enroll" className="reveal">
              <div className="bg-[var(--card)] border border-[var(--border2)] rounded-[18px] p-9 sticky top-[60px] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-[3.4rem] font-bold tracking-[-0.03em] leading-none">₹35,000</span>
                  <span className="text-base text-[var(--text-dim)] line-through">₹12,999</span>
                </div>
                <div className="text-[0.82rem] text-[var(--text-muted)] mb-6">One-time · Lifetime access · Early-bird pricing</div>
                <div className="bg-[rgba(245,158,11,0.07)] border border-[rgba(245,158,11,0.18)] rounded-lg px-3.5 py-2.5 text-[0.8rem] text-[var(--amber)] mb-2">🔥&nbsp;&nbsp;38 seats remaining at this price</div>
                <hr className="border-none border-t  my-5" />
                {["50+ hours of HD video", "40+ hands-on lab exercises", "Production capstone project", "Private community access", "Lifetime access + future updates", "Verified completion certificate", "Monthly live Q&A sessions"].map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-[0.85rem] text-[var(--text-muted)] mb-2.5">
                    <span className="text-[var(--accent2)] text-[0.8rem]">✓</span> {feat}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={openEnrollment}
                  className="block w-full mt-6 py-4 bg-[var(--primary)] text-white border-none rounded-[9px] font-body text-base font-bold cursor-pointer transition-all duration-300 text-center no-underline hover:bg-[var(--primary-glow)] hover:shadow-[0_0_36px_rgba(74,144,255,0.5)] hover:-translate-y-0.5"
                >
                  Enroll Now — ₹35,000
                </button>
                <div className="text-center mt-3.5 text-[0.75rem] text-[var(--text-dim)]">🔒 30-day money-back guarantee · No questions asked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 bg-[var(--bg2)] relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal text-center max-w-[520px] mx-auto">
            <SectionKicker center>Student Reviews</SectionKicker>
            <SectionH2 className="text-center">What <em className="not-italic text-[var(--primary)]">Engineers</em> Are Saying</SectionH2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="reveal bg-[var(--card)] border  rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--border2)] hover:-translate-y-1">
                <div className="text-[var(--amber)] text-[0.82rem] tracking-[2px] mb-3.5">{t.stars}</div>
                <p className="text-[0.88rem] text-[var(--text-muted)] leading-[1.78] mb-[18px]">"{t.quote}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[0.78rem] font-bold font-body flex-shrink-0" style={{ background: "linear-gradient(135deg,var(--primary-dim),var(--secondary))" }}>{t.initials}</div>
                  <div>
                    <div className="text-[0.85rem] font-bold">{t.name}</div>
                    <div className="text-[0.72rem] text-[var(--text-dim)] mt-px">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section id="faq" className="py-24 relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal text-center">
            <SectionKicker center>FAQ</SectionKicker>
            <SectionH2 className="text-center">Got <em className="not-italic text-[var(--primary)]">Questions?</em></SectionH2>
          </div>
          <div className="max-w-[700px] mx-auto mt-14">
            {FAQS.map((faq) => (
              <div key={faq.q} className="reveal">
                <FaqItem q={faq.q} a={faq.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-[120px] text-center relative overflow-hidden bg-[var(--bg2)] z-[1]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 50%,rgba(74,144,255,0.07) 0%,transparent 70%)" }} />
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] relative z-[1]">
          <div className="reveal">
            <SectionKicker center>Ready To Ship?</SectionKicker>
            <h2 className="font-serif text-[clamp(2.6rem,5vw,4.4rem)] font-bold tracking-[-0.02em] leading-[1.06] mb-4 italic">
              Stop Watching.<br /><em className="not-italic text-[var(--primary)]">Start Building.</em>
            </h2>
            <p className="text-[1.02rem] text-[var(--text-muted)] max-w-[480px] mx-auto mb-9 leading-[1.8]">
              Join engineers who chose to learn from someone who has actually done it — at Samsung, at McKinsey, and in production every day.
            </p>
            <div className="flex justify-center gap-3.5 flex-wrap">
              <BtnPrimary onClick={openEnrollment} className="text-base px-9 py-4">Enroll Now — ₹35,000 →</BtnPrimary>
              <BtnGhost href="#curriculum" className="text-base px-9 py-4">See Full Curriculum</BtnGhost>
            </div>
            <p className="mt-4 text-[0.76rem] text-[var(--text-dim)]">🔒 30-day money-back · Lifetime access · Next cohort starting soon</p>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="px-[clamp(24px,5vw,80px)] py-8 border-t  flex items-center justify-between flex-wrap gap-3 relative z-[1]">
        <div className="font-mono text-[0.88rem] text-[var(--text-dim)]">⬡ DevOps<span className="text-[var(--primary)]">Mastery</span></div>
        <div className="text-[0.76rem] text-[var(--text-dim)]">© 2025 DevOps Mastery. All rights reserved.</div>
        <div className="flex gap-5">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="text-[0.78rem] text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors">{link}</a>
          ))}
        </div>
      </footer>      <EnrollmentPopup open={isEnrollmentOpen} onClose={closeEnrollment} hideTrigger />    </div>
  );
}
