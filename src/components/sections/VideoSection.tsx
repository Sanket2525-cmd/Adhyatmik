"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="video" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FDF6EE 0%, rgba(59,31,31,0.06) 50%, #FDF6EE 100%)",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[250px] h-[250px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,155,60,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Desktop Left-side Gap: Spacer column that physically pushes the video to the right */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Left: Video (Spans 4 columns, leaving a huge far-left gap) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative lg:col-span-4 w-full"
          >
            {/* Glow behind */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-50"
              style={{
                background:
                  "linear-gradient(135deg, rgba(217,119,6,0.08), rgba(200,155,60,0.05))",
                filter: "blur(20px)",
              }}
            />

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(217,119,6,0.15)",
                boxShadow:
                  "0 20px 60px rgba(42,42,42,0.12), 0 0 40px rgba(217,119,6,0.08)",
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/tW-zpsqpTpU"
                  title="Adhyatmik Sankalp - Sacred Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating particles around video */}
            {["✦", "ॐ", "☸"].map((sym, i) => (
              <motion.span
                key={i}
                className="absolute text-saffron/10 pointer-events-none select-none"
                style={{
                  fontSize: 20 + i * 10,
                  top: `${-5 + i * 40}%`,
                  left: i === 1 ? "-8%" : undefined,
                  right: i !== 1 ? "-5%" : undefined,
                }}
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {sym}
              </motion.span>
            ))}
          </motion.div>

          {/* Gutter Spacer: Middle column is empty on desktop to create a magnificent gutter gap */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right: Content (Spans 5 columns, pushed perfectly to the far right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="space-y-6 lg:col-span-5 w-full lg:pl-4"
          >
            <span className="font-cormorant text-saffron/70 tracking-[0.4em] text-xs uppercase">
              ✦ Watch & Experience ✦
            </span>

            <h2
              className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-glow leading-tight"
              style={{
                background:
                  "linear-gradient(135deg, #3B1F1F 0%, #D97706 40%, #C89B3C 70%, #3B1F1F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Feel the Divine Presence
            </h2>

            <p className="font-body text-dark/70 leading-relaxed text-base sm:text-lg tracking-wide">
              Witness the sacred atmosphere of our live puja ceremonies. Every
              mantra chanted with devotion, every ritual performed with
              precision — bringing the divine energy of ancient temples directly
              to your screen.
            </p>

            <p className="font-body text-dark/50 leading-relaxed text-sm">
              Our experienced gurus perform each ceremony with deep spiritual
              connection, ensuring that every devotee receives authentic
              blessings regardless of physical distance. The power of faith
              transcends all boundaries.
            </p>

            {/* Features list */}
            <div className="space-y-3 pt-4">
              {[
                "Live HD Streaming of Ceremonies",
                "Personalized Mantra Chanting",
                "Recorded Videos for Revisiting",
                "Interactive Spiritual Sessions",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(217,119,6,0.15), rgba(200,155,60,0.1))",
                    }}
                  >
                    <span className="text-saffron text-xs">✦</span>
                  </div>
                  <span className="font-body text-sm text-dark/70">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
