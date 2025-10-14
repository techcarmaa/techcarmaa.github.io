import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [dialog, setDialog] = useState({ open: false, success: true, message: "" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showForm || dialog.open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showForm, dialog.open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Smooth scroll helper
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // offset for fixed navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        setShowForm(false);
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

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-white/10" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("home")}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary p-2">
                <Zap className="w-full h-full text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CarmaaTech</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white font-medium transition"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="hidden md:block">
              <Button
                variant="hero"
                size="lg"
                onClick={() => setShowForm(true)}
                className="border border-blue-500/40 hover:border-blue-500/80 text-white shadow-[0_0_10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] transition-all"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* ✅ Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 z-40"
            >
              <div className="flex flex-col items-center gap-6 py-6 text-white">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className="text-lg font-medium hover:text-blue-400 transition"
                  >
                    {item.name}
                  </button>
                ))}

                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    setShowForm(true);
                    setIsOpen(false);
                  }}
                  className="border border-blue-500/40 hover:border-blue-500/80 text-white shadow-[0_0_10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] transition-all"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* --- White Form Dialog with Blue Glow --- */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="dialog"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-[90%] max-w-[540px]
                         bg-white border border-[#3B82F6]/40
                         rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.35)]
                         p-6 sm:p-8 text-[#111111] transition-all duration-300"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
              >
                <X size={20} />
              </button>

              {/* Title */}
              <h2 className="text-3xl font-extrabold mb-8 text-center text-[#4A90E2] tracking-tight">
                Get Started
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    required
                    value={formData.firstName}
                    placeholder="First Name"
                    className="w-full rounded-xl bg-gray-100 border border-gray-300 text-sm text-black px-3 py-2 focus:ring-2 focus:ring-[#3B82F6] outline-none transition"
                  />
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    required
                    value={formData.lastName}
                    placeholder="Last Name"
                    className="w-full rounded-xl bg-gray-100 border border-gray-300 text-sm text-black px-3 py-2 focus:ring-2 focus:ring-[#3B82F6] outline-none transition"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  value={formData.email}
                  placeholder="Email ID"
                  className="w-full rounded-xl bg-gray-100 border border-gray-300 text-sm text-black px-3 py-2 focus:ring-2 focus:ring-[#3B82F6] outline-none transition"
                />

                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  required
                  value={formData.phone}
                  placeholder="Phone Number"
                  className="w-full rounded-xl bg-gray-100 border border-gray-300 text-sm text-black px-3 py-2 focus:ring-2 focus:ring-[#3B82F6] outline-none transition"
                />

                <textarea
                  name="question"
                  onChange={handleChange}
                  required
                  value={formData.question}
                  placeholder="Your Query"
                  className="w-full rounded-xl bg-gray-100 border border-gray-300 text-sm text-black px-3 py-2 h-20 focus:ring-2 focus:ring-[#3B82F6] outline-none resize-none transition"
                />

                <div className="flex justify-center mt-3">
                  <ReCAPTCHA
                    sitekey="6Ld8h-crAAAAAAG5_b_Pbin54QYl_6GJr40MNq2Z"
                    onChange={(token) => setCaptchaToken(token || "")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!captchaToken}
                  className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] hover:from-[#2563EB] hover:to-[#1D4ED8]
                             text-white text-sm py-2.5 rounded-xl mt-3
                             shadow-[0_0_15px_rgba(59,130,246,0.35)]
                             transition-all"
                >
                  Submit
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Result Dialog --- */}
      <AnimatePresence>
        {dialog.open && (
          <motion.div
            key="resultDialog"
            className="fixed inset-0 bg-black/70 z-[70] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#3B82F6]/40 rounded-2xl p-6 max-w-sm w-[90%] text-center shadow-[0_0_25px_rgba(59,130,246,0.35)]"
            >
              {dialog.success ? (
                <CheckCircle className="text-green-500 w-10 h-10 mx-auto mb-3" />
              ) : (
                <AlertTriangle className="text-yellow-400 w-10 h-10 mx-auto mb-3" />
              )}
              <h3 className="text-lg font-semibold mb-3 text-[#111111]">
                {dialog.success ? "Success" : "Notice"}
              </h3>
              <p className="text-gray-600 mb-5 text-sm">{dialog.message}</p>
              <Button
                className={`w-full ${
                  dialog.success
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-yellow-500 hover:bg-yellow-600"
                } text-white text-sm font-semibold py-2.5 rounded-xl`}
                onClick={() => setDialog({ ...dialog, open: false })}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
