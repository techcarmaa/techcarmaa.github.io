import { motion } from "framer-motion";  
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Web Development", href: "#web-dev" },
      { name: "Mobile Apps", href: "#mobile" },
      { name: "UI/UX Design", href: "#design" },
      { name: "Digital Strategy", href: "#strategy" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#cases" },
      { name: "Free Resources", href: "#resources" },
      { name: "Support Center", href: "#support" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/yourpage", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/yourcompany", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/carmaa_official?igsh=MzJ6dXV2MXUxemZh", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          {/* Company Info (Full Width) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, x: -50 },
              visible: { 
                opacity: 1, 
                y: 0, 
                x: 0,
                transition: { delay: 0.2, duration: 0.6 }
              }
            }} 
            className="mb-12"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Carmaatech
            </motion.h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Hardcore IT company providing end-to-end software and infrastructure solutions. 
              From code to cloud—we build, manage & scale your digital world across all industries.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">techcarmaa@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+91 8979620136</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Dehradun, India </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-white/60 hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links (Side by Side) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/50 text-sm">
            © 2024 Carmaa Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Part of Carmaa Technologies - Future-ready tech + premium service
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
