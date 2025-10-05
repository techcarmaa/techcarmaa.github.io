import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook,Instagram  } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@carmaatech.com",
      href: "mailto:hello@carmaatech.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Dehradun, India",
      href: "#",
    },
  ];

 const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/yourcompany", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/carmaa_official?igsh=MzJ6dXV2MXUxemZh", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/yourpage", label: "Facebook" },
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
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 px-4 relative overflow-hidden bg-black">
  {/* Background */}
  <div className="absolute inset-0 bg-black" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          } : { opacity: 0, y: 50 }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { 
              width: "80px",
              transition: { delay: 0.2, duration: 0.5 }
            } : { width: 0 }}
            className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"
          />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your vision into reality? Get in touch with our team 
            and let's discuss how we can accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { 
              opacity: 1, 
              x: 0,
              transition: { delay: 0.3, duration: 0.5 }
            } : { opacity: 0, x: -30 }}
          >
            <h3 className="text-3xl font-bold mb-12 text-white">
              Get In Touch
            </h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-6 group p-6 rounded-xl transition-all duration-300 hover:bg-white/10"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white/80">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-primary p-3 hover:scale-110 hover:shadow-glow transition-all duration-300"
                    whileHover={{ y: -5 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-full h-full text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { 
              opacity: 1, 
              x: 0,
              transition: { delay: 0.4, duration: 0.5 }
            } : { opacity: 0, x: 30 }}
          >
            <motion.div 
              className="rounded-2xl p-8 border border-transparent hover:border-white/10 transition-all duration-300 hover:bg-black/20"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">
                Start Your Project
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                    <option value="">Select a service</option>
                    <option value="automotive">Automotive AI</option>
                    <option value="analytics">Smart Analytics</option>
                    <option value="security">Cybersecurity</option>
                    <option value="innovation">Innovation Labs</option>
                    <option value="mobile">Mobile Solutions</option>
                    <option value="edge">Edge Computing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button variant="hero" size="xl" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
