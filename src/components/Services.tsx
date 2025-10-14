import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cloud,
  Layers,
  Rocket,
  Cpu,
  Settings,
} from "lucide-react";

const Services = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let loopWidth = el.scrollWidth / 2;

    // Adjust width on resize
    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(() => {
        loopWidth = el.scrollWidth / 2;
      });
      ro.observe(el);
    }

    let rafId = 0;
    let lastTs = performance.now();
    const speedPxPerSec = 120; // adjust this for scroll speed (100–160 recommended)

    const tick = (ts: number) => {
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      if (!isHovered) {
        el.scrollLeft += speedPxPerSec * dt;

        if (loopWidth > 0) {
          const cur = el.scrollLeft;
          if (cur >= loopWidth) {
            el.scrollLeft = cur - loopWidth;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
    };
  }, [isHovered]);

  const solutions = [
    {
      icon: Brain,
      title: "Foundation & Core Programming",
      description:
        "Strengthen your technical base with problem-solving and coding fundamentals.",
      details:
        "C • C++ • Data Structures • Algorithms • Git Basics • Debugging Techniques",
      category: "Programming",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Essentials",
      description:
        "Master the tools and workflows used in modern cloud-based development environments.",
      details:
        "Git • Jenkins • Docker • CI/CD Pipelines • AWS Cloud • Automation Scripts",
      category: "DevOps",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Full-Stack Web Development",
      description:
        "Build and deploy real-world web applications with industry-grade technologies.",
      details:
        "HTML • CSS • JavaScript • React.js • Node.js • Express.js • MongoDB",
      category: "Web Development",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: Rocket,
      title: "Career Readiness & Placement",
      description:
        "Develop confidence and soft skills to ace interviews and excel in professional environments.",
      details:
        "Interview Preparation • Resume Building • Communication Skills • Mock Interviews",
      category: "Professional Growth",
      color: "from-emerald-500 to-blue-500",
    },
    {
      icon: Cpu,
      title: "AWS Cloud & Infrastructure Mastery",
      description:
        "Design, deploy, and manage scalable cloud infrastructure using AWS best practices.",
      details:
        "EC2 • S3 • Lambda • CloudFormation • Cost Optimization • Monitoring",
      category: "Cloud",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Settings,
      title: "Kubernetes & Container Orchestration",
      description:
        "Gain hands-on expertise in containerized deployments and microservice scaling.",
      details:
        "Kubernetes • Docker Swarm • Helm • Load Balancing • Service Mesh • CI/CD Integration",
      category: "DevOps",
      color: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full w-20" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Industry-Ready Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical, hands-on learning designed to make you workplace-ready
            from day one.
          </p>
        </div>

        {/* Smooth Infinite Scroll Cards */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...solutions, ...solutions].map((solution, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-96 snap-center
                         bg-transparent rounded-2xl border border-white/5 
                         transition-all duration-300 hover:border-primary/50 
                         hover:bg-white/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="p-8 h-full relative cursor-pointer">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.color} p-4`}
                  >
                    <solution.icon className="w-full h-full text-white" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {solution.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {solution.title}
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/70 mb-4">
                    {solution.details}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 p-0 h-auto font-semibold hover:text-primary"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="group">
            Explore Our Courses
            <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
