"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function CTA() {
  const phoneNumber = "628137880759";

  const handleWAContact = () => {
    const message = `Halo Zilabs 👋

Saya tertarik untuk memulai proyek digital.

Boleh dibantu untuk konsultasi awal terkait kebutuhan saya?

Terima kasih 🙏`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  const handleScheduleMeeting = () => {
    const meetingTemplate = `Halo Zilabs 👋

Saya ingin menjadwalkan meeting untuk diskusi proyek.

Berikut data saya:

Nama:
Bisnis / Perusahaan:
Kebutuhan:
Estimasi Budget:
Waktu Meeting yang diinginkan:

Mohon arahan untuk langkah selanjutnya. Terima kasih 🙏`;

    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(meetingTemplate)}`;
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">

      {/* ☁️ BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-blue/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] p-[1px] group"
        >

          {/* GRADIENT BORDER */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-neon-purple to-electric-blue opacity-90" />

          {/* INNER CARD */}
          <div className="relative bg-white rounded-[2.9rem] px-10 py-16 text-center overflow-hidden">

            {/* SOFT GLOW */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon-purple/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-electric-blue/20 blur-[100px] rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10">

              <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
                START YOUR PROJECT
              </p>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Let’s Build Something <br />
                <span className="bg-gradient-to-r from-neon-purple to-electric-blue bg-clip-text text-transparent">
                  That Actually Works.
                </span>
              </h2>

              <p className="text-gray-500 mb-12 max-w-xl mx-auto">
                Diskusikan ide Anda bersama tim Zilabs. Kami bantu dari konsep hingga siap digunakan tanpa proses yang membingungkan.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                {/* WA */}
                <button
                  onClick={handleWAContact}
                  className="group flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-neon-purple to-electric-blue text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition" />
                  Chat WhatsApp
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </button>

                {/* MEETING */}
                <button
                  onClick={handleScheduleMeeting}
                  className="group flex items-center justify-center gap-3 px-8 py-5 bg-white border border-gray-200 text-dark-navy font-bold rounded-2xl hover:shadow-xl transition-all active:scale-95"
                >
                  <Calendar className="w-5 h-5 group-hover:-rotate-12 transition" />
                  Schedule Meeting
                </button>

              </div>

              {/* TRUST LINE */}
              <p className="mt-8 text-xs text-gray-400">
                Konsultasi gratis • Tanpa komitmen • Respon cepat
              </p>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
