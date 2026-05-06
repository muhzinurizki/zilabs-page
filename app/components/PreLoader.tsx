"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWA() {
  const [showBubble, setShowBubble] = useState(false);

  const phoneNumber = "628137880759";

  const message = `Halo Zilabs 👋

Saya tertarik untuk konsultasi mengenai proyek digital.`;

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // ⏱️ Auto show bubble setelah 3 detik
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex items-end gap-4">

      {/* 💬 FLOATING BUBBLE */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="hidden md:block bg-white px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[220px]"
          >
            <p className="text-sm text-gray-700 font-medium leading-snug">
              Butuh bantuan? <br />
              <span className="text-neon-purple font-semibold">
                Chat kami sekarang
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔘 BUTTON */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full text-white shadow-[0_10px_30px_rgba(123,97,255,0.4)] overflow-hidden group"
      >

        {/* GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-electric-blue" />

        {/* GLOW */}
        <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition bg-neon-purple/40" />

        {/* ICON */}
        <MessageCircle size={30} className="relative z-10" />

        {/* SUBTLE PULSE */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute inset-0 bg-neon-purple rounded-full"
        />

      </motion.a>
    </div>
  );
}
