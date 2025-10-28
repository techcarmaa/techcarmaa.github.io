import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Lightbulb,
  Globe,
  Code,
  Cloud,
  Database,
  Smartphone,
  Server,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";
import TechnicalExpertiseSection from "./TechnicalExpertiseSection";
import { Zap, Cpu } from "lucide-react";
import TechnicalBlogsSection from "./TechnicalBlogsSection";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [techRef, techInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [caseStudyRef, caseStudyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "50+", label: "Expert Engineers", icon: Users },
    { number: "15+", label: "Years Experience", icon: Lightbulb },
    { number: "25+", label: "Countries Served", icon: Globe },
  ];

  const technicalExpertise = [
    {
      icon: Code,
      title: "Full-Stack Development",
      skills: [
        "React, Angular, Vue.js",
        "Node.js, Python, .NET",
        "MySQL, PostgreSQL, MongoDB",
        "RESTful APIs & GraphQL",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Services",
      skills: [
        "EC2, Lambda, RDS, S3",
        "CloudFormation, CDK",
        "Auto Scaling & Load Balancing",
        "Cost Optimization",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "SaaS Architecture",
      skills: [
        "Multi-tenant Design",
        "Subscription Management",
        "API Gateway & Microservices",
        "Enterprise Integrations",
      ],
      color: "from-pink-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        "React Native, Flutter",
        "iOS & Android Native",
        "Cross-platform Solutions",
        "App Store Deployment",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure",
      skills: [
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
      color: "from-blue-500 to-green-500",
    },
    {
      icon: Settings,
      title: "Enterprise Integration",
      skills: [
        "Legacy System Migration",
        "API Development",
        "Third-party Integrations",
        "Data Synchronization",
      ],
      color: "from-green-500 to-purple-500",
    },
  ];

  const technicalBlogs = [
    {
      id: 1,
      title: "Scaling Microservices with Kubernetes",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Deep dive into container orchestration and service mesh patterns for enterprise applications.",
      category: "DevOps",
      readTime: "8 min read",
      date: "2024-01-15",
      content: `
        <h2>Introduction to Microservices Architecture</h2>
        <p>Microservices architecture has revolutionized how we build and deploy modern applications. In this comprehensive guide, we'll explore how Kubernetes enables us to scale microservices effectively.</p>
        <h3>Key Benefits of Kubernetes for Microservices</h3>
        <ul>
          <li>Automated deployment and scaling</li>
          <li>Service discovery and load balancing</li>
          <li>Rolling updates and rollbacks</li>
          <li>Health monitoring and self-healing</li>
        </ul>
        <h3>Conclusion</h3>
        <p>Kubernetes provides a robust platform for scaling microservices, but success requires careful planning and adherence to best practices.</p>
      `,
    },
    {
      id: 2,
      title: "AWS Lambda Best Practices for Serverless",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Optimize your serverless functions for performance, cost, and reliability in production environments.",
      category: "AWS",
      readTime: "12 min read",
      date: "2024-01-10",
      content: `
        <h2>Serverless Architecture with AWS Lambda</h2>
        <p>AWS Lambda has transformed how we think about backend infrastructure. This article covers essential best practices for production-ready serverless applications.</p>
        <h3>Performance Optimization</h3>
        <ul>
          <li>Cold start mitigation strategies</li>
          <li>Memory allocation optimization</li>
          <li>Connection pooling for databases</li>
          <li>Efficient error handling</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "React Performance: Beyond the Basics",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      excerpt:
        "Advanced techniques for optimizing React applications including profiling, memoization, and bundle optimization.",
      category: "Frontend",
      readTime: "10 min read",
      date: "2024-01-05",
      content: `
        <h2>Advanced React Performance Optimization</h2>
        <p>Building fast React applications requires understanding both React's rendering behavior and modern JavaScript performance characteristics.</p>
        <ul>
          <li>Component render times</li>
          <li>Re-render causes</li>
          <li>Props and state changes</li>
          <li>Interaction tracking</li>
        </ul>
      `,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 md:py-10 px-6 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black" />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Where Education Stops,{" "}
                <span className="text-white block">We Begin</span>
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Turning academic knowledge into real-world skills that employers
              value.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="text-muted-foreground mb-12 leading-relaxed space-y-3"
            >
              <motion.p variants={itemVariants} className="text-lg">
                <span className="font-semibold text-white">
                  Graduates Struggling
                </span>{" "}
                — Degrees ≠ Jobs anymore.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg">
                <span className="font-semibold text-white">
                  Outdated Skills
                </span>{" "}
                — Curricula can’t keep up with industry.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg">
                <span className="font-semibold text-white">Low Confidence</span>{" "}
                — Interviews expose practical gaps.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg">
                <span className="font-semibold text-white">
                  Parents Worried
                </span>{" "}
                — Education’s promise feels uncertain.
              </motion.p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="hero" size="xl">
                Our Story
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                className="rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300 border border-transparent hover:border-white/20 hover:bg-black/20"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-primary p-4 group-hover:shadow-glow transition-all duration-300">
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <div className="mb-2">
                  <motion.span
                    className="text-3xl md:text-4xl font-bold text-white block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.span>
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tagline Section */}
        <motion.div variants={itemVariants} className="mt-24 mb-24">
          <div className="relative h-[50vh] flex items-center">
            <div className="relative z-10">
              <motion.h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wide">
                Transforming Learning into Launchpads.
              </motion.h3>
              <motion.p className="text-xl md:text-3xl text-white/85 font-light mt-6 leading-relaxed tracking-wide">
                From classrooms to cloud careers — we build what the future
                hires.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Technical Expertise Section */}
        <TechnicalExpertiseSection
          techRef={techRef}
          techInView={techInView}
          technicalExpertise={technicalExpertise}
        />

        {/* Case Studies Section (unchanged) */}
        <motion.section
          ref={caseStudyRef}
          className="relative mt-32 overflow-hidden"
        >
          {/* Floating Icons */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute opacity-10"
              style={{ left: "60%", top: "20%" }}
              animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={32} className="text-primary/40" />
            </motion.div>
            <motion.div
              className="absolute opacity-10"
              style={{ left: "30%", top: "60%" }}
              animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Cpu size={32} className="text-primary/40" />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Real-world success stories showcasing how we've transformed
              businesses through innovative technology solutions.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 place-items-center">
            {[
              {
                title: "FinTech SaaS Platform",
                category: "Financial Technology",
                description:
                  "Built a comprehensive financial management platform serving 10,000+ users.",
                metrics: ["300% ROI", "50K+ Users", "99.9% Uptime"],
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "Healthcare Management System",
                category: "Healthcare Tech",
                description:
                  "Developed an integrated patient management system for 50+ facilities.",
                metrics: ["40% Efficiency", "100K+ Patients", "HIPAA Compliant"],
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "E-commerce Marketplace",
                category: "Retail Technology",
                description:
                  "Created a multi-vendor platform handling millions in transactions.",
                metrics: ["$5M+ Revenue", "1000+ Vendors", "24/7 Support"],
                color: "from-pink-500 to-cyan-500",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="w-80 md:w-[24rem] lg:w-[26rem] group rounded-xl p-8 border border-white/20 hover:border-white/30 hover:bg-black/10 backdrop-blur-sm transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${study.color} p-4 mb-6 group-hover:shadow-glow`}
                >
                  <div className="w-full h-full bg-white/20 rounded-sm" />
                </div>
                <span className="text-sm text-primary font-medium">
                  {study.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </h4>
                <p className="text-white/70 text-base mb-6 leading-relaxed">
                  {study.description}
                </p>
                <div className="space-y-2">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-white/80">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                      <span className="text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ✅ Replaced the entire long blog section with this */}
        <TechnicalBlogsSection technicalBlogs={technicalBlogs} />
      </motion.div>
    </section>
  );
};

export default About;
