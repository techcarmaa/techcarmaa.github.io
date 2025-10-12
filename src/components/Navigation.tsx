import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6Ld8h-crAAAAAAG5_b_Pbin54QYl_6GJr40MNq2Z", { action: "submit" })
        .then(async (token) => {
          try {
            const response = await fetch("https://hiaxmcgzo2trvgmpj6sgy53upy0iantl.lambda-url.ap-south-1.on.aws/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...formData, token }),
            });

            const result = await response.json();

            if (result.success) {
              alert("✅ Message sent successfully!");
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                question: "",
              });
              setShowForm(false);
            } else {
              alert("⚠️ Captcha verification failed or server error.");
            }
          } catch (err) {
            console.error("Error submitting form:", err);
            alert("❌ Something went wrong. Please try again.");
          }
        });
    });
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

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
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary p-2">
                <Zap className="w-full h-full text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CarmaaTech</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="hero" size="lg" onClick={() => setShowForm(true)}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] glass border-l border-white/10 z-50 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6 pt-24">
                <motion.div
                  className="space-y-6"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                >
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-xl font-medium text-white hover:text-cyan-400 transition-colors duration-300"
                      variants={itemVariants}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  <motion.div variants={itemVariants} className="pt-6">
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        setShowForm(true);
                        setIsOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-[95%] max-w-2xl bg-gradient-to-br from-[#0b0b0b]/90 via-[#101010]/90 to-[#151515]/90 border border-white/10 rounded-2xl shadow-2xl p-10 text-white"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Get Started
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-white/70 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4 placeholder-gray-400 outline-none transition"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-white/70 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4 placeholder-gray-400 outline-none transition"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-2">Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4 placeholder-gray-400 outline-none transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4 placeholder-gray-400 outline-none transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-2">
                  Your Question
                </label>
                <textarea
                  name="question"
                  placeholder="Type your question here..."
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4 h-32 resize-none placeholder-gray-400 outline-none transition"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-md hover:shadow-blue-500/30 hover:opacity-95 transition"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navigation;
