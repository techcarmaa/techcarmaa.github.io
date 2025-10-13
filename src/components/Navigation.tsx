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

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when form/dialog is open
  useEffect(() => {
    if (showForm || dialog.open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showForm, dialog.open]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
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
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Form Dialog */}
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
              className="relative w-[95%] max-w-2xl bg-[#181818] border border-gray-700 rounded-xl shadow-lg p-8 sm:p-10 text-white"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <X size={22} />
              </button>

              <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
                Get Started
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300 font-semibold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                      className="bg-[#222] border border-gray-700 text-white rounded-lg p-4 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300 font-semibold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                      className="bg-[#222] border border-gray-700 text-white rounded-lg p-4 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 font-semibold mb-2">
                    Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    placeholder="example@domain.com"
                    className="bg-[#222] border border-gray-700 text-white rounded-lg p-4 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="bg-[#222] border border-gray-700 text-white rounded-lg p-4 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 font-semibold mb-2">
                    Your Question
                  </label>
                  <textarea
                    name="question"
                    onChange={handleChange}
                    required
                    placeholder="Type your question here..."
                    className="bg-[#222] border border-gray-700 text-white rounded-lg p-4 h-32 resize-none focus:border-blue-500 outline-none transition"
                  ></textarea>
                </div>

                <div className="flex justify-center mt-4 mb-4">
                  <ReCAPTCHA
                    sitekey="6Ld8h-crAAAAAAG5_b_Pbin54QYl_6GJr40MNq2Z"
                    onChange={(token) => setCaptchaToken(token || "")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!captchaToken}
                  className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                >
                  Submit
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result Dialog */}
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
              className="bg-[#181818] border border-gray-700 rounded-xl p-8 max-w-md w-[90%] text-center shadow-xl"
            >
              {dialog.success ? (
                <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
              ) : (
                <AlertTriangle className="text-yellow-400 w-12 h-12 mx-auto mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {dialog.success ? "Success" : "Notice"}
              </h3>
              <p className="text-gray-300 mb-6">{dialog.message}</p>
              <Button
                className={`w-full ${
                  dialog.success
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-yellow-500 hover:bg-yellow-600"
                } text-white font-semibold`}
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
