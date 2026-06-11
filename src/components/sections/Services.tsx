"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Flame,
  Shield,
  Droplets,
  Home,
  Star,
  Brain,
  BookOpen,
  Heart,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { pickImages } from "@/lib/images";

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Shield,
  Droplets,
  Home,
  Star,
  Brain,
  BookOpen,
  Heart,
};

const serviceImages = pickImages(SERVICES.length, 0);

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FDF6EE 0%, rgba(59,31,31,0.04) 50%, #FDF6EE 100%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-cormorant text-saffron/70 tracking-[0.4em] text-xs uppercase">
            ✦ Sacred Services ✦
          </span>
          <h2
            className="mt-4 font-cursive text-3xl sm:text-5xl lg:text-5xl text-glow"
            style={{
              background:
                "linear-gradient(135deg, #3B1F1F 0%, #D97706 40%, #C89B3C 70%, #3B1F1F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Divine Offerings
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="flex justify-end">
          <div className="w-full lg:w-5/6 flex flex-col gap-8">
            <p className="font-body text-dark/60 text-sm sm:text-base leading-relaxed text-center">
              Each service is crafted with devotion, performed by verified pandits
              following authentic Vedic traditions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Flame;
            const img = serviceImages[i % serviceImages.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-[340px]"
                style={{
                  border: "1px solid rgba(217,119,6,0.1)",
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.src})` }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(59,31,31,0.3) 0%, rgba(59,31,31,0.7) 60%, rgba(59,31,31,0.9) 100%)",
                  }}
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: "inset 0 0 60px rgba(217,119,6,0.15)",
                  }}
                />

                {/* Light sweep */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <div className="mb-3 w-12 h-12 rounded-2xl flex items-center justify-center glass-dark group-hover:scale-110 transition-transform duration-500">
                    <Icon size={22} className="text-saffron-light" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-cream tracking-wider mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-cream/60 text-xs leading-relaxed line-clamp-3 group-hover:text-cream/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <motion.div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-body text-xs text-saffron-light tracking-wider">
                      Learn More
                    </span>
                    <span className="text-saffron-light">→</span>
                  </motion.div>
                </div>

                {/* Top glow border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #D97706, transparent)",
                  }}
                />
              </motion.div>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
