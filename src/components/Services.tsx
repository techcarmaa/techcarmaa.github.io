import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Car, Brain, Shield, Rocket, Smartphone, Cpu } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Car,
      title: "Automotive AI",
      description: "Next-generation autonomous driving systems with advanced computer vision and machine learning algorithms.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Brain,
      title: "Smart Analytics",
      description: "Harness the power of big data with real-time analytics and predictive intelligence platforms.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions protecting critical infrastructure and sensitive data.",
      color: "from-cyan-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Innovation Labs",
      description: "Cutting-edge R&D in emerging technologies including IoT, blockchain, and quantum computing.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Revolutionary mobile applications with seamless UX and cross-platform compatibility.",
      color: "from-pink-500 to-blue-500",
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "High-performance edge computing solutions for real-time processing and minimal latency.",
      color: "from-blue-500 to-purple-500",
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
            <span className="gradient-text">Innovative Solutions</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Empowering businesses with transformative technology solutions that drive growth, 
            efficiency, and competitive advantage in the digital age.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-xl p-8 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10 p-0 h-auto font-semibold group-hover:text-cyan-400 transition-colors"
                  >
                    Learn More →
                  </Button>
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
            Start Your Project
            <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;