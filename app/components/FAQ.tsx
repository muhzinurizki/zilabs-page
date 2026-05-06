"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Kenapa Zilabs menggunakan Laravel & React?",
    a: "Kami menggunakan stack yang sudah terbukti stabil dan scalable. Laravel memastikan backend aman dan terstruktur, sementara React memberikan pengalaman user yang cepat dan interaktif. Artinya: website Anda siap berkembang, bukan cuma sekadar jadi."
  },
  {
    q: "Apakah harga sudah termasuk domain & hosting?",
    a: "Untuk paket Starter, biaya fokus pada pengembangan. Namun kami akan bantu setup domain & hosting tanpa ribet. Untuk paket Business, domain & hosting sudah termasuk selama 1 tahun."
  },
  {
    q: "Berapa lama proses pengerjaan?",
    a: "Landing page biasanya selesai dalam 3–7 hari. Untuk sistem custom, estimasi 2–4 minggu tergantung kompleksitas. Selama proses, Anda akan mendapatkan update berkala sehingga semuanya transparan."
  },
  {
    q: "Apakah saya mendapatkan source code penuh?",
    a: "Ya. Setelah proyek selesai dan pelunasan, seluruh source code dan akses sistem menjadi milik Anda sepenuhnya. Tidak ada lock-in."
  },
  {
    q: "Apakah ada biaya tambahan setelah project selesai?",
    a: "Tidak ada biaya tersembunyi. Kami juga memberikan free maintenance 1–3 bulan. Setelah itu, Anda bebas memilih lanjut maintenance atau mengelola sendiri."
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">

      {/* ☁️ BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[800px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
            FAQ
          </p>

          <h2 className="text-4xl font-black mb-4">
            Still Wondering?
          </h2>

          <p className="text-gray-500">
            Kami jawab pertanyaan yang biasanya jadi pertimbangan sebelum memulai.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-[1px]"
            >

              {/* GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm">

                <button
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className={`font-bold transition ${activeIdx === i ? "text-dark-navy" : "text-gray-700"
                    }`}>
                    {faq.q}
                  </span>

                  <div className={`ml-4 p-2 rounded-full transition ${activeIdx === i
                      ? "bg-neon-purple text-white"
                      : "bg-gray-100 text-gray-500"
                    }`}>
                    {activeIdx === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>
          ))}

        </div>

        {/* TRUST FOOTER */}
        <div className="text-center mt-12 text-sm text-gray-500">
          Masih ada pertanyaan? Konsultasi gratis via WhatsApp.
        </div>

      </div>
    </section>
  );
}
