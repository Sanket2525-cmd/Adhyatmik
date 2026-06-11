"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES, WHATSAPP_NUMBER } from "@/lib/constants";
import { Send, CheckCircle } from "lucide-react";

export default function BookingForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🙏 *New Booking Request*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Service:* ${form.service}\n*Date:* ${form.date}\n*Message:* ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = "w-full px-4 py-3.5 rounded-xl font-body text-sm text-dark/80 placeholder:text-dark/30 outline-none transition-all duration-300 focus:ring-2 focus:ring-saffron/30";
  const bgStyle = { background: "rgba(253,246,238,0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(217,119,6,0.1)" };

  return null;
}
