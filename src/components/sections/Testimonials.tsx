"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div 
      className="flex-shrink-0 w-[320px] sm:w-[380px]"
      style={{ margin: "0 20px" }} // Physically forces a 40px gap between cards in the marquee
    >
      <div
        className="group relative w-full h-[190px] sm:h-[215px] p-5 sm:p-6 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:shadow-xl"
        style={{
          background: "rgba(253,246,238,0.7)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(217,119,6,0.1)",
        }}
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow:
              "0 0 40px rgba(217,119,6,0.08), inset 0 0 40px rgba(217,119,6,0.03)",
          }}
        />

        {/* Top Content (Quote, Stars, Text) */}
        <div className="relative z-10 flex flex-col">
          <div className="flex justify-between items-start mb-1 sm:mb-2">
            <Quote
              size={24}
              className="text-saffron/20 group-hover:text-saffron/40 transition-colors duration-300"
            />
            {/* Stars */}
            <div className="flex gap-1 pt-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-saffron text-saffron"
                />
              ))}
            </div>
          </div>

          {/* Text with perfect space-clamping */}
          <p className="font-body text-xs sm:text-sm text-dark/70 leading-relaxed line-clamp-3 mt-1">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

        {/* Bottom Content (Author Details) - Pushed perfectly to the bottom */}
        <div className="relative z-10 flex items-center gap-3 pt-3 border-t border-saffron/5">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-cinzel text-xs sm:text-sm font-bold text-white flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #D97706, #C89B3C)",
            }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-cinzel text-xs sm:text-sm font-semibold text-dark/90 leading-none mb-1">
              {testimonial.name}
            </p>
            <p className="font-body text-[9px] sm:text-xs text-dark/40 leading-none">
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Tripled the array content to prevent loops from causing spacing gaps on wide screen resolutions
  const row1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const row2 = [...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(4)];

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FDF6EE 0%, #F8EBDD 50%, #FDF6EE 100%)",
        }}
      />

      <div ref={ref} className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center mb-0 px-4 w-full"
        >
          <span className="font-cormorant text-saffron/70 tracking-[0.4em] text-xs uppercase block text-center w-full">
            ✦ Divine Experiences ✦
          </span>
          <h2
            className="mt-4 font-cursive text-4xl sm:text-5xl lg:text-6xl text-glow text-center w-full"
            style={{
              background:
                "linear-gradient(135deg, #3B1F1F 0%, #D97706 40%, #C89B3C 70%, #3B1F1F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textAlign: "center"
            }}
          >
            Words of Blessings
          </h2>
          <div className="w-full flex justify-center mt-4">
            <p 
              className="font-body text-dark/60 text-sm sm:text-base max-w-2xl text-center"
              style={{ 
                textAlign: "center",
                margin: "0 auto",
                display: "block"
              }}
            >
              Hear from devotees whose lives have been transformed through our
              sacred services and divine guidance.
            </p>
          </div>
        </motion.div>

        {/* Dedicated Spacing Block (Failsafe against collapsing marquee margins) */}
        <div className="h-10 sm:h-12 lg:h-16" />

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col gap-10 sm:gap-12"
        >
          <Marquee
            speed={30}
            gradient
            gradientColor="#FDF6EE"
            gradientWidth={80}
            pauseOnHover
            direction="left"
          >
            {row1.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </Marquee>

          <Marquee
            speed={25}
            gradient
            gradientColor="#FDF6EE"
            gradientWidth={80}
            pauseOnHover
            direction="right"
          >
            {row2.map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
