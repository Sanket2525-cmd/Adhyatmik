"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  flickerSpeed: number;
  phase: number;
  type: "diya" | "aura" | "symbol";
  symbol?: string;
}

const SYMBOLS = ["ॐ", "☸", "✦", "◈", "❋"];

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createParticles = useCallback((w: number, h: number): Particle[] => {
    const count = Math.min(35, Math.floor((w * h) / 40000));
    return Array.from({ length: count }, () => {
      const type =
        Math.random() < 0.45
          ? "diya"
          : Math.random() < 0.7
          ? "aura"
          : "symbol";
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        size: type === "symbol" ? 14 + Math.random() * 6 : 2 + Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.35,
        flickerSpeed: 0.005 + Math.random() * 0.015,
        phase: Math.random() * Math.PI * 2,
        type,
        symbol: type === "symbol" ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : undefined,
      };
    });
  }, []);

  const particlesRef = useRef<Particle[]>([]);

  // Memoize draw function
  const draw = useMemo(() => {
    return (ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;

      for (const p of particles) {
        // React to mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx -= dx * 0.00005;
          p.vy -= dy * 0.00005;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Flicker
        const flicker = Math.sin(time * p.flickerSpeed + p.phase) * 0.3 + 0.7;
        const alpha = p.opacity * flicker;

        // Wrap
        if (p.y < -20) p.y = h + 20;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        if (p.type === "diya") {
          // Warm diya glow
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
          gradient.addColorStop(0, `rgba(217, 119, 6, ${alpha})`);
          gradient.addColorStop(0.4, `rgba(230, 167, 86, ${alpha * 0.5})`);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.fillStyle = `rgba(255, 220, 130, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "aura") {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 8);
          gradient.addColorStop(0, `rgba(200, 155, 60, ${alpha * 0.4})`);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "symbol" && p.symbol) {
          ctx.font = `${p.size}px serif`;
          ctx.fillStyle = `rgba(200, 155, 60, ${alpha * 0.35})`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.symbol, p.x, p.y);
        }
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles(canvas.width, canvas.height);
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    let time = 0;
    const loop = () => {
      time++;
      draw(ctx, canvas.width, canvas.height, time);
      animRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, [createParticles, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
