import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Cpu, Rocket } from "lucide-react";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingIcons = [
    { Icon: Zap, delay: 0, x: 100, y: 50 },
    { Icon: Cpu, delay: 2, x: -80, y: 100 },
    { Icon: Rocket, delay: 4, x: 120, y: -30 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{ left: `${50 + x}px`, top: `${50 + y}%` }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <Icon size={48} className="text-white" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-white mb-4">Future-Ready</span>
            <span className="block gradient-text">Technology</span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transforming industries through cutting-edge automotive technology, 
          AI-powered solutions, and innovative digital experiences that drive tomorrow's world.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button variant="hero" size="xl" className="group">
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="glass" size="xl">
            Watch Demo
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;