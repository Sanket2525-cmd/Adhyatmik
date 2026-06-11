"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const cursorRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Don't render on touch devices
    const mq = window.matchMedia("(pointer: fine)");
    setIsMobile(!mq.matches);

    const handleMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]")
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (cursorRef.current.x - prev.x) * 0.12,
        y: prev.y + (cursorRef.current.y - prev.y) * 0.12,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        animate={{
          x: pos.x - (isHovering ? 28 : 20),
          y: pos.y - (isHovering ? 28 : 20),
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          opacity: 0.4,
        }}
        transition={{ duration: 0.15, ease: "linear" }}
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,6,0.25) 0%, transparent 70%)",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
        }}
        transition={{ duration: 0.1, ease: "linear" }}
        style={{
          background: "linear-gradient(135deg, #D97706, #C89B3C)",
          boxShadow: "0 0 12px rgba(217,119,6,0.5)",
        }}
      />
    </>
  );
}
