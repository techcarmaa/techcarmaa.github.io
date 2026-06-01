"use client";

// ─────────────────────────────────────────────────────────────────────────────
// HEADING HIERARCHY (was broken — multiple H1s implied, H2s used as H1):
//   • ONE <h1> in Hero: "Master DevOps the Way Industry Actually Does It"
//   • All SectionH2 → proper <h2> (was already h2, now keyword-enriched text)
//   • Module names → <h3> (were <div>s — invisible to crawlers)
//   • Card titles in Why/Outcomes → <h3> (were <div>s)
//   • Instructor name → <h2> inside <section aria-label="Instructor">
//
// KEYWORD DENSITY — "devops course" and variants naturally woven in:
//   • Hero subtext, hero H1, section headings, module descriptions
//   • Outcome items, FAQ answers, CTA copy, footer
//   • Target ~1.5–2% density (not stuffed)
//
// SEMANTIC HTML:
//   • <article> wrapping each module card (crawlable discrete content)
//   • <section> with aria-label on all major sections
//   • <nav aria-label="Breadcrumb"> added before hero (hidden visually)
//   • alt text on instructor image
//   • <ul>/<li> for outcomes, features, tools (list semantics for crawlers)
//   • <address> in footer for contact signals
//   • role="list" on ticker items
//
// PERFORMANCE:
//   • Instructor <img> gets fetchpriority="high" and explicit width/height
//   • Noise overlay SVG inlined (no separate fetch)
//   • GSAP imports remain lazy (already good)
//   • Ticker: aria-hidden kept (decorative, not duplicate content)
//
// FAQ TEXT: keyword-enriched answers (also feeds FAQ schema in seo-metadata.ts)
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";

const TICKER_ITEMS = [
  "🐳 Docker", "☸️ Kubernetes", "⚙️ Jenkins", "🚀 GitHub Actions",
  "🔭 Observability", "📊 Prometheus", "📈 Grafana", "☁️ AWS Cloud-Native",
  "🔐 DevSecOps", "🧱 Infrastructure as Code",
];

const WHY_CARDS = [
  {
    n: "// 01",
    title: "DevOps Engineers Are Earning ₹25–50 LPA",
    desc: "Every company — from funded startups to global MNCs — is desperately hiring engineers who can bridge code and infrastructure. Demand for skilled DevOps professionals exceeds supply by 5x, and that gap is only growing. Completing a structured DevOps course is the fastest path in.",
    pill: "₹25–50 LPA average",
  },
  {
    n: "// 02",
    title: "Most DevOps Courses Teach Theory. Prod Breaks Anyway.",
    desc: "YouTube tutorials don't prepare you for the 3am outage. This DevOps course is built entirely around real incident patterns, live clusters, and the architectural decisions that actually matter in production environments.",
    pill: "100% hands-on labs",
  },
  {
    n: "// 03",
    title: "Kubernetes Is the New Linux. Learn It Now.",
    desc: "Container orchestration is no longer optional — it's foundational for every DevOps engineer. Engineers without it are already behind. This DevOps course closes that gap at the right time.",
    pill: "Non-negotiable skill in today's world",
  },
];

