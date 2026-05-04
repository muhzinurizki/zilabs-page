"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Mesh Gradient menggunakan CSS standar */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e1e3f_0%,#0a0a0f_70%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-purple/30 bg-violet-purple/10 text-violet-purple text-xs font-bold tracking-widest uppercase"
        >
          Build • Launch • Grow
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
        >
          Dari Ide, Kita Bangun <br />
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            Solusi Digital.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Zilabs adalah partner teknologi untuk UMKM dan Founder yang ingin melakukan digitalisasi bisnis dengan sistem modern.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#" className="w-full sm:w-auto px-8 py-4 bg-neon-magenta rounded-xl text-white font-bold text-lg neon-glow-magenta hover:scale-105 transition-transform text-center">
            Mulai Sekarang
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-lg hover:bg-white/10 transition-colors text-center">
            Lihat Layanan
          </a>
        </motion.div>
      </div>

      {/* Glow Effect menggunakan animate-pulse-slow yang kita buat di globals.css */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
    </section>
  );
}
