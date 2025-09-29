import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Award, Users, Lightbulb, Globe, Code, Cloud, Database, Smartphone, Server, Settings, ExternalLink, Calendar, TrendingUp } from "lucide-react";

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

  const caseStudies = [
    {
      title: "Enterprise SaaS Platform",
      client: "Fortune 500 Manufacturing",
      category: "SaaS Development",
      duration: "8 months",
      results: "300% increase in operational efficiency",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
      description: "Built a comprehensive multi-tenant SaaS platform for inventory management and supply chain optimization across 50+ locations.",
      metrics: [
        { label: "Users", value: "10,000+" },
        { label: "Cost Reduction", value: "40%" },
        { label: "Processing Speed", value: "5x faster" }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AWS Infrastructure Migration",
      client: "Healthcare Technology Startup",
      category: "Cloud Infrastructure",
      duration: "4 months",
      results: "99.9% uptime with 60% cost reduction",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      description: "Migrated legacy on-premise infrastructure to AWS with auto-scaling, monitoring, and disaster recovery implementation.",
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Cost Savings", value: "60%" },
        { label: "Deploy Time", value: "90% faster" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Mobile App Suite",
      client: "Retail Chain Network",
      category: "Mobile Development",
      duration: "6 months",
      results: "2M+ downloads with 4.8 star rating",
      technologies: ["React Native", "Firebase", "Stripe", "Analytics"],
      description: "Developed customer-facing mobile app and staff management system with real-time inventory and payment processing.",
      metrics: [
        { label: "Downloads", value: "2M+" },
        { label: "Rating", value: "4.8★" },
        { label: "Revenue Impact", value: "+35%" }
      ],
      color: "from-pink-500 to-cyan-500"
    }
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
              <span className="gradient-text">Our Technical Expertise</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep technical knowledge across modern technologies and frameworks that power enterprise-grade solutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {technicalExpertise.map((tech, index) => {
              // Define scattered starting positions for each card
              const scatteredPositions = [
                { x: -400, y: -200, rotate: -45, scale: 0.3 }, // Top left
                { x: 400, y: -300, rotate: 30, scale: 0.2 },  // Top right
                { x: -500, y: 100, rotate: -60, scale: 0.4 },  // Middle left
                { x: 600, y: 50, rotate: 45, scale: 0.3 },     // Middle right
                { x: -300, y: 400, rotate: -30, scale: 0.2 },  // Bottom left
                { x: 350, y: 350, rotate: 60, scale: 0.4 },    // Bottom right
              ];

              const startPosition = scatteredPositions[index] || { x: 0, y: -100, rotate: 0, scale: 0.5 };

              return (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-8 group hover:scale-105 transition-all duration-300"
                  initial={{
                    x: startPosition.x,
                    y: startPosition.y,
                    rotate: startPosition.rotate,
                    scale: startPosition.scale,
                    opacity: 0,
                  }}
                  animate={inView ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: index * 0.2 + 0.5,
                      duration: 1.2,
                      ease: [0.23, 1, 0.320, 1], // Custom easing for smooth convergence
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    }
                  } : {
                    x: startPosition.x,
                    y: startPosition.y,
                    rotate: startPosition.rotate,
                    scale: startPosition.scale,
                    opacity: 0,
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div 
                    className="mb-6"
                    initial={{ rotate: 180, scale: 0 }}
                    animate={inView ? { 
                      rotate: 0, 
                      scale: 1,
                      transition: {
                        delay: index * 0.2 + 1,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      }
                    } : { rotate: 180, scale: 0 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tech.color} p-4 group-hover:shadow-glow transition-all duration-300`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <tech.icon className="w-full h-full text-white" />
        </motion.div>

        {/* Case Studies Section */}
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
              <span className="gradient-text">Success Stories & Case Studies</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our enterprise-grade solutions. See how we've transformed businesses across industries with our hardcore IT expertise.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    delay: index * 0.3 + 0.5,
                    duration: 0.8,
                    ease: "easeOut"
                  }
                } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              >
                {/* Project Info */}
                <motion.div 
                  className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass rounded-xl p-8">
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0 }}
                      animate={inView ? { 
                        opacity: 1,
                        transition: { delay: index * 0.3 + 0.8, duration: 0.5 }
                      } : { opacity: 0 }}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${study.color}`} />
                      <span className="text-sm text-primary font-medium">{study.category}</span>
                      <div className="flex items-center gap-1 text-sm text-white/60">
                        <Calendar className="w-3 h-3" />
                        {study.duration}
                      </div>
                    </motion.div>

                    <motion.h4 
                      className="text-2xl font-bold text-white mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.3 + 1, duration: 0.6 }
                      } : { opacity: 0, y: 20 }}
                    >
                      {study.title}
                    </motion.h4>

                    <motion.p 
                      className="text-white/80 mb-6"
                      initial={{ opacity: 0 }}
                      animate={inView ? { 
                        opacity: 1,
                        transition: { delay: index * 0.3 + 1.2, duration: 0.6 }
                      } : { opacity: 0 }}
                    >
                      {study.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: index * 0.3 + 1.4
                          }
                        }
                      }}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {study.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { 
                              opacity: 1, 
                              scale: 1,
                              transition: { duration: 0.4 }
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-2 text-white/70"
                      initial={{ opacity: 0 }}
                      animate={inView ? { 
                        opacity: 1,
                        transition: { delay: index * 0.3 + 1.6, duration: 0.6 }
                      } : { opacity: 0 }}
                    >
                      <span className="text-sm">Client:</span>
                      <span className="font-medium">{study.client}</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Metrics Card */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={inView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0,
                    transition: {
                      delay: index * 0.3 + 0.7,
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  } : { opacity: 0, scale: 0.8, rotateY: 45 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="glass rounded-xl p-8 text-center">
                    <motion.div 
                      className="mb-6"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={inView ? { 
                        scale: 1, 
                        rotate: 0,
                        transition: {
                          delay: index * 0.3 + 1,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100
                        }
                      } : { scale: 0, rotate: 180 }}
                    >
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${study.color} p-4 group-hover:shadow-glow transition-all duration-300`}>
                        <TrendingUp className="w-full h-full text-white" />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0 }}
                      animate={inView ? { 
                        opacity: 1,
                        transition: { delay: index * 0.3 + 1.2, duration: 0.6 }
                      } : { opacity: 0 }}
                    >
                      <h5 className="text-lg font-bold text-white mb-2">Key Results</h5>
                      <p className="text-primary font-semibold">{study.results}</p>
                    </motion.div>

                    <motion.div 
                      className="space-y-4"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: index * 0.3 + 1.4
                          }
                        }
                      }}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {study.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metricIndex}
                          className="text-center"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { 
                              opacity: 1, 
                              y: 0,
                              transition: { duration: 0.5 }
                            }
                          }}
                        >
                          <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                          <div className="text-sm text-white/70">{metric.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        delay: index * 0.2 + 1.2,
                        duration: 0.6
                      }
                    } : { opacity: 0, y: 20 }}
                  >
                    {tech.title}
                  </motion.h4>
                  
                  <motion.ul 
                    className="space-y-2"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: index * 0.2 + 1.4
                        }
                      }
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {tech.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex} 
                        className="text-white/70 text-sm flex items-center"
                        variants={{
                          hidden: { opacity: 0, x: -30, scale: 0.8 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            scale: 1,
                            transition: { 
                              duration: 0.5,
                              type: "spring",
                              stiffness: 100
                            }
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
                          initial={{ scale: 0 }}
                          animate={inView ? { 
                            scale: 1,
                            transition: {
                              delay: index * 0.2 + 1.5 + skillIndex * 0.1,
                              duration: 0.3,
                              type: "spring",
                              stiffness: 200
                            }
                          } : { scale: 0 }}
                          whileHover={{ scale: 1.5 }}
                        />
                        {skill}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

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