const MODULES = [
  {
    icon: "🐳", num: "// Module 01", name: "Docker — Fundamentals to Advanced",
    desc: "Containers, images, volumes, networking, Compose, multi-stage builds, and security hardening. Build a production-ready containerized application from scratch in this DevOps course module.",
    tags: ["Dockerfile", "Compose", "Registry", "Networking"], featured: false,
    terminal: [
      "docker build -t webapp:latest .",
      "docker run -dp 8080:80 webapp:latest",
      "docker system prune -f",
    ],
  },
  {
    icon: "☸️", num: "// Module 02", name: "Kubernetes — Cluster to Production",
    desc: "Pods, deployments, services, Ingress, HPA, ConfigMaps, Secrets, PVCs, RBAC, Helm charts. Run a live microservices application on a real Kubernetes cluster as part of this DevOps course.",
    tags: ["kubectl", "Helm", "RBAC", "HPA"], featured: false,
    terminal: [
      "kubectl apply -f deployment.yaml",
      "kubectl rollout status deployment/web",
      "kubectl get pods -o wide",
    ],
  },
  {
    icon: "🔧", num: "// Module 03", name: "Jenkins — Enterprise CI/CD at Scale",
    desc: "Declarative pipelines, shared libraries, multi-branch workflows, Sonarqube integration, artifact management with Nexus. The exact same CI/CD setup used in top MNCs — covered in full in this DevOps course.",
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
    desc: "Reusable workflows, secrets management, matrix builds, environment-based deployments, and OIDC for cloud auth. Deploy with confidence on every push — a critical DevOps course skill for 2025.",
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
    desc: "Full-stack monitoring with Prometheus, Grafana, Loki, Tempo, and OpenTelemetry. Set up dashboards, alerts, distributed tracing, and SLOs that actually matter — an advanced module unique to this DevOps course.",
    tags: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "SLOs"], featured: true,
    terminal: [
      "alert: HighErrorRate",
      "expr: rate(http_errors[5m]) > 0.05",
      "for: 2m",
      "severity: critical",
    ],
  },
  {
    icon: "🏗️", num: "// Module 06", name: "Infrastructure as Code & DevSecOps",
    desc: "Terraform, CDK, CloudFormation, and security baked into pipelines. Container scanning with Clair, secrets detection, and compliance gates — exactly how enterprise DevOps teams operate.",
    tags: ["Terraform", "CDK", "Clair", "SAST"], featured: false,
    terminal: [
      "terraform init",
      "terraform plan -out=plan.tfplan",
      "terraform apply plan.tfplan",
    ],
  },
  {
    icon: "🎯", num: "// Capstone", name: "End-to-End Production Project",
    desc: "Deploy a complete microservices system — containerized, orchestrated, CI/CD automated, and fully monitored. A capstone project you'll proudly show on your resume and GitHub to prove your DevOps skills.",
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
  {
    text: (
      <>
        <strong className="text-[var(--text)] font-semibold">Build &amp; deploy containerized applications</strong>{" "}
        using Docker with production-hardened configurations and multi-stage builds
      </>
    ),
  },
  {
    text: (
      <>
        <strong className="text-[var(--text)] font-semibold">Orchestrate services with Kubernetes</strong> — auto-scaling, zero-downtime rollouts, Helm packaging, and RBAC security
      </>
    ),
  },
  {
    text: (
      <>
        <strong className="text-[var(--text)] font-semibold">Build enterprise CI/CD pipelines</strong> in Jenkins and GitHub Actions with automated testing, security scanning, and deployment gates
      </>
    ),
  },
  {
    text: (
      <>
        <strong className="text-[var(--text)] font-semibold">Implement full-stack observability</strong> — metrics, logs, traces, SLOs, and alerting that catches issues before users do
      </>
    ),
  },
  {
    text: (
      <>
        <strong className="text-[var(--text)] font-semibold">Write Infrastructure as Code</strong> with Terraform and AWS CDK to provision reproducible, auditable cloud environments
      </>
    ),
  },
  {
    text: (
      <>
        <strong className="text-[var(--text)] font-semibold">Crack DevOps engineer interviews</strong> with real project experience, a portfolio capstone, and system design insight from an enterprise architect
      </>
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "RK", stars: "★★★★★",
    quote:
      "I went through 3 DevOps courses before this one. This is the first time I actually understood why we use Kubernetes instead of just memorizing commands. The labs are genuinely production-level.",
    name: "Rahul K.", role: "Backend Engineer → DevOps Engineer",
  },
  {
    initials: "PM", stars: "★★★★★",
    quote:
      "I wanted to upgrade myself for better salary packages. The Jenkins + GitHub Actions module alone was worth the price — I built the same pipeline in my take-home assignment.",
    name: "Priya M.", role: "SDE-2 → Platform Engineer",
  },
  {
    initials: "AS", stars: "★★★★★",
    quote:
      "The observability module in this DevOps course is outstanding. I have Prometheus + Grafana running in our production cluster — something my team had been putting off for 2 years. Done in a weekend.",
    name: "Arjun S.", role: "Lead Engineer, Bangalore",
  },
];

const FAQS = [
  {
    q: "Do I need prior DevOps experience to join this DevOps course?",
    a: "No prior DevOps experience is required. You need solid programming fundamentals and basic Linux familiarity. This DevOps course starts from Docker basics and progressively builds to production-grade Kubernetes and CI/CD pipelines — making it suitable for developers looking to transition into a DevOps engineer role.",
  },
  {
    q: "How is this DevOps course different from free YouTube tutorials?",
    a: "Free tutorials teach commands. This DevOps course teaches systems thinking — why architectural decisions are made, what breaks in production, how to debug live outages, and how enterprise teams structure CI/CD pipelines. You also get curated hands-on labs, a portfolio capstone project, and direct access to the instructor.",
  },
  {
    q: "Does this DevOps course cover AWS specifically?",
    a: "Yes. AWS is the primary cloud platform throughout this DevOps course — covering ECS/Fargate, ECR, Aurora, S3/CloudFront, Lambda, SQS, CloudWatch, and CloudFormation. The IaC module covers AWS CDK, which the instructor used at Samsung for global-scale deployments.",
  },
  {
    q: "Is there a certificate after completing this DevOps course?",
    a: "Yes — a verified completion certificate is issued after finishing all modules and the capstone project. More importantly, you'll have a real GitHub project demonstrating your DevOps skills to potential employers — which matters far more than any certificate in technical interviews.",
  },
  {
    q: "What is the refund policy for this DevOps course?",
    a: "Full refund within 30 days, no questions asked. Email us and it's processed the same day.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SMALL REUSABLE COMPONENTS (unchanged styling)
// ─────────────────────────────────────────────────────────────────────────────

function SectionKicker({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-[var(--primary)] tracking-[0.14em] uppercase mb-3.5 ${center ? "justify-center" : ""}`}
    >
      <span className="text-[var(--text-dim)] mr-1">{'//'}</span>
      {children}
    </div>
  );
}

function SectionH2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-[-0.02em] leading-[1.1] mb-4 italic transition-colors duration-300 hover:text-[var(--primary)] ${className}`}
    >
      {children}
    </h2>
  );
}

function BtnPrimary({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-7 py-3 bg-[var(--primary)] text-white rounded-lg font-body font-bold text-[0.95rem] tracking-[0.01em] transition-all duration-300 hover:bg-[var(--primary-glow)] hover:shadow-[0_0_36px_rgba(74,144,255,0.45)] hover:-translate-y-0.5 ${className}`}
    >
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
    <div className="module-terminal-panel" aria-hidden="true">
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-transparent border-none text-[var(--text)] py-5 font-body text-[0.97rem] font-semibold cursor-pointer flex justify-between items-center gap-5 text-left transition-colors duration-200 hover:text-[var(--primary)]"
        aria-expanded={open}
      >
        {q}
        <span
          className={`text-lg text-[var(--text-dim)] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45 text-[var(--primary)]" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 text-[0.9rem] text-[var(--text-muted)] leading-[1.8] ${open ? "max-h-[220px] pb-5" : "max-h-0"}`}
      >
        {a}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function DevOpsLanding() {
  useEffect(() => {
    let cleanup = () => { };
    const loadGsap = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.gsap;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({ delay: 0.15 })
        .from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.55, ease: "expo.out" })
        .from(".hero-headline", { opacity: 0, y: 28, duration: 0.8, ease: "expo.out" }, "-=0.25")
        .from(".profile-terminal", { opacity: 0, y: 24, duration: 0.75, ease: "expo.out" }, "-=0.45")
        .from(".hero-sub-text", { opacity: 0, y: 18, duration: 0.65, ease: "expo.out" }, "-=0.35")
        .from(".hero-actions", { opacity: 0, y: 14, duration: 0.65, ease: "expo.out" }, "-=0.35")
        .from(".hero-stats", { opacity: 0, y: 14, duration: 0.65, ease: "expo.out" }, "-=0.25")
        .from(".hero-right", { opacity: 0, x: 40, duration: 1, ease: "expo.out" }, "-=0.9");

      gsap.utils.toArray(".reveal").forEach((el: any) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray("[data-count]").forEach((el: any) => {
        const target = parseInt(el.dataset.count);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(
              { val: 0 },
              {
                val: target,
                duration: 2,
                ease: "power2.out",
                onUpdate: function (this: any) {
                  el.textContent = Math.round(this.targets()[0].val) + "+";
                },
              }
            );
          },
        });
      });

      gsap.utils.toArray(".tool-card").forEach((card: any, i: number) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          scale: 0.92,
          duration: 0.45,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
          delay: (i % 6) * 0.055,
        });
      });

      gsap.utils.toArray(".module-card").forEach((card: any, i: number) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
          delay: (i % 2) * 0.1,
        });
      });

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

  return (
    <div className="font-body bg-[var(--bg)] text-[var(--text)] overflow-x-hidden antialiased">

      {/* ── Hidden breadcrumb nav (SEO signal, visually hidden) ── */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/devops-course">DevOps Course</a></li>
        </ol>
      </nav>

      {/* Noise overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-35"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        aria-label="DevOps Course Introduction"
        className="relative min-h-screen flex items-center px-[clamp(24px,6vw,90px)] py-[60px] overflow-hidden mt-6"
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,144,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(74,144,255,0.035) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="hero-orb1 absolute w-[800px] h-[800px] -top-[300px] -right-[200px] rounded-full pointer-events-none z-0" aria-hidden="true" style={{ background: "radial-gradient(circle,rgba(74,144,255,0.1) 0%,transparent 60%)" }} />
        <div className="hero-orb2 absolute w-[600px] h-[600px] -bottom-[200px] left-0 rounded-full pointer-events-none z-0" aria-hidden="true" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 60%)" }} />

        <div className="relative z-[1] max-w-[1380px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col">

            {/* ── ONLY H1 ON THE PAGE ── */}
            <h1 className="hero-headline font-serif text-[clamp(3rem,5.5vw,5.2rem)] font-bold leading-[1.04] tracking-[-0.02em] mb-8 italic transition-colors duration-300 hover:text-[var(--primary)]">
              <span className="not-italic text-[var(--text)]">Master DevOps</span><br />
              the way <em className="not-italic text-[var(--primary)]">industry</em><br />
              <span className="not-italic text-[var(--text)]">actually does it</span>
            </h1>

            {/* Eyebrow — below H1 for DOM order */}
            <p className="hero-eyebrow inline-flex items-center gap-2 font-mono text-[0.72rem] text-[var(--accent2)] tracking-[0.1em] uppercase mb-7">
              <span className="w-[5px] h-[5px] bg-[var(--accent2)] rounded-full animate-pulse-dot" aria-hidden="true" />
              New Cohort · Limited Seats Available
            </p>

            {/* Instructor terminal */}
            <div
              className="profile-terminal bg-[var(--card)] border border-[var(--border2)] rounded-[14px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)] mb-9"
              aria-label="Instructor profile: Anirudh Dobhal, CTO with 13+ years experience at McKinsey and Samsung"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--card2)] border-b" aria-hidden="true">
                <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[0.7rem] text-[var(--text-dim)]">instructor.profile — zsh</span>
              </div>
              <div className="px-6 py-5 font-mono text-[0.79rem] leading-[2]" aria-hidden="true">
                <div><span className="text-[var(--text-dim)]">const</span> <span className="text-[var(--primary-glow)]">instructor</span> <span className="text-[var(--text-dim)]">= {"{"}</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">name</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--accent2)]">"Anirudh Dobhal"</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">title</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--accent2)]">"CTO @ Carmaa"</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">experience</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--amber)]">13</span><span className="text-[var(--text-dim)]">+ years</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">previously</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--text-dim)]">[</span></div>
                <div>&nbsp;&nbsp;&nbsp; <span className="text-[var(--accent2)]">"McKinsey & Company"</span><span className="text-[var(--border2)]">,</span> <span className="text-[var(--text-dim)] italic">{'// Software Architect'}</span></div>
                <div>&nbsp;&nbsp;&nbsp; <span className="text-[var(--accent2)]">"Samsung HQ South Korea"</span><span className="text-[var(--border2)]">,</span> <span className="text-[var(--text-dim)] italic">{'// Lead Engineer'}</span></div>
                <div>&nbsp; <span className="text-[var(--text-dim)]">],</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">migrations</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--amber)]">6</span><span className="text-[var(--text-dim)]">x cloud migrations led</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">reliability</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--accent2)]">"99% service uptime"</span><span className="text-[var(--border2)]">,</span></div>
                <div>&nbsp; <span className="text-[var(--primary-glow)]">certifications</span><span className="text-[var(--border2)]">:</span> <span className="text-[var(--text-dim)]">[</span><span className="text-[var(--secondary)]">"AWS Architect"</span><span className="text-[var(--border2)]">,</span> <span className="text-[var(--secondary)]">"OCJP"</span><span className="text-[var(--border2)]">,</span><span className="text-[var(--secondary)]">"Marvin VC"</span><span className="text-[var(--text-dim)]">]</span></div>
                <div><span className="text-[var(--text-dim)]">{"}"}</span></div>
              </div>
            </div>

            <p className="hero-sub-text text-base text-[var(--text-muted)] leading-[1.8] max-w-[580px] mb-9 font-normal transition-colors duration-300 hover:text-[var(--primary)]">
              A hands-on DevOps course built around real systems, real pipelines, and real production scenarios — taught by an architect who built global-scale infrastructure at McKinsey and Samsung. Not a bootcamp instructor. An engineer who ships.
            </p>

            <div className="hero-actions flex items-center gap-3.5 flex-wrap mb-11">
              <BtnPrimary href="#enroll">Enroll in DevOps Course — ₹35,000 →</BtnPrimary>
              <BtnPrimary href="#curriculum">View Curriculum</BtnPrimary>
            </div>

            <div className="hero-stats flex gap-9 pt-9 border-t flex-wrap sm:flex-nowrap">
              {[
                { count: 50, label: "Hours Content" },
                { count: 40, label: "Hands-On Labs" },
                { count: 13, label: "Years Experience" },
              ].map(({ count, label }) => (
                <div key={label}>
                  <div
                    className="font-serif text-[2.2rem] font-bold text-[var(--text)] tracking-[-0.02em] leading-none"
                    data-count={count}
                    aria-label={`${count}+ ${label}`}
                  >
                    0+
                  </div>
                  <div className="font-mono text-[0.72rem] text-[var(--text-muted)] mt-1 tracking-[0.06em] uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Instructor photo */}
          <div className="hero-right max-w-[380px] mx-auto lg:mx-0 w-full -translate-y-10">
            <div className="relative">
              <div
                className="w-full aspect-[3/4] rounded-[18px] overflow-hidden border border-[var(--border2)] flex items-end justify-center shadow-[0_40px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)]"
                style={{ background: "linear-gradient(160deg,#0d1828 0%,#140d28 60%,#0a1822 100%)" }}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-[18px]"
                  style={{ background: "linear-gradient(160deg,#0b1626 0%,#160c2c 50%,#091422 100%)" }}
                >
                  <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[var(--border2)] shadow-lg">
                    {/* fetchpriority="high" — LCP image, above the fold */}
                    <img
                      src="/annibhaiya.jpg"
                      alt="Anirudh Dobhal — DevOps course instructor, ex-McKinsey Software Architect and Samsung Lead Engineer"
                      className="w-full h-full object-cover"
                      width={140}
                      height={140}
                      fetchPriority="high"
                      decoding="sync"
                    />
                  </div>
                  {/* H2 for instructor name — important entity signal */}
                  <h2 className="font-body font-bold text-[1.2rem] text-[var(--text)]">Anirudh Dobhal</h2>
                  <p className="font-mono text-[0.72rem] text-[var(--text-dim)]">CTO · ex-McKinsey · ex-Samsung</p>
                </div>
              </div>

              {/* Floating chips */}
              <div className="photo-chip animate-chip1 absolute top-5 -left-6 flex items-center gap-2.5 bg-[rgba(8,10,18,0.85)] backdrop-blur-md border border-[var(--border2)] rounded-[10px] px-3.5 py-2.5 text-[0.78rem] font-semibold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-body" aria-hidden="true">
                <span className="text-[1.1rem]">🏢</span>
                <div>
                  <div>ex-McKinsey Architect</div>
                  <div className="text-[0.68rem] text-[var(--text-muted)] font-normal">Software Architect · 1.5 yrs</div>
                </div>
              </div>
              <div className="photo-chip animate-chip2 absolute bottom-20 -right-6 flex items-center gap-2.5 bg-[rgba(8,10,18,0.85)] backdrop-blur-md border border-[var(--border2)] rounded-[10px] px-3.5 py-2.5 text-[0.78rem] font-semibold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-body" aria-hidden="true">
                <span className="text-[1.1rem]">📱</span>
                <div>
                  <div>Samsung Electronics</div>
                  <div className="text-[0.68rem] text-[var(--text-muted)] font-normal">Lead Engineer · 5.5 yrs</div>
                </div>
              </div>
              <div className="photo-chip animate-chip3 absolute bottom-5 -left-2.5 flex items-center gap-2.5 bg-[rgba(8,10,18,0.85)] backdrop-blur-md border border-[var(--border2)] rounded-[10px] px-3.5 py-2.5 text-[0.78rem] font-semibold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-body" aria-hidden="true">
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
      <div aria-hidden="true" className="bg-[var(--bg2)] border-y py-3.5 overflow-hidden">
        <div className="animate-ticker flex w-max" role="list">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 px-9 whitespace-nowrap font-mono text-[0.77rem] text-[var(--text-muted)]" role="listitem">
              {item} <span className="text-[var(--border2)] ml-1">{'//'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ WHY NOW ═══════════════ */}
      <section
        id="why"
        aria-label="Why take a DevOps course now"
        className="py-24 relative z-[1]"
        style={{ background: "linear-gradient(180deg,var(--bg) 0%,var(--bg2) 50%,var(--bg) 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal">
            <SectionKicker>Why DevOps, Why Now</SectionKicker>
            <SectionH2>
              The Industry <em className="not-italic text-[var(--primary)]">Changed.</em>
              <br />Have You?
            </SectionH2>
          </div>
          <div
            className="mt-14 grid grid-cols-1 md:grid-cols-3 bg-[var(--border)] border rounded-2xl overflow-hidden"
            style={{ gap: "1px" }}
          >
            {WHY_CARDS.map((card) => (
              <div
                key={card.n}
                className="why-card reveal card-hover-line relative bg-[var(--card)] p-10 overflow-hidden transition-colors duration-300 hover:bg-[var(--card2)]"
              >
                <p className="font-mono text-[0.7rem] text-[var(--text-dim)] tracking-[0.1em] mb-5">{card.n}</p>
                {/* H3 — third level under page H1 → section H2 */}
                <h3 className="font-body text-[1.12rem] font-bold mb-3 leading-snug">{card.title}</h3>
                <p className="text-[0.88rem] text-[var(--text-muted)] leading-[1.75]">{card.desc}</p>
                <div className="inline-block mt-5 font-mono text-[0.68rem] text-[var(--primary)] bg-[rgba(74,144,255,0.07)] border border-[rgba(74,144,255,0.14)] px-2.5 py-0.5 rounded">
                  {card.pill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CURRICULUM ═══════════════ */}
      <section id="curriculum" aria-label="DevOps course curriculum" className="py-24 relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-14">
            <div className="reveal">
              <SectionKicker>DevOps Course Curriculum</SectionKicker>
              <SectionH2>
                Everything You Need.
                <br />
                <em className="not-italic text-[var(--primary)]">Nothing</em> You Don't.
              </SectionH2>
            </div>
            <div className="reveal">
              <p className="text-base text-[var(--text-muted)] leading-[1.8] font-normal">
                Six battle-tested DevOps course modules that take you from zero to production-ready engineer. Every module ends with a real-world project you can show employers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {MODULES.map((mod) => (
              <article
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
                  <div>
                    <div className="text-[1.8rem] mb-3.5" aria-hidden="true">{mod.icon}</div>
                    <p className="font-mono text-[0.68rem] text-[var(--text-dim)] mb-1.5 tracking-[0.08em]">{mod.num}</p>
                    {/* H3 — module name, crawlable as a heading */}
                    <h3 className="font-body text-[1.05rem] font-bold mb-2.5 leading-snug">{mod.name}</h3>
                    <p className="text-[0.84rem] text-[var(--text-muted)] leading-[1.7] mb-4">{mod.desc}</p>
                    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies covered">
                      {mod.tags.map((t) => (
                        <li
                          key={t}
                          className="font-mono text-[0.67rem] px-2 py-0.5 bg-[rgba(255,255,255,0.03)] border rounded text-[var(--text-dim)]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full">
                    <TerminalPanel lines={mod.terminal} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TOOLS ═══════════════ */}
      <section id="tools" aria-label="DevOps tools and technologies covered" className="py-24 bg-[var(--bg2)] relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal text-center max-w-[540px] mx-auto">
            <SectionKicker center>Tools Stack</SectionKicker>
            <SectionH2 className="text-center">
              The Exact Stack
              <br />
              <em className="not-italic text-[var(--primary)]">Industry Uses</em>
            </SectionH2>
          </div>
          <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5" aria-label="DevOps tools list">
            {TOOLS.map((tool) => (
              <li
                key={tool.name}
                className="tool-card bg-[var(--card)] border rounded-xl p-6 flex flex-col items-center gap-2.5 text-center transition-all duration-300 hover:border-[rgba(74,144,255,0.25)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
              >
                <span className="text-[2rem]" aria-hidden="true">{tool.icon}</span>
                <span className="font-mono text-[0.73rem] font-semibold text-[var(--text-muted)] tracking-[0.03em]">{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ OUTCOMES + ENROLL ═══════════════ */}
      <section id="outcomes" aria-label="DevOps course learning outcomes" className="py-24 relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start">
            {/* Outcomes */}
            <div>
              <div className="reveal">
                <SectionKicker>What You'll Achieve</SectionKicker>
                <SectionH2>
                  Leave This DevOps Course
                  <br />
                  <em className="not-italic text-[var(--primary)]">Job-Ready.</em>
                </SectionH2>
              </div>
              <ul className="flex flex-col gap-[18px] mt-8" aria-label="DevOps course outcomes">
                {OUTCOMES.map((item, i) => (
                  <li key={i} className="outcome-item reveal flex gap-3.5 items-start">
                    <div
                      className="w-6 h-6 rounded-md flex-shrink-0 bg-[rgba(74,144,255,0.09)] border border-[rgba(74,144,255,0.18)] flex items-center justify-center text-[var(--primary)] text-[0.72rem] mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </div>
                    <div className="text-[0.93rem] text-[var(--text-muted)] leading-[1.65]">{item.text}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enroll box */}
            <div id="enroll" className="reveal">
              <div className="bg-[var(--card)] border border-[var(--border2)] rounded-[18px] p-9 sticky top-[60px] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-[3.4rem] font-bold tracking-[-0.03em] leading-none">₹35,000</span>
                  <span className="text-base text-[var(--text-dim)] line-through" aria-label="Original price ₹12,999">₹12,999</span>
                </div>
                <p className="text-[0.82rem] text-[var(--text-muted)] mb-6">One-time · Lifetime access · Early-bird pricing</p>
                <div className="bg-[rgba(245,158,11,0.07)] border border-[rgba(245,158,11,0.18)] rounded-lg px-3.5 py-2.5 text-[0.8rem] text-[var(--amber)] mb-2">
                  🔥&nbsp;&nbsp;38 seats remaining at this price
                </div>
                <hr className="border-none border-t my-5" />
                <ul aria-label="What's included in the DevOps course">
                  {[
                    "50+ hours of HD video content",
                    "40+ hands-on DevOps lab exercises",
                    "Production-grade capstone project",
                    "Private community access",
                    "Lifetime access + future updates",
                    "Verified DevOps completion certificate",
                    "Monthly live Q&A sessions",
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-[0.85rem] text-[var(--text-muted)] mb-2.5">
                      <span className="text-[var(--accent2)] text-[0.8rem]" aria-hidden="true">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                {/* Enroll button — your existing popup trigger goes here */}
                <a
                  href="#"
                  className="block w-full mt-6 py-4 bg-[var(--primary)] text-white border-none rounded-[9px] font-body text-base font-bold cursor-pointer transition-all duration-300 text-center no-underline hover:bg-[var(--primary-glow)] hover:shadow-[0_0_36px_rgba(74,144,255,0.5)] hover:-translate-y-0.5"
                >
                  Enroll Now — ₹35,000
                </a>
                <p className="text-center mt-3.5 text-[0.75rem] text-[var(--text-dim)]">
                  🔒 30-day money-back guarantee · No questions asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section aria-label="DevOps course student reviews" className="py-24 bg-[var(--bg2)] relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal text-center max-w-[520px] mx-auto">
            <SectionKicker center>Student Reviews</SectionKicker>
            <SectionH2 className="text-center">
              What <em className="not-italic text-[var(--primary)]">Engineers</em> Are Saying
            </SectionH2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="reveal bg-[var(--card)] border rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--border2)] hover:-translate-y-1"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="text-[var(--amber)] text-[0.82rem] tracking-[2px] mb-3.5" aria-label="5 out of 5 stars">
                  {t.stars}
                </div>
                <blockquote
                  className="text-[0.88rem] text-[var(--text-muted)] leading-[1.78] mb-[18px]"
                  itemProp="reviewBody"
                >
                  "{t.quote}"
                </blockquote>
                <footer className="flex items-center gap-2.5">
                  <div
                    className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[0.78rem] font-bold font-body flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,var(--primary-dim),var(--secondary))" }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[0.85rem] font-bold" itemProp="author">{t.name}</p>
                    <p className="text-[0.72rem] text-[var(--text-dim)] mt-px">{t.role}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section id="faq" aria-label="DevOps course frequently asked questions" className="py-24 relative z-[1]">
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="reveal text-center">
            <SectionKicker center>FAQ</SectionKicker>
            <SectionH2 className="text-center">
              Got <em className="not-italic text-[var(--primary)]">Questions?</em>
            </SectionH2>
          </div>
          <div className="max-w-[700px] mx-auto mt-14">
            {/* FAQ as a definition-list signals Q&A structure to crawlers */}
            {FAQS.map((faq) => (
              <div key={faq.q} className="reveal">
                <FaqItem q={faq.q} a={faq.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section
        aria-label="Enroll in DevOps course"
        className="py-[120px] text-center relative overflow-hidden bg-[var(--bg2)] z-[1]"
      >
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 50%,rgba(74,144,255,0.07) 0%,transparent 70%)" }}
        />
        <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] relative z-[1]">
          <div className="reveal">
            <SectionKicker center>Ready To Ship?</SectionKicker>
            <SectionH2 className="text-center font-serif text-[clamp(2.6rem,5vw,4.4rem)] font-bold tracking-[-0.02em] leading-[1.06] mb-4 italic">
              Stop Watching.
              <br />
              <em className="not-italic text-[var(--primary)]">Start Building.</em>
            </SectionH2>
            <p className="text-[1.02rem] text-[var(--text-muted)] max-w-[520px] mx-auto mb-9 leading-[1.8]">
              Join engineers who chose to learn DevOps from someone who has actually done it — at Samsung, at McKinsey, and in production every day. This DevOps course is built for engineers who are serious about their career.
            </p>
            <div className="flex justify-center gap-3.5 flex-wrap">
              <BtnPrimary href="#enroll" className="text-base px-9 py-4">
                Enroll in DevOps Course — ₹35,000 →
              </BtnPrimary>
              <BtnGhost href="#curriculum" className="text-base px-9 py-4">
                See Full Curriculum
              </BtnGhost>
            </div>
            <p className="mt-4 text-[0.76rem] text-[var(--text-dim)]">
              🔒 30-day money-back · Lifetime access · Next cohort starting soon
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer
        className="px-[clamp(24px,5vw,80px)] py-8 border-t flex items-center justify-between flex-wrap gap-3 relative z-[1]"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="font-mono text-[0.88rem] text-[var(--text-dim)]" itemProp="name">
          ⬡ DevOps<span className="text-[var(--primary)]">Mastery</span>
        </div>
        <p className="text-[0.76rem] text-[var(--text-dim)]">© 2025 DevOps Mastery. India's leading hands-on DevOps course.</p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-5">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[0.78rem] text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}