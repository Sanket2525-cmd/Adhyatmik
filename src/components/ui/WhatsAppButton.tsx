"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial position
    setPosition({
      x: window.innerWidth - 80,
      y: window.innerHeight - 100,
    });
  }, []);

  return (
    <>
      {/* Drag constraints container */}
      <div ref={constraintsRef} className="fixed inset-0 z-[90] pointer-events-none" />

      {/* Chat popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-5 z-[92] w-[320px] rounded-2xl overflow-hidden"
            style={{
              background: "rgba(253,246,238,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(217,119,6,0.2)",
              boxShadow: "0 20px 60px rgba(42,42,42,0.15), 0 0 30px rgba(217,119,6,0.1)",
            }}
          >
            {/* Header */}
            <div
              className="p-4 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #3B1F1F, #4A2C2A)",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center">
                <span className="text-white text-lg">🙏</span>
              </div>
              <div className="flex-1">
                <p className="font-cinzel text-cream text-sm font-semibold">
                  Adhyatmik Sankalp
                </p>
                <p className="text-cream/60 text-xs font-body">
                  Usually replies instantly
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cream/60 hover:text-cream transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="bg-white/80 rounded-xl p-3 shadow-sm">
                <p className="text-dark text-sm font-body leading-relaxed">
                  Greetings! Welcome to 'Adhyatmik Sankalp'. We are here for online puja, spiritual guidance, or any other service.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center py-3 rounded-xl font-body text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                }}
              >
                Start Conversation 💬
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
        className="fixed bottom-6 right-5 z-[91] pointer-events-auto"
      >
        <motion.button
          onClick={() => !isDragging && setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-grab active:cursor-grabbing"
          style={{
            background: "linear-gradient(135deg, #25D366, #128C7E)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 4px 20px rgba(37,211,102,0.3)",
              "0 4px 30px rgba(37,211,102,0.5)",
              "0 4px 20px rgba(37,211,102,0.3)",
            ],
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity },
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle size={24} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ping effect */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-400" />
          )}
        </motion.button>
      </motion.div>
    </>
  );
}
