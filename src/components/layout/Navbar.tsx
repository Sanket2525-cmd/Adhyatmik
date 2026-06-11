"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { logoImage } from "@/lib/images";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-2"
            : "py-4"
        }`}
        style={{
          background: scrolled
            ? "rgba(253,246,238,0.75)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(217,119,6,0.1)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(42,42,42,0.08)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 flex-1">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="group relative font-body text-sm font-medium text-dark/80 hover:text-saffron transition-colors duration-300 tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-saffron to-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Center: Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-saffron/30 group-hover:ring-saffron/60 transition-all duration-500">
              <Image
                src={logoImage.src}
                alt={logoImage.alt}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-cursive text-xl sm:text-2xl gradient-text leading-tight">
                Adhyatmik Sankalp
              </span>
              <span className="text-[9px] font-cinzel tracking-[0.3em] text-saffron/60 uppercase -mt-0.5 hidden sm:block">
                Divine Experience
              </span>
            </div>
          </button>

          {/* Right: Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {NAV_LINKS.slice(3).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="group relative font-body text-sm font-medium text-dark/80 hover:text-saffron transition-colors duration-300 tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-saffron to-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-dark"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[49] flex flex-col items-center justify-center"
            style={{
              background: "rgba(253,246,238,0.97)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Decorative mandala */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
              style={{ fontSize: "50vh" }}
            >
              ☸
            </div>

            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-cinzel text-2xl tracking-[0.15em] text-dark/80 hover:text-saffron transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Bottom brand */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 font-cursive text-xl gradient-text"
            >
              Adhyatmik Sankalp
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
