"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
  const phoneNumber = "628137880759"; // Ganti dengan nomor WA Zilabs kamu
  const message = "Halo Zilabs, saya ingin konsultasi mengenai proyek digital.";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      {/* Animasi Denyut (Pulse Effect) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-green-500 rounded-full blur-xl"
      />

      {/* Tombol Utama */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] text-white group"
      >
        <MessageCircle size={32} fill="currentColor" />

        {/* Tooltip Label (Muncul saat Hover) */}
        <span className="absolute right-20 px-4 py-2 bg-white text-black text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl whitespace-nowrap">
          Chat Zilabs Sekarang
        </span>
      </motion.a>
    </div>
  );
}
