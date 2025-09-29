import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Award, Users, Lightbulb, Globe, Code, Cloud, Database, Smartphone, Server, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const About = () => {
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
      skills: ["React, Angular, Vue.js", "Node.js, Python, .NET", "MySQL, PostgreSQL, MongoDB", "RESTful APIs & GraphQL"],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Services",
      skills: ["EC2, Lambda, RDS, S3", "CloudFormation, CDK", "Auto Scaling & Load Balancing", "Cost Optimization"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "SaaS Architecture",
      skills: ["Multi-tenant Design", "Subscription Management", "API Gateway & Microservices", "Enterprise Integrations"],
      color: "from-pink-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native, Flutter", "iOS & Android Native", "Cross-platform Solutions", "App Store Deployment"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure",
      skills: ["Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"],
      color: "from-blue-500 to-green-500",
    },
    {
      icon: Settings,
      title: "Enterprise Integration",
      skills: ["Legacy System Migration", "API Development", "Third-party Integrations", "Data Synchronization"],
      color: "from-green-500 to-purple-500",
    },
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
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />
      
      <motion.div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Full-Scale 
                <span className="text-white block">Technology Powerhouse</span>
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
                    className="text-3xl md:text-4xl font-bold text-white block"
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

        {/* Tagline Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 mb-24"
        >
          <div className="relative h-[50vh] flex items-center">
            {/* Content */}
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed tracking-wide"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Building Tomorrow's
                <br />
                <span className="text-white/90 font-light">Technology Today</span>
              </motion.h3>
            </div>
          </div>
        </motion.div>

        {/* Technical Expertise Section */}
        <motion.div
          variants={itemVariants}
          className="mt-32"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our Technical Expertise</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep technical knowledge across modern technologies and frameworks that power enterprise-grade solutions.
            </p>
          </motion.div>

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
            <span className="text-white/60 text-sm">Explore our expertise</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollRight}
              className="text-white hover:bg-white/10 border border-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <motion.div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 px-2 pt-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {technicalExpertise.map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -15 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: {
                      delay: index * 0.15,
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                className="group flex-shrink-0 w-[420px] h-[320px] rounded-xl p-8 hover:bg-black/20 transition-all duration-300 backdrop-blur-sm cursor-pointer relative hover:shadow-2xl hover:shadow-primary/10"
                whileHover={{ 
                  y: -15,
                  rotateY: 8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Hover border effect with glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                
                {/* Background gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${technicalExpertise[0]?.color || 'from-blue-500 to-purple-500'} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <motion.div 
                  className="mb-6 relative z-10"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${tech.color} p-5 group-hover:shadow-glow group-hover:shadow-lg transition-all duration-300`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tech.icon className="w-full h-full text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.h4 
                  className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech.title}
                </motion.h4>
                
                <motion.ul 
                  className="space-y-3 relative z-10"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: index * 0.15 + 0.4
                      }
                    }
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {tech.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex} 
                      className="text-white/70 text-base flex items-center group-hover:text-white/90 transition-colors duration-300"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { 
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4 }
                        }
                      }}
                      whileHover={{ 
                        x: 5,
                        color: "rgba(255, 255, 255, 0.9)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div 
                        className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-white">Our Mission</span>
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