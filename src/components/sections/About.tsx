"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { pickImages } from "@/lib/images";
import { Sparkles, Heart, BookOpen, Leaf } from "lucide-react";

const aboutImages = pickImages(6, 2);

const features = [
  {
    icon: Sparkles,
    title: "Ancient Wisdom",
    description: "Vedic knowledge passed through generations of enlightened gurus.",
  },
  {
    icon: Heart,
    title: "Healing Energy",
    description: "Sacred mantras and rituals channeling divine healing power.",
  },
  {
    icon: BookOpen,
    title: "Sacred Rituals",
    description: "Authentic ceremonies performed with complete devotion and purity.",
  },
  {
    icon: Leaf,
    title: "Inner Peace",
    description: "Guided meditation paths to spiritual awakening and tranquility.",
  },
];

const floatingSymbols = ["ॐ", "☸", "✦", "◈", "🙏", "✿"];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative mt-20 lg:mt-40 py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FDF6EE 0%, #F8EBDD 30%, #F0D9A8 60%, #F8EBDD 80%, #FDF6EE 100%)",
        }}
      />

      {/* Floating Sanskrit symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSymbols.map((sym, i) => (
          <motion.span
            key={i}
            className="absolute text-saffron/[0.06] select-none"
            style={{
              fontSize: 40 + i * 15,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 16}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {sym}
          </motion.span>
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-cormorant text-saffron/70 tracking-[0.4em] text-xs uppercase">
            ✦ Our Sacred Journey ✦
          </span>
          <h2
            className="mt-4 font-cursive text-4xl sm:text-5xl lg:text-6xl text-glow"
            style={{
              background:
                "linear-gradient(135deg, #3B1F1F 0%, #D97706 40%, #C89B3C 70%, #3B1F1F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ancient Wisdom, Modern Connection
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Cinematic Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Image Marquee Rows */}
            <div className="space-y-4 rounded-3xl overflow-hidden py-4">
              <Marquee speed={25} gradient={false} pauseOnHover direction="left">
                <div className="flex gap-4 px-2">
                  {aboutImages.slice(0, 3).map((img) => (
                    <div
                      key={img.id}
                      className="relative w-[200px] h-[250px] rounded-2xl overflow-hidden flex-shrink-0 group light-sweep"
                      style={{
                        border: "1px solid rgba(217,119,6,0.12)",
                        boxShadow: "0 8px 30px rgba(42,42,42,0.08)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-mahogany/20 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </Marquee>
              <Marquee speed={20} gradient={false} pauseOnHover direction="right">
                <div className="flex gap-4 px-2">
                  {aboutImages.slice(3).map((img) => (
                    <div
                      key={img.id}
                      className="relative w-[180px] h-[220px] rounded-2xl overflow-hidden flex-shrink-0 group light-sweep"
                      style={{
                        border: "1px solid rgba(217,119,6,0.12)",
                        boxShadow: "0 8px 30px rgba(42,42,42,0.08)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="180px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-mahogany/20 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="font-body text-dark/70 leading-relaxed text-base sm:text-lg tracking-wide">
              At Adhyatmik Sankalp, we bridge the sacred gap between ancient
              Vedic traditions and the modern digital world. Our platform brings
              the power of authentic spiritual practices directly to your home,
              guided by experienced and devoted gurus.
            </p>
            <p className="font-body text-dark/60 leading-relaxed text-sm sm:text-base">
              Every ritual is performed with complete devotion, following
              traditional vedic procedures. From personalized pujas to guided
              meditation, we ensure your spiritual journey is deeply meaningful
              and transformative.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="group p-4 rounded-2xl transition-all duration-500 hover:shadow-lg cursor-default"
                  style={{
                    background: "rgba(253,246,238,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(217,119,6,0.08)",
                  }}
                >
                  <feature.icon
                    size={24}
                    className="text-saffron mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="font-cinzel text-sm font-semibold text-dark/90 mb-1">
                    {feature.title}
                  </h4>
                  <p className="font-body text-xs text-dark/50 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Animated counters */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "100+", label: "Sacred Rituals" },
                { value: "10K+", label: "Devotees Served" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                  className="text-center"
                >
                  <p className="font-cinzel text-xl sm:text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="font-body text-[10px] sm:text-xs text-dark/40 tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
