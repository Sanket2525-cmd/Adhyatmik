"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { pickImages } from "@/lib/images";
import { WHATSAPP_URL } from "@/lib/constants";

const heroImages = pickImages(5, 0);

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animated-gradient"
        style={{
          background:
            "linear-gradient(135deg, #FDF6EE 0%, #F8EBDD 25%, #F0D9A8 50%, #F8EBDD 75%, #FDF6EE 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="animate-mandala opacity-[0.03]"
          style={{
            width: "min(80vw, 800px)",
            height: "min(80vw, 800px)",
            background:
              "conic-gradient(from 0deg, #D97706, #C89B3C, #E6A756, #D97706, #C89B3C, #E6A756, #D97706)",
            borderRadius: "50%",
            mask: "radial-gradient(circle, transparent 30%, black 31%, transparent 32%, black 45%, transparent 46%, black 60%, transparent 61%, black 80%, transparent 81%)",
            WebkitMask:
              "radial-gradient(circle, transparent 30%, black 31%, transparent 32%, black 45%, transparent 46%, black 60%, transparent 61%, black 80%, transparent 81%)",
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "10%", left: "5%", size: 300, delay: 0 },
          { top: "60%", right: "10%", size: 250, delay: 2 },
          { top: "30%", right: "25%", size: 200, delay: 4 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: orb.top,
              left: orb.left,
              right: orb.right,
              width: orb.size,
              height: orb.size,
              background:
                "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:h-screen">
          {/* Left: Text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-6"
            >
              <span className="font-cormorant text-saffron/70 tracking-[0.4em] text-xs uppercase">
                ✦ Sacred Digital Experience ✦
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-cursive text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-glow"
              style={{
                background:
                  "linear-gradient(135deg, #3B1F1F 0%, #D97706 40%, #C89B3C 70%, #3B1F1F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience Divine Energy From Anywhere
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 font-body text-dark/70 text-base sm:text-lg leading-relaxed max-w-lg tracking-wide"
            >
              Book personalized online puja, spiritual guidance, meditation
              sessions and sacred rituals with trusted gurus.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#booking"
                className="group relative px-8 py-3.5 rounded-full font-body text-sm font-semibold text-white overflow-hidden transition-all duration-500 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #D97706, #C89B3C)",
                  boxShadow: "0 4px 20px rgba(217,119,6,0.3)",
                }}
              >
                <span className="relative z-10">Book Online Puja</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3.5 rounded-full font-body text-sm font-semibold text-saffron overflow-hidden transition-all duration-500 hover:text-white"
                style={{
                  border: "2px solid rgba(217,119,6,0.4)",
                  background: "rgba(217,119,6,0.05)",
                }}
              >
                <span className="relative z-10">Talk on WhatsApp</span>
                <span className="absolute inset-0 bg-gradient-to-r from-saffron to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex gap-8"
            >
              {[
                { value: "5000+", label: "Pujas Done" },
                { value: "50+", label: "Expert Gurus" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-cinzel text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-dark/50 mt-1 tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Image Composition */}
          <div className="relative order-1 lg:order-2 h-[450px] sm:h-[500px] lg:h-[600px]">
            {/* Chakra glow behind */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(217,119,6,0.1), rgba(200,155,60,0.05), rgba(230,167,86,0.1), rgba(200,155,60,0.05), rgba(217,119,6,0.1))",
                filter: "blur(30px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Main center image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[280px] sm:w-[250px] sm:h-[320px] lg:w-[280px] lg:h-[360px] rounded-3xl overflow-hidden z-10"
              style={{
                boxShadow:
                  "0 20px 60px rgba(42,42,42,0.15), 0 0 40px rgba(217,119,6,0.1)",
                border: "2px solid rgba(217,119,6,0.15)",
              }}
            >
              <Image
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 250px, 280px"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-mahogany/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating satellite images */}
            {heroImages.slice(1).map((img, i) => {
              const positions = [
                { top: "5%", left: "5%", rotate: -6, delay: 0.5 },
                { top: "8%", right: "0%", rotate: 4, delay: 0.7 },
                { bottom: "5%", left: "2%", rotate: 5, delay: 0.9 },
                { bottom: "8%", right: "5%", rotate: -3, delay: 1.1 },
              ];
              const pos = positions[i];
              return (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.6, rotate: pos.rotate * 2 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotate: pos.rotate,
                          y: [0, -8, 0],
                        }
                      : {}
                  }
                  transition={{
                    opacity: { duration: 0.8, delay: pos.delay },
                    scale: { duration: 0.8, delay: pos.delay },
                    rotate: { duration: 0.8, delay: pos.delay },
                    y: {
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: pos.delay + 1,
                    },
                  }}
                  className="absolute w-[110px] h-[140px] sm:w-[130px] sm:h-[160px] lg:w-[140px] lg:h-[180px] rounded-2xl overflow-hidden"
                  style={{
                    ...pos,
                    boxShadow:
                      "0 10px 40px rgba(42,42,42,0.12), 0 0 20px rgba(217,119,6,0.08)",
                    border: "1px solid rgba(217,119,6,0.12)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    sizes="140px"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-[0.3em] text-dark/40 uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-saffron/30 flex items-start justify-center p-1"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-saffron/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
