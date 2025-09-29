import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Car, Brain, Shield, Rocket, Smartphone, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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
      title: "Custom App & Web Development",
      description: "Tailored software solutions that scale with your business needs.",
      details: "React, Node.js, Python • Cloud-native architecture • API development • Mobile & web platforms",
      category: "Development",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "SaaS Solutions for Businesses",
      description: "Complete SaaS platforms designed to accelerate your digital transformation.",
      details: "Multi-tenant architecture • Subscription management • Auto-scaling • Enterprise integrations",
      category: "SaaS",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "AWS Infrastructure Management",
      description: "Expert cloud infrastructure setup, optimization, and ongoing management.",
      details: "EC2, RDS, Lambda, S3 • DevOps automation • Cost optimization • 24/7 monitoring",
      category: "Cloud",
      color: "from-pink-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Enterprise IT & Digital Transformation",
      description: "Comprehensive IT modernization and digital transformation services.",
      details: "Legacy system migration • Process automation • Change management • Staff training",
      category: "Enterprise",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Car,
      title: "API Integration & Microservices",
      description: "Seamless integration solutions connecting your business ecosystem.",
      details: "REST & GraphQL APIs • Microservices architecture • Third-party integrations • Data synchronization",
      category: "Integration",
      color: "from-cyan-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "DevOps & Continuous Deployment",
      description: "Streamlined development workflows and automated deployment pipelines.",
      details: "CI/CD pipelines • Docker & Kubernetes • Infrastructure as Code • Performance monitoring",
      category: "DevOps",
      color: "from-purple-500 to-blue-500",
    },
  ];

  // Backward-compat alias to prevent stale builds referencing `courses`
  const courses = solutions;

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
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { 
              width: "80px",
              transition: { delay: 0.2, duration: 0.5 }
            } : { width: 0 }}
            className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.2, duration: 0.5 }
            } : { opacity: 0, y: 20 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">IT & SaaS Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.3, duration: 0.5 }
            } : { opacity: 0, y: 15 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Your technology growth partner—apps, web, SaaS & infrastructure. Hardcore IT company powering digital transformation from startups to enterprises.
          </motion.p>
        </div>

        {/* Navigation Controls */}
        <motion.div 
          className="flex justify-center items-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { 
            opacity: 1, 
            scale: 1,
            transition: { delay: 0.7, duration: 0.5 }
          } : { opacity: 0, scale: 0.8 }}
        >
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
        </motion.div>

        {/* Enhanced Horizontal Scrolling Solutions */}
        <motion.div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-8 relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          initial={{ opacity: 0 }}
          animate={inView ? { 
            opacity: 1,
            transition: { delay: 0.9, duration: 0.6 }
          } : { opacity: 0 }}
        >
          {/* Background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl"
            initial={{ scaleX: 0 }}
            animate={inView ? { 
              scaleX: 1,
              transition: { delay: 1, duration: 1.2 }
            } : { scaleX: 0 }}
          />
          
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-96"
              >
                <div className="p-8 h-full relative cursor-pointer">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.color} p-4`}>
                      <div>
                        <solution.icon className="w-full h-full text-white" />
                      </div>
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
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 0.5 }
            } : { opacity: 0, y: 20 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
            <Button variant="hero" size="xl" className="group">
              Explore Our Solutions
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;