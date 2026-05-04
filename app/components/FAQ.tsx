"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Mengapa Zilabs menggunakan Laravel & React?",
    a: "Kami menggunakan Laravel untuk backend yang kokoh dan React/Astro untuk frontend yang interaktif. Kombinasi ini menjamin website Anda cepat, aman, dan mudah dikembangkan di masa depan."
  },
  {
    q: "Apakah harga Rp 1.000.000 sudah termasuk hosting?",
    a: "Untuk paket Starter, biaya tersebut adalah jasa pengembangan. Kami dapat membantu proses pembelian domain & hosting di penyedia partner kami (RumahWeb) agar Anda tidak perlu repot."
  },
  {
    q: "Berapa lama proses pengerjaan satu proyek?",
    a: "Tergantung kompleksitas. Landing page biasanya selesai dalam 3-7 hari, sedangkan sistem custom bisa memakan waktu 2-4 minggu."
  },
  {
    q: "Apakah saya mendapatkan source code penuh?",
    a: "Tentu. Zilabs menjamin transparansi penuh. Setelah pelunasan, seluruh source code dan akses sistem menjadi milik klien sepenuhnya."
  },
  {
    q: "Apakah ada biaya maintenance bulanan?",
    a: "Kami memberikan gratis maintenance selama 1-3 bulan (tergantung paket). Setelah itu, Anda bisa memilih paket maintenance opsional atau mengelolanya sendiri."
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-deep-black/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Paling Sering <span className="text-electric-blue">Ditanyakan.</span></h2>
          <p className="text-gray-500">Semua yang perlu Anda ketahui tentang layanan Zilabs.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5 pb-4">
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${activeIdx === i ? "text-electric-blue" : "text-white/80 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <div className={`p-1 rounded-full transition-all ${activeIdx === i ? "bg-electric-blue text-black rotate-180" : "bg-white/5 text-gray-500"}`}>
                  {activeIdx === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed pb-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
