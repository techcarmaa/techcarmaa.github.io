import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Award, Users, Lightbulb, Globe } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "50+", label: "Expert Engineers", icon: Users },
    { number: "15+", label: "Years Experience", icon: Lightbulb },
    { number: "25+", label: "Countries Served", icon: Globe },
  ];

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
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />
      
      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Full-Scale 
                <span className="gradient-text block">Technology Powerhouse</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Carmaatech is not limited to any single industry—we're a hardcore IT company 
              providing end-to-end software and infrastructure solutions that enable businesses 
              to scale with innovative technology across all sectors.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-12 leading-relaxed"
            >
              From custom applications to enterprise SaaS platforms, AWS infrastructure management 
              to complete digital transformation—we build, manage, and scale your digital world 
              with cutting-edge solutions that drive real business results.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button variant="hero" size="xl">
                Our Story
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                className="glass rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-primary p-4 group-hover:shadow-glow transition-all duration-300">
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <motion.span
                    className="text-3xl md:text-4xl font-bold gradient-text block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.span>
                </div>
                
                <p className="text-white/80 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">Our Mission</span>
            </h3>
            <p className="text-xl text-white/90 leading-relaxed">
              "To empower businesses across industries with hardcore IT solutions, scalable SaaS platforms, 
              and robust infrastructure that transforms digital capabilities and accelerates growth. 
              We're your technology growth partner—from code to cloud."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;