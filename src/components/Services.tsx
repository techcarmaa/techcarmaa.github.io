import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Car, Brain, Shield, Rocket, Smartphone, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with machine learning.",
      details: "Advanced ML algorithms • Real-time processing • Predictive modeling • Custom dashboards",
      category: "Analytics",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive cybersecurity solutions for enterprise protection.",
      details: "Zero-trust architecture • 24/7 monitoring • Threat intelligence • Compliance ready",
      category: "Security",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions optimized for enterprise workloads.",
      details: "Multi-cloud support • Auto-scaling • High availability • Cost optimization",
      category: "Cloud",
      color: "from-pink-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      description: "Modernize legacy systems with cutting-edge technology.",
      details: "API modernization • Microservices • DevOps integration • Change management",
      category: "Transformation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Car,
      title: "IoT Solutions",
      description: "Connect and manage enterprise IoT devices at scale.",
      details: "Device management • Edge computing • Data collection • Remote monitoring",
      category: "IoT",
      color: "from-cyan-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation platforms.",
      details: "RPA implementation • Workflow optimization • Integration services • ROI tracking",
      category: "Automation",
      color: "from-purple-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    // Updated Services component with courses data
    <section className="py-24 px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      
      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Enterprise-Grade IT Solutions</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to transform and scale your enterprise operations.
          </motion.p>
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
          <span className="text-white/60 text-sm">Scroll to explore solutions</span>
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
        <motion.div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          variants={containerVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex-shrink-0 w-80"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-xl p-8 h-full relative overflow-hidden cursor-pointer">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Solution Content */}
                <div className="relative z-10">
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

                  {/* Solution Details - Shown on Hover */}
                  <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm text-white/70 mb-4">
                        {solution.details}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="text-white hover:bg-white/10 p-0 h-auto font-semibold group-hover:text-primary transition-colors"
                      >
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-white/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={cardVariants}
          className="text-center mt-20"
        >
          <Button variant="hero" size="xl" className="group">
            Explore All Solutions
            <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;