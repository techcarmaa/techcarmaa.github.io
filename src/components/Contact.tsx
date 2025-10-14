import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [dialog, setDialog] = useState({ open: false, success: true, message: "" });

  useEffect(() => {
    if (dialog.open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [dialog.open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setDialog({
        open: true,
        success: false,
        message: "⚠️ Please complete the CAPTCHA before submitting.",
      });
      return;
    }

    try {
      const response = await fetch(
        "https://hiaxmcgzo2trvgmpj6sgy53upy0iantl.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token: captchaToken }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setDialog({
          open: true,
          success: true,
          message: "✅ Message sent successfully!",
        });
        setCaptchaToken("");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          question: "",
        });
      } else {
        setDialog({
          open: true,
          success: false,
          message: "❌ Verification failed or server error.",
        });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setDialog({
        open: true,
        success: false,
        message: "⚠️ Something went wrong. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "techcarmaa@gmail.com",
      href: "mailto:techcarmaa@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 8979620136",
      href: "tel:8979620136",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value:
        "Tea Estate, near Bhadri guest house, Banjarawala, Dehradun, Uttarakhand 248121",
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
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  return (
    <section className="py-10 px-4 relative overflow-hidden bg-black">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
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
        {/* Header */}
        <motion.div className="text-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={
              inView
                ? { width: "80px", transition: { delay: 0.2, duration: 0.5 } }
                : { width: 0 }
            }
            className="h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"
          />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your vision into reality? Get in touch with our team and
            let's discuss how we can accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          >
            <h3 className="text-3xl font-bold mb-12 text-white">Get In Touch</h3>
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-6 group p-6 rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-white/80">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-primary p-3 hover:scale-110 hover:shadow-glow transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-full h-full text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          >
            <motion.div className="rounded-2xl p-8 border border-transparent hover:border-white/10 hover:bg-black/20 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8 text-white">Start Your Project</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <textarea
                  name="question"
                  rows={4}
                  value={formData.question}
                  onChange={handleChange}
                  required
                  placeholder="Your Query"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />

                <div className="flex justify-center mt-4">
                  <ReCAPTCHA
                    sitekey="6Ld8h-crAAAAAAG5_b_Pbin54QYl_6GJr40MNq2Z"
                    onChange={(token) => setCaptchaToken(token || "")}
                    theme="dark"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!captchaToken}
                  variant="hero"
                  size="xl"
                  className="w-full group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Result Dialog */}
      {dialog.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm">
            {dialog.success ? (
              <CheckCircle className="text-green-500 w-10 h-10 mx-auto mb-3" />
            ) : (
              <AlertTriangle className="text-yellow-400 w-10 h-10 mx-auto mb-3" />
            )}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {dialog.success ? "Success" : "Notice"}
            </h2>
            <p className="text-gray-600 mb-6">{dialog.message}</p>
            <Button
              onClick={() => setDialog({ ...dialog, open: false })}
              className={`${
                dialog.success
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } text-white px-6 w-full`}
            >
              OK
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
