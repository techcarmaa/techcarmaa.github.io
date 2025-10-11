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
   <section 
  className="relative min-h-screen flex items-center justify-center overflow-hidden pb-0 md:pb-0 mb-[-100px] sm:mb-[-120px]" 
  style={{ backgroundColor: '#0a0a0a' }}
>


      
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
              Bridging the Gap 
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
              Between Education & Industry
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
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light mt-30"
        >
          Empowering students with real-world, industry-ready skills through practical learning, mentorship, and professional growth opportunities.
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
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
