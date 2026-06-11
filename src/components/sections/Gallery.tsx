"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { babaImages, splitImages } from "@/lib/images";

const [row1, row2, row3] = splitImages(babaImages, 3);

function GalleryImage({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="group relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer" style={{ width: w, height: h, border: "1px solid rgba(217,119,6,0.1)", boxShadow: "0 8px 30px rgba(42,42,42,0.08)" }}>
      <Image src={src} alt={alt} fill className="object-cover transition-all duration-700 group-hover:scale-110" sizes={`${w}px`} />
      <div className="absolute inset-0 bg-gradient-to-t from-mahogany/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 30px rgba(217,119,6,0.15)" }} />
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden pb-20 lg:pb-32">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #FDF6EE 0%, rgba(59,31,31,0.05) 50%, #FDF6EE 100%)" }} />
      <div ref={ref} className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center px-4">
          <span className="font-cormorant text-saffron/70 tracking-[0.4em] text-xs uppercase">✦ Sacred Moments ✦</span>
          <h2 className="mt-4 font-cursive text-4xl sm:text-5xl lg:text-6xl text-glow" style={{ background: "linear-gradient(135deg, #3B1F1F 0%, #D97706 40%, #C89B3C 70%, #3B1F1F 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Divine Gallery</h2>
        </motion.div>
        {/* Dedicated Spacer for luxurious vertical gap */}
        <div className="h-8 sm:h-12 lg:h-16" />
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.3 }} className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          <Marquee speed={20} gradient={false} pauseOnHover direction="left">
            <div className="flex gap-8 lg:gap-12 px-4 lg:px-6">
              {[...row1, ...row1].map((img, i) => <GalleryImage key={`r1-${i}`} src={img.src} alt={img.alt} w={280} h={360} />)}
            </div>
          </Marquee>
          <Marquee speed={15} gradient={false} pauseOnHover direction="right">
            <div className="flex gap-8 lg:gap-12 px-4 lg:px-6">
              {[...row2, ...row2].map((img, i) => <GalleryImage key={`r2-${i}`} src={img.src} alt={img.alt} w={320} h={240} />)}
            </div>
          </Marquee>
          <Marquee speed={25} gradient={false} pauseOnHover direction="left">
            <div className="flex gap-8 lg:gap-12 px-4 lg:px-6">
              {[...row3, ...row3].map((img, i) => <GalleryImage key={`r3-${i}`} src={img.src} alt={img.alt} w={260} h={320} />)}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
