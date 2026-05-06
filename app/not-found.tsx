"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function NotFound() {
  const phone = "628137880759";

  const message = `Halo Zilabs 👋

Saya menemukan halaman yang tidak tersedia, tapi saya tertarik untuk konsultasi proyek digital.`;

  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FAFAFA] overflow-hidden px-6">

      {/* ☁️ BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-xl">

        {/* 404 BIG */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[120px] md:text-[160px] font-black text-gray-100 select-none"
        >
          404
        </motion.h1>

        {/* TEXT */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black mb-4"
        >
          Halaman Tidak Ditemukan
        </motion.h2>

        <p className="text-gray-500 mb-10">
          Sepertinya Anda tersesat. Tapi tidak masalah — mungkin ini saat yang tepat untuk mulai membangun sesuatu yang baru.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link href="/">
            <button className="px-8 py-4 bg-white border border-gray-200 rounded-xl font-bold hover:shadow-lg transition flex items-center gap-2">
              Kembali ke Beranda
              <ArrowRight size={16} />
            </button>
          </Link>

          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-gradient-to-r from-neon-purple to-electric-blue text-white rounded-xl font-bold shadow-lg hover:scale-105 transition flex items-center gap-2">
              Konsultasi Sekarang
              <MessageSquare size={16} />
            </button>
          </a>

        </div>

        {/* TRUST */}
        <p className="mt-8 text-xs text-gray-400">
          Atau langsung diskusi dengan tim kami via WhatsApp
        </p>

      </div>
    </div>
  );
}
