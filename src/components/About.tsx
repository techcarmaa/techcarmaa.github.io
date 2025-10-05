import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Award, Users, Lightbulb, Globe, Code, Cloud, Database, Smartphone, Server, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Separate ref for technical expertise section
  const [techRef, techInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

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

  const technicalBlogs = [
    {
      id: 1,
      title: "Scaling Microservices with Kubernetes",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
      excerpt: "Deep dive into container orchestration and service mesh patterns for enterprise applications.",
      category: "DevOps",
      readTime: "8 min read",
      date: "2024-01-15",
      content: `
        <h2>Introduction to Microservices Architecture</h2>
        <p>Microservices architecture has revolutionized how we build and deploy modern applications. In this comprehensive guide, we'll explore how Kubernetes enables us to scale microservices effectively.</p>
        
        <h3>Key Benefits of Kubernetes for Microservices</h3>
        <ul>
          <li>Automated deployment and scaling</li>
          <li>Service discovery and load balancing</li>
          <li>Rolling updates and rollbacks</li>
          <li>Health monitoring and self-healing</li>
        </ul>
        
        <h3>Implementation Strategy</h3>
        <p>When implementing microservices with Kubernetes, it's crucial to follow these best practices:</p>
        <p>1. <strong>Container Optimization:</strong> Ensure your containers are lightweight and follow the single responsibility principle.</p>
        <p>2. <strong>Resource Management:</strong> Define appropriate resource limits and requests for each service.</p>
        <p>3. <strong>Monitoring:</strong> Implement comprehensive logging and monitoring across all services.</p>
        
        <h3>Conclusion</h3>
        <p>Kubernetes provides a robust platform for scaling microservices, but success requires careful planning and adherence to best practices.</p>
      `
    },
    {
      id: 2,
      title: "AWS Lambda Best Practices for Serverless",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      excerpt: "Optimize your serverless functions for performance, cost, and reliability in production environments.",
      category: "AWS",
      readTime: "12 min read",
      date: "2024-01-10",
      content: `
        <h2>Serverless Architecture with AWS Lambda</h2>
        <p>AWS Lambda has transformed how we think about backend infrastructure. This article covers essential best practices for production-ready serverless applications.</p>
        
        <h3>Performance Optimization</h3>
        <p>To get the most out of your Lambda functions, consider these optimization techniques:</p>
        <ul>
          <li>Cold start mitigation strategies</li>
          <li>Memory allocation optimization</li>
          <li>Connection pooling for databases</li>
          <li>Efficient error handling</li>
        </ul>
        
        <h3>Cost Management</h3>
        <p>Serverless doesn't mean cost-free. Here are strategies to optimize your AWS bills:</p>
        <p>1. <strong>Right-size your functions:</strong> Monitor memory usage and adjust allocations accordingly.</p>
        <p>2. <strong>Use provisioned concurrency wisely:</strong> Only for functions that need consistent low latency.</p>
        <p>3. <strong>Implement efficient retry logic:</strong> Avoid unnecessary invocations due to transient failures.</p>
        
        <h3>Security Considerations</h3>
        <p>Security in serverless requires a different approach than traditional applications. Key areas to focus on include IAM roles, VPC configuration, and environment variable encryption.</p>
      `
    },
    {
      id: 3,
      title: "React Performance: Beyond the Basics",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      excerpt: "Advanced techniques for optimizing React applications including profiling, memoization, and bundle optimization.",
      category: "Frontend",
      readTime: "10 min read",
      date: "2024-01-05",
      content: `
        <h2>Advanced React Performance Optimization</h2>
        <p>Building fast React applications requires understanding both React's rendering behavior and modern JavaScript performance characteristics.</p>
        
        <h3>Profiling and Measurement</h3>
        <p>Before optimizing, you need to measure. React Developer Tools provides powerful profiling capabilities:</p>
        <ul>
          <li>Component render times</li>
          <li>Re-render causes</li>
          <li>Props and state changes</li>
          <li>Interaction tracking</li>
        </ul>
        
        <h3>Memoization Strategies</h3>
        <p>React.memo, useMemo, and useCallback are powerful tools when used correctly:</p>
        <p>1. <strong>React.memo:</strong> Prevent unnecessary re-renders of functional components.</p>
        <p>2. <strong>useMemo:</strong> Cache expensive calculations between renders.</p>
        <p>3. <strong>useCallback:</strong> Stabilize function references to prevent child re-renders.</p>
        
        <h3>Bundle Optimization</h3>
        <p>Modern bundlers offer sophisticated optimization techniques including code splitting, tree shaking, and dynamic imports. Learn how to leverage these tools effectively.</p>
        
        <h3>Real-world Case Study</h3>
        <p>We optimized a data-heavy dashboard application and achieved 70% faster initial load times and 40% better runtime performance through systematic application of these techniques.</p>
      `
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
    <section className="py-10 md:py-10 px-6 relative overflow-hidden bg-black">
  {/* Background */}
  <div className="absolute inset-0 bg-black" />

      
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
                className="rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300 border border-transparent hover:border-white/20 hover:bg-black/20"
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
  ref={techRef}
  variants={itemVariants}
  className="mt-32"
>
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={techInView ? { opacity: 1, y: 0, transition: { duration: 0.5 } } : { opacity: 0, y: 20 }}
  >
    <motion.div
      initial={{ width: 0 }}
      animate={techInView ? { width: "80px", transition: { delay: 0.2, duration: 0.5 } } : { width: 0 }}
      className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"
    />
    
    <motion.h3 
      className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6"
    >
      <span className="text-white">Our Technical Expertise</span>
    </motion.h3>
    
    <motion.p 
      className="text-xl text-muted-foreground max-w-3xl mx-auto"
    >
      Deep technical knowledge across modern technologies and frameworks that power enterprise-grade solutions.
    </motion.p>
  </motion.div>

  {/* Horizontal Scroll Cards */}
  <div 
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-2"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    {technicalExpertise.map((tech, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-72 md:w-[28rem] snap-center rounded-xl p-8 cursor-pointer border border-white/10 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-black/10 transition-all duration-300"

      >
        {/* Icon */}
        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tech.color} p-4 mb-6`}>
          <tech.icon className="w-full h-full text-white" />
        </div>

        {/* Title */}
        <h4 className="text-2xl font-bold text-white mb-4">
          {tech.title}
        </h4>

        {/* Skills list */}
        <ul className="space-y-2">
          {tech.skills.map((skill, skillIndex) => (
            <li key={skillIndex} className="text-white/70 text-base flex items-center">
              <div className="w-1 h-1 bg-primary rounded-full mr-2" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</motion.div>


        {/* Continue with rest of the component... */}
        {/* Case Studies Section */}
        <motion.div
          variants={itemVariants}
          className="mt-10 md:mt-32"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our Case Studies</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world success stories showcasing how we've transformed businesses through innovative technology solutions.
            </p>
          </motion.div>

          <motion.div
  className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory 
             md:flex md:gap-8 md:overflow-x-auto"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  {[
    {
      title: "FinTech SaaS Platform",
      category: "Financial Technology",
      description: "Built a comprehensive financial management platform serving 10,000+ users with real-time analytics and automated reporting.",
      metrics: ["300% ROI", "50K+ Users", "99.9% Uptime"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare Tech",
      description: "Developed an integrated patient management system that streamlined operations for 50+ medical facilities.",
      metrics: ["40% Efficiency", "100K+ Patients", "HIPAA Compliant"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Marketplace",
      category: "Retail Technology",
      description: "Created a multi-vendor marketplace platform handling millions in transactions with advanced inventory management.",
      metrics: ["$5M+ Revenue", "1000+ Vendors", "24/7 Support"],
      color: "from-pink-500 to-cyan-500"
    }
  ].map((study, index) => (
    <div
  key={index}
  className="flex-shrink-0 w-72 md:w-[28rem] snap-center group rounded-xl p-8 
             transition-all duration-300 cursor-pointer border border-white/20 
             hover:border-white/30 hover:bg-black/10"
  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
>

      <motion.div 
        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${study.color} p-4 mb-6 group-hover:shadow-glow transition-all duration-300`}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <div className="w-full h-full bg-white/20 rounded-sm" />
      </motion.div>
      
      <div className="mb-3">
        <span className="text-sm text-primary font-medium">{study.category}</span>
      </div>
      
      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
        {study.title}
      </h4>
      
      <p className="text-white/70 text-base mb-6 leading-relaxed">
        {study.description}
      </p>
      
      <div className="space-y-2">
        {study.metrics.map((metric, metricIndex) => (
          <div 
            key={metricIndex}
            className="flex items-center text-white/80"
          >
            <div className="w-1 h-1 bg-primary rounded-full mr-2" />
            <span className="text-sm">{metric}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</motion.div>
</motion.div>

        {/* Technical Blogs Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 mb-6 md:mb-24"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Technical Blogs</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and deep dives into the latest technologies and development practices from our engineering team.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Hero Blog Card */}
            <div
              className="group rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer border border-transparent hover:border-white/30 hover:bg-black/20 h-[500px]"
              onClick={() => setSelectedBlog(technicalBlogs[0])}
            >
              <div className="grid lg:grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={technicalBlogs[0].image} 
                    alt={technicalBlogs[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:hidden" />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center relative lg:static absolute inset-0 lg:bg-transparent bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                      FEATURED • {technicalBlogs[0].category}
                    </span>
                    <span className="text-sm text-white/60">{technicalBlogs[0].readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {technicalBlogs[0].title}
                  </h3>
                  
                  <p className="text-white/80 text-lg mb-6 leading-relaxed line-clamp-3">
                    {technicalBlogs[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">{technicalBlogs[0].date}</span>
                    <motion.div 
                      className="flex items-center gap-2 text-primary text-lg font-medium group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Read Full Article
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Blogs Grid */}
<motion.div 
  className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }}
>
  {technicalBlogs.slice(1, 3).map((blog, index) => (
    <div
      key={blog.id}
      className="flex-shrink-0 w-[90%] sm:w-[70%] md:w-auto snap-center group rounded-xl overflow-hidden transition-all duration-300 cursor-pointer border border-transparent hover:border-white/30 hover:bg-black/20"
      onClick={() => setSelectedBlog(blog)}
    >

                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <motion.div 
                        className="text-primary text-sm font-medium group-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        Read More →
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Older Blogs Carousel */}
            {technicalBlogs.length > 3 && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.4
                    }
                  }
                }}
                className="mt-16"
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-2xl font-bold text-white">More Articles</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={scrollLeft}
                      className="text-white hover:bg-white/10 border border-white/20"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={scrollRight}
                      className="text-white hover:bg-white/10 border border-white/20"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div 
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {technicalBlogs.slice(3).map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                      className="group flex-shrink-0 w-[320px] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 border border-transparent hover:border-white/30 hover:bg-black/20"
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedBlog(blog)}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h5 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {blog.title}
                          </h5>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <p className="text-white/70 text-sm mb-3 leading-relaxed line-clamp-2">
                          {blog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-white/50">
                            <span>{blog.readTime}</span>
                          </div>
                          <span className="text-xs text-white/40">{blog.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Blog Modal */}
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="bg-background border border-white/10 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  ✕
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {selectedBlog.category}
                    </span>
                    <span className="text-sm text-white/60">{selectedBlog.readTime}</span>
                    <span className="text-sm text-white/60">{selectedBlog.date}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {selectedBlog.title}
                  </h1>
                </div>
              </div>
              
              <div className="p-8">
                <div 
                  className="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h3:text-xl prose-p:text-white/80 prose-li:text-white/80 prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default About;