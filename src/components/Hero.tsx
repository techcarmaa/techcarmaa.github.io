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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background grid-pattern">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
      
      {/* Floating Elements - More Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{ left: `${50 + x}px`, top: `${50 + y}%` }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          >
            <Icon size={32} className="text-primary/40" />
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
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }} 
          className="mb-8"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { 
              width: "80px",
              transition: { delay: 0.3, duration: 0.5 }
            } : { width: 0 }}
            className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"
          />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
            <motion.span 
              className="block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.5 }
              } : { opacity: 0, y: 20 }}
            >
              Hardcore IT.
            </motion.span>
            <motion.span 
              className="block text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 0.5 }
              } : { opacity: 0, y: 20 }}
            >
              Scalable SaaS.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.4, duration: 0.5 }
            }
          }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          From code to cloud—we build, manage & scale your digital world. 
          End-to-end software and infrastructure solutions for businesses across industries.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5, duration: 0.5 }
            }
          }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="default" size="xl" className="bg-primary hover:bg-primary-hover">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" size="xl" className="border-primary/30 text-foreground hover:bg-primary/10">
              View Solutions
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { delay: 1.5, duration: 0.8 }
          } : { opacity: 0, y: 30, scale: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-primary/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xs text-white/50 mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;