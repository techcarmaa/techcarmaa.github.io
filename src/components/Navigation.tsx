import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Get token from visible checkbox
    const token = window.grecaptcha.getResponse();

    if (!token) {
      alert("⚠️ Please complete the CAPTCHA before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "https://hiaxmcgzo2trvgmpj6sgy53upy0iantl.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, token }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        window.grecaptcha.reset(); // reset checkbox
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          question: "",
        });
        setShowForm(false);
      } else {
        alert("❌ Verification failed or server error.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
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
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-primary p-2">
                <Zap className="w-full h-full text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CarmaaTech</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button variant="hero" size="lg" onClick={() => setShowForm(true)}>
                Get Started
              </Button>
            </div>

            <motion.button
              className="md:hidden w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-[95%] max-w-2xl bg-gradient-to-br from-[#0b0b0b]/90 via-[#101010]/90 to-[#151515]/90 border border-white/10 rounded-2xl shadow-2xl p-10 text-white"
          >
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white">
              <X size={22} />
            </button>

            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Get Started
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-white/70 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-white/70 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-2">Email ID</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="example@domain.com"
                  className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-2">Your Question</label>
                <textarea
                  name="question"
                  onChange={handleChange}
                  required
                  placeholder="Type your question here..."
                  className="bg-transparent border border-white/20 focus:border-blue-500 text-white rounded-lg p-4 h-32 resize-none"
                ></textarea>
              </div>

              {/* ✅ reCAPTCHA v2 checkbox */}
              <div className="flex justify-center mt-6 mb-4">
                <div className="g-recaptcha" data-sitekey="6Ld8h-crAAAAAAG5_b_Pbin54QYl_6GJr40MNq2Z"></div>
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
