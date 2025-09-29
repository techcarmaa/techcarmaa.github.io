import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import anirudhImage from "@/assets/team/anirudh-dhobal.jpg";
import sandeepImage from "@/assets/team/sandeep-singh.jpg";
import ankitImage from "@/assets/team/ankit-kumar-patel.jpg";

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "Anirudh Dhobal",
      role: "Chief Technology Officer",
      image: anirudhImage,
      expertise: "SaaS Architecture & Custom Development",
      experience: "15+ years",
      description: "Leading end-to-end software solutions with expertise in scalable SaaS platforms and enterprise application development.",
      email: "anirudh@carmaatech.com",
      linkedin: "#"
    },
    {
      name: "Sandeep Singh",
      role: "AWS Infrastructure Specialist",
      image: sandeepImage,
      expertise: "Cloud Infrastructure & DevOps",
      experience: "12+ years",
      description: "Expert in AWS infrastructure management, cloud optimization, and enterprise-grade deployment solutions.",
      email: "sandeep@carmaatech.com",
      linkedin: "#"
    },
    {
      name: "Ankit Kumar Patel",
      role: "Lead Full-Stack Developer",
      image: ankitImage,
      expertise: "Enterprise Web & Mobile Development",
      experience: "10+ years",
      description: "Specializes in full-stack development, API integrations, and building scalable web and mobile applications.",
      email: "ankit@carmaatech.com",
      linkedin: "#"
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
      
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
            <span className="text-white">Meet Our Expert Team</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Experienced IT professionals driving innovation in software development, cloud infrastructure, and digital transformation solutions.
          </motion.p>
        </div>

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
          <span className="text-white/60 text-sm">Meet our experts</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollRight}
            className="text-white hover:bg-white/10 border border-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Team Cards */}
        <motion.div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex-shrink-0 w-[450px]"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-xl overflow-hidden h-[500px] relative cursor-pointer">
                {/* Profile Image */}
                <div className="relative h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Basic Info - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-white/80 text-sm">{member.role}</p>
                </div>

                {/* Detailed Info - Visible on Hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-black/90 to-black/70">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                    
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
                <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-white/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamSection;