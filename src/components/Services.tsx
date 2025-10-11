import { Button } from "@/components/ui/button";
import { Car, Brain, Shield, Rocket, Smartphone, Cpu, ChevronLeft, ChevronRight,Cloud,Layers,Settings } from "lucide-react";
import { useRef } from "react";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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
    <section className="py-24 px-6 relative bg-black">
      {/* Background Effects */}
      
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full w-20" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Industry-Ready Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical, hands-on learning designed to make you workplace-ready from day one.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollLeft}
            className="text-white hover:bg-white/10 border border-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="text-white/60 text-sm">Scroll to explore courses</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollRight}
            className="text-white hover:bg-white/10 border border-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Horizontal Scrolling Solutions */}
        <div 
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide px-4 py-8 relative snap-x snap-mandatory"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-96 snap-center
                         bg-transparent rounded-2xl 
                         border border-white/5 
                         transition-all duration-300 
                         hover:border-primary/50 hover:bg-white/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="p-8 h-full relative cursor-pointer">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.color} p-4`}>
                    <solution.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Solution Content */}
                <div className="relative">
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

                  {/* Solution Details */}
                  <div>
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
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5 md:mt-20 ">
          <Button variant="hero" size="xl" className="group">
            Explore Our Courses
            <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
