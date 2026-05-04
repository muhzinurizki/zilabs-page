"use client";
import { motion } from "framer-motion";
import { MessageSquare, Calendar } from "lucide-react";

export default function CTA() {
  const phoneNumber = "628137880759"; // Ganti dengan nomor WA Zilabs

  // Handler untuk WhatsApp Cepat
  const handleWAContact = () => {
    const message = "Halo Zilabs! Saya tertarik untuk konsultasi mengenai proyek digital. Apakah ada waktu luang?";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  // Handler untuk Jadwalkan Meeting (dengan Template Data)
  const handleScheduleMeeting = () => {
    const meetingTemplate = `*FORM PENJADWALAN MEETING ZILABS*
---
Nama Lengkap:
Nama Perusahaan/Bisnis:
Topik Proyek: (Web/System/Course)
Estimasi Budget:
Rencana Jadwal Meeting: (Contoh: Senin, Pukul 14.00 WIB)
---
Halo Muhzinur & tim Zilabs, saya ingin menjadwalkan meeting untuk diskusi lebih detail. Berikut data saya.`;

    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(meetingTemplate)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-brand p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden shadow-[0_20px_50px_rgba(123,97,255,0.3)]"
        >
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10 leading-tight">
            Siap Bangun Proyek <br /> Impian Anda?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Diskusikan ide Anda bersama Muhzinur Rizki dan tim Zilabs. Pilih jalur komunikasi yang paling nyaman bagi Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            {/* Button 1: WhatsApp Chat */}
            <button
              onClick={handleWAContact}
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-black rounded-2xl shadow-xl hover:scale-105 transition-all text-lg active:scale-95"
            >
              <MessageSquare className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Hubungi Via WhatsApp
            </button>

            {/* Button 2: Schedule Meeting (The Form) */}
            <button
              onClick={handleScheduleMeeting}
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-lg active:scale-95"
            >
              <Calendar className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              Jadwalkan Meeting
            </button>
          </div>

          <p className="mt-8 text-white/50 text-xs font-medium tracking-widest uppercase relative z-10">
            Respon cepat • Konsultasi 100% Gratis
          </p>
        </motion.div>
      </div>
    </section>
  );
}
