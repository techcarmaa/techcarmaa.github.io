"use client";

import { useState, useEffect, useRef } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

interface EnrollmentPopupProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  hideTrigger?: boolean;
}

export default function EnrollmentPopup({ open, onOpen, onClose, hideTrigger }: EnrollmentPopupProps = {}) {
  const [isOpen, setIsOpen] = useState(open ?? false);
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const openPopup = () => {
    if (isOpen) return;
    onOpen?.();
    if (open === undefined) {
      setIsOpen(true);
    }
  };

  const closePopup = () => {
    if (submitState === "loading") return;
    onClose?.();
    if (open === undefined) {
      setIsOpen(false);
    }
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "" });
      setErrors({});
      setTouched({});
      setSubmitState("idle");
    }, 400);
  };

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2)
      errs.name = "Please enter your full name (min 2 characters)";

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = data.phone.replace(/\s+/g, "");
    if (!cleanPhone) errs.phone = "Phone number is required";
    else if (!phoneRegex.test(cleanPhone))
      errs.phone = "Enter a valid 10-digit Indian mobile number";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) errs.email = "Email address is required";
    else if (!emailRegex.test(data.email.trim()))
      errs.email = "Enter a valid email address";

    return errs;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async () => {
    setTouched({ name: true, phone: true, email: true });
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitState("loading");

    try {
      // Using Web3Forms (free, no backend needed) — replace access_key with yours
      // Or swap this fetch for your own API endpoint / EmailJS / Resend
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // 🔑 Replace with your free key from web3forms.com
          subject: "New Enrollment Enquiry — Carmaa Tech",
          from_name: formData.name,
          email: "support@carmaacarcare.com",
          replyto: formData.email,
          message: `
New enrollment enquiry received:

Name:   ${formData.name}
Phone:  ${formData.phone}
Email:  ${formData.email}

Course: Professional Auto Detailing — ₹35,000
          `.trim(),
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSubmitState("success");
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  const handleClose = () => {
    closePopup();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closePopup();
  };

  return (
    <>
      {!hideTrigger && (
        <button
          onClick={openPopup}
          className="block w-full mt-6 py-4 border-none rounded-[9px] font-bold text-base cursor-pointer text-center text-white transition-all duration-300"
          style={{
            background: "hsl(217, 70%, 55%)",
            fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "hsl(217, 80%, 68%)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 36px rgba(74,144,255,0.5)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "hsl(217, 70%, 55%)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          Enroll Now — ₹35,000
        </button>
      )}

      {/* ─── Overlay ─── */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          background: "rgba(4, 5, 10, 0.82)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-modal="true"
        role="dialog"
        aria-label="Enrollment Form"
      >
        {/* ─── Modal Panel ─── */}
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            background: "linear-gradient(145deg, #0c0f1a 0%, #0f1220 100%)",
            border: "1px solid #1f2840",
            borderRadius: "20px",
            boxShadow: "0 0 0 1px rgba(74,144,255,0.08), 0 32px 64px rgba(0,0,0,0.6), 0 0 80px rgba(74,144,255,0.06)",
            transform: isOpen ? "scale(1) translateY(0)" : "scale(0.94) translateY(24px)",
            opacity: isOpen ? 1 : 0,
            transition: "transform 0.38s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top glow bar */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "linear-gradient(90deg, hsl(217,70%,55%) 0%, hsl(180,60%,50%) 100%)",
          }} />

          {/* Header */}
          <div style={{ padding: "2rem 2rem 1.25rem", borderBottom: "1px solid #1f2840" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{
                  color: "hsl(217,70%,65%)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                  fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
                }}>
                  Carmaac Carcare Academy
                </p>
                <h2 style={{
                  color: "#eef0f6",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                }}>
                  Reserve Your Seat
                </h2>
                <p style={{
                  color: "#7a8ba8",
                  fontSize: "0.82rem",
                  marginTop: "0.35rem",
                  fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                }}>
                  Professional Auto Detailing — <span style={{ color: "hsl(217,70%,65%)", fontWeight: 600 }}>₹35,000</span>
                </p>
              </div>
              <button
                onClick={handleClose}
                disabled={submitState === "loading"}
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "8px",
                  border: "1px solid #1f2840",
                  background: "rgba(255,255,255,0.04)",
                  color: "#7a8ba8",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#eef0f6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#7a8ba8";
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.75rem 2rem 2rem" }}>
            {submitState === "success" ? (
              // ─── Success State ───
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div style={{
                  width: "4rem", height: "4rem",
                  borderRadius: "50%",
                  background: "rgba(40,200,100,0.12)",
                  border: "1px solid rgba(40,200,100,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  fontSize: "1.75rem",
                }}>
                  ✓
                </div>
                <h3 style={{
                  color: "#eef0f6", fontSize: "1.15rem", fontWeight: 700,
                  marginBottom: "0.5rem",
                  fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                }}>
                  You're on the list!
                </h3>
                <p style={{
                  color: "#7a8ba8", fontSize: "0.87rem", lineHeight: 1.6,
                  fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                }}>
                  Our team will reach out to you at <span style={{ color: "hsl(217,70%,65%)" }}>{formData.email}</span> within 24 hours to confirm your enrollment.
                </p>
                <button
                  onClick={handleClose}
                  style={{
                    marginTop: "1.75rem",
                    padding: "0.65rem 1.75rem",
                    background: "rgba(74,144,255,0.12)",
                    border: "1px solid rgba(74,144,255,0.25)",
                    borderRadius: "8px",
                    color: "hsl(217,70%,65%)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                    transition: "all 0.2s",
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              // ─── Form State ───
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {/* Name */}
                <Field
                  label="Full Name"
                  id="enroll-name"
                  type="text"
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  error={touched.name ? errors.name : undefined}
                  ref={firstInputRef}
                  onChange={(v) => handleChange("name", v)}
                  onBlur={() => handleBlur("name")}
                  autoComplete="name"
                />

                {/* Phone */}
                <Field
                  label="Mobile Number"
                  id="enroll-phone"
                  type="tel"
                  placeholder="98765 43210"
                  value={formData.phone}
                  error={touched.phone ? errors.phone : undefined}
                  onChange={(v) => handleChange("phone", v)}
                  onBlur={() => handleBlur("phone")}
                  autoComplete="tel"
                  prefix="+91"
                />

                {/* Email */}
                <Field
                  label="Email Address"
                  id="enroll-email"
                  type="email"
                  placeholder="rahul@example.com"
                  value={formData.email}
                  error={touched.email ? errors.email : undefined}
                  onChange={(v) => handleChange("email", v)}
                  onBlur={() => handleBlur("email")}
                  autoComplete="email"
                />

                {/* Error banner */}
                {submitState === "error" && (
                  <div style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    color: "#f87171",
                    fontSize: "0.82rem",
                    fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                  }}>
                    Something went wrong. Please try again or email us directly at support@carmaacarcare.com
                  </div>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={submitState === "loading"}
                  style={{
                    marginTop: "0.25rem",
                    padding: "0.9rem",
                    borderRadius: "10px",
                    border: "none",
                    background: submitState === "loading"
                      ? "hsl(217,70%,40%)"
                      : "hsl(217,70%,55%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: submitState === "loading" ? "not-allowed" : "pointer",
                    letterSpacing: "0.01em",
                    fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                    transition: "all 0.25s",
                    boxShadow: submitState === "loading" ? "none" : "0 4px 24px rgba(74,144,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (submitState !== "loading") {
                      (e.currentTarget as HTMLButtonElement).style.background = "hsl(217,80%,62%)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 36px rgba(74,144,255,0.45)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (submitState !== "loading") {
                      (e.currentTarget as HTMLButtonElement).style.background = "hsl(217,70%,55%)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(74,144,255,0.25)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    }
                  }}
                >
                  {submitState === "loading" ? (
                    <>
                      <Spinner />
                      Submitting…
                    </>
                  ) : (
                    "Submit Enrollment Request"
                  )}
                </button>

                <p style={{
                  textAlign: "center",
                  color: "#3d4d66",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                }}>
                  By submitting, you agree to be contacted by our team. No spam, ever.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Field Component ───

interface FieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  autoComplete?: string;
  prefix?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const Field = ({
  label, id, type, placeholder, value, error, onChange, onBlur, autoComplete, prefix, ref
}: FieldProps & { ref?: React.Ref<HTMLInputElement> }) => {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? "rgba(239,68,68,0.5)"
    : focused
      ? "rgba(74,144,255,0.55)"
      : "rgba(31,40,64,1)";

  const shadow = error
    ? "0 0 0 3px rgba(239,68,68,0.1)"
    : focused
      ? "0 0 0 3px rgba(74,144,255,0.12)"
      : "none";

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          marginBottom: "0.4rem",
          fontSize: "0.78rem",
          fontWeight: 600,
          color: error ? "#f87171" : "#7a8ba8",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
          transition: "color 0.2s",
        }}
      >
        {label}
      </label>
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        {prefix && (
          <span style={{
            position: "absolute",
            left: "0.9rem",
            color: "#7a8ba8",
            fontSize: "0.87rem",
            fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
            pointerEvents: "none",
            userSelect: "none",
          }}>
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => { setFocused(false); onBlur(); }}
          onFocus={() => setFocused(true)}
          style={{
            width: "100%",
            padding: prefix ? "0.78rem 0.9rem 0.78rem 3.25rem" : "0.78rem 0.9rem",
            background: "rgba(8, 10, 18, 0.8)",
            border: `1px solid ${borderColor}`,
            borderRadius: "9px",
            color: "#eef0f6",
            fontSize: "0.9rem",
            fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
            outline: "none",
            boxShadow: shadow,
            transition: "border-color 0.2s, box-shadow 0.2s",
            caretColor: "hsl(217,70%,65%)",
          }}
        />
      </div>
      {error && (
        <p style={{
          marginTop: "0.35rem",
          color: "#f87171",
          fontSize: "0.75rem",
          fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
        }}>
          ⚠ {error}
        </p>
      )}
    </div>
  );
};

// ─── Spinner ───

const Spinner = () => (
  <svg
    width="16" height="16" viewBox="0 0 16 16"
    style={{ animation: "spin 0.8s linear infinite" }}
  >
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    <circle
      cx="8" cy="8" r="6"
      fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"
    />
    <path
      d="M8 2 A6 6 0 0 1 14 8"
      fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
    />
  </svg>
);
