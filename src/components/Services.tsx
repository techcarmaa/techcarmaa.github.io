import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Car, Brain, Shield, Rocket, Smartphone, Cpu } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const courses = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Master artificial intelligence, deep learning, and neural networks.",
      details: "12 weeks • Expert instructors • Hands-on projects • Career support",
      duration: "12 weeks",
      level: "Advanced",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity Fundamentals",
      description: "Learn to protect digital assets and secure enterprise systems.",
      details: "8 weeks • Industry certifications • Real-world scenarios • 24/7 lab access",
      duration: "8 weeks",
      level: "Intermediate",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Cloud Computing",
      description: "Deploy and manage scalable cloud infrastructure solutions.",
      details: "10 weeks • AWS/Azure certified • Live projects • Job placement assistance",
      duration: "10 weeks",
      level: "Intermediate",
      color: "from-pink-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Full-Stack Development",
      description: "Build modern web applications from frontend to backend.",
      details: "16 weeks • React & Node.js • Portfolio projects • Mentorship included",
      duration: "16 weeks",
      level: "Beginner",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Car,
      title: "IoT & Embedded Systems",
      description: "Design smart devices and connected IoT ecosystems.",
      details: "14 weeks • Hardware labs • Arduino/Raspberry Pi • Industry partnerships",
      duration: "14 weeks",
      level: "Advanced",
      color: "from-cyan-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "DevOps Engineering",
      description: "Streamline development workflows with automation and CI/CD.",
      details: "12 weeks • Docker & Kubernetes • Enterprise tools • Team collaboration",
      duration: "12 weeks",
      level: "Advanced",
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
            Accelerate your career with industry-leading technology courses designed by experts 
            and trusted by Fortune 500 companies.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-xl p-8 h-full relative overflow-hidden cursor-pointer">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${course.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Course Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-xs font-semibold text-white/60">
                      {course.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {course.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details - Shown on Hover */}
                  <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm text-white/70 mb-4">
                        {course.details}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="text-white hover:bg-white/10 p-0 h-auto font-semibold group-hover:text-primary transition-colors"
                      >
                        Enroll Now →
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
            View All Courses
            <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;