"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { logoImage } from "@/lib/images";
import { WHATSAPP_URL, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin, Share2, PlayCircle, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-[30px]">
      {/* Top glow border */}
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #D97706 30%, #C89B3C 50%, #D97706 70%, transparent 100%)" }} />

      <div style={{ background: "linear-gradient(180deg, #3B1F1F 0%, #2A2A2A 100%)" }} className="relative">
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["ॐ", "☸", "✦"].map((s, i) => (
            <motion.span key={i} className="absolute text-saffron/[0.04] select-none" style={{ fontSize: 60 + i * 30, top: `${20 + i * 25}%`, left: `${10 + i * 30}%` }} animate={{ y: [0, -15, 0] }} transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}>{s}</motion.span>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-saffron/30">
                  <Image src={logoImage.src} alt={logoImage.alt} width={40} height={40} className="object-cover" />
                </div>
                <span className="font-cursive text-2xl" style={{ background: "linear-gradient(135deg, #D97706, #C89B3C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Adhyatmik Sankalp</span>
              </div>
              <p className="font-cormorant text-cream/40 text-sm italic leading-relaxed">&ldquo;Where ancient wisdom meets modern devotion. Your spiritual journey begins with a single sacred intention.&rdquo;</p>
              <div className="flex gap-3 pt-2">
                {[Share2, PlayCircle, Users].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.15)" }}>
                    <Icon size={16} className="text-saffron/70" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-cinzel text-sm font-semibold text-cream/80 tracking-[0.2em] uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}><a href={link.href} className="font-body text-sm text-cream/40 hover:text-saffron transition-colors duration-300">{link.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-cinzel text-sm font-semibold text-cream/80 tracking-[0.2em] uppercase mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><Phone size={14} className="text-saffron/60" /><span className="font-body text-sm text-cream/40">+91 6396348034</span></li>
                <li className="flex items-center gap-3"><Mail size={14} className="text-saffron/60" /><span className="font-body text-sm text-cream/40">info@adhyatmiksankalp.com</span></li>
                <li className="flex items-start gap-3"><MapPin size={14} className="text-saffron/60 mt-0.5" /><span className="font-body text-sm text-cream/40">India</span></li>
              </ul>
            </div>

            {/* WhatsApp CTA + Newsletter */}
            <div className="space-y-6">
              <div>
                <h4 className="font-cinzel text-sm font-semibold text-cream/80 tracking-[0.2em] uppercase mb-4">Stay Connected</h4>
                <div className="flex gap-2">
                  <input type="email" placeholder="Your email" className="flex-1 px-3 py-2.5 rounded-lg font-body text-xs text-cream/80 placeholder:text-cream/30 outline-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(217,119,6,0.15)" }} />
                  <button className="px-4 py-2.5 rounded-lg font-body text-xs font-semibold text-white" style={{ background: "linear-gradient(135deg, #D97706, #C89B3C)" }}>Subscribe</button>
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-center py-3 rounded-xl font-body text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                Chat on WhatsApp 💬
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(217,119,6,0.1)" }}>
            <p className="font-body text-xs text-cream/30">© 2024 Adhyatmik Sankalp. All rights reserved.</p>
            <p className="font-cormorant text-xs text-cream/20 italic">सर्वे भवन्तु सुखिनः • May all beings be happy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
