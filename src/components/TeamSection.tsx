import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import anirudhImage from "@/assets/team/Anirudh .png";
import sandeepImage from "@/assets/team/Sandeep.png";
import ankitImage from "@/assets/team/ankit.jpg";

const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: "Anirudh Dobhal",
    image: anirudhImage,
    expertise: "Cloud Architecture & AI-driven Systems",
    experience: "13+ years",
    description:
      "Leading Carmaa’s tech vision with expertise in cloud-native architectures, AI/ML integrations, and scalable SaaS platforms. Ex–McKinsey, Samsung, and Clearwater Analytics.",
    email: "anirudh@carmaatech.com",
    linkedin: "#",
    },
    {
      name: "Sandeep Singh",
 
  image: sandeepImage,
  expertise: "Operations, Automation & Team Scaling",
  experience: "12+ years",
  description:
    "Driving Carmaa’s operations and growth with a focus on scalable systems, team excellence, and tech-enabled service delivery. Ex-Adobe, Dedalus, and Wipro — expert in QA automation, SaaS workflows, and operational strategy.",
  email: "sandeep@carmaacarcare.com",
  linkedin: "#",
    },
    {
      
  name: "Ankit Patel",
  image: ankitImage,
  expertise: "Web Architecture & Scalable Systems",
  experience: "6+ years",
  description:
    "Architecting scalable web and mobile applications with expertise in Node.js, React, and AWS. Experienced in leading dev teams, automation, and digital product delivery. Ex–Eazy ERP, Brillica Services, and DEZKA.",
  email: "ankit@carmaatech.com",
  linkedin: "https://www.linkedin.com/in/ankit-kumar-patel-1707a8246/",


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
    <section className="py-10 md:py-10 px-6 relative bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto"
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
            <span className="text-white">Meet Our Expert Team</span>
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
            Experienced IT professionals driving innovation in software development, cloud infrastructure, and digital transformation solutions.
          </motion.p>
        </div>

        {/* Enhanced Team Cards */}
        <motion.div
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          initial={{ opacity: 0 }}
          animate={inView ? { 
            opacity: 1,
            transition: { delay: 0.7, duration: 0.6 }
          } : { opacity: 0 }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[75%] md:w-auto group relative snap-center"
            >
              <div className="rounded-xl overflow-hidden h-[500px] relative cursor-pointer">
                {/* Profile Image */}
                <div className="relative h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay - Only visible on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Basic Info - Always Visible with subtle background */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-black/30 group-hover:bg-black/60 transition-all duration-300 rounded-lg p-3 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    
                  </div>
                </div>

                {/* Detailed Info - Visible on Hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-black/90 to-black/70">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-xs text-white/60 uppercase tracking-wide">Expertise</span>
                        <p className="text-sm text-white/90">{member.expertise}</p>
                      </div>
                      
                      <div>
                        <span className="text-xs text-white/60 uppercase tracking-wide">Experience</span>
                        <p className="text-sm text-white/90">{member.experience}</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-white/80 mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    {/* Contact Actions */}
                    <div className="flex justify-center gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/10 p-2"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/10 p-2"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/30 rounded-xl transition-colors duration-300" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
