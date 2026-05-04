"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="why" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Sisi Kiri: Value Proposition */}
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold mb-8"
            >
              Mengapa Memilih <span className="text-violet-purple">Zilabs?</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { title: "Simple & Bersih", desc: "Desain fokus pada fungsi dan kemudahan penggunaan." },
                { title: "Terukur & Scalable", desc: "Sistem siap berkembang seiring pertumbuhan bisnis Anda." },
                { title: "Dukungan Berkelanjutan", desc: "Kami adalah partner pertumbuhan jangka panjang Anda." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-blue flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Founder Quote (Bento Style) */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-[2px] rounded-2xl bg-gradient-brand"
            >
              <div className="bg-dark-gray rounded-[14px] p-8 relative overflow-hidden">
                {/* Grid Pattern Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L0 0 0 20' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }}
                />

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-brand p-0.5 animate-pulse">
                    <div className="w-full h-full bg-dark-gray rounded-full flex items-center justify-center text-lg font-bold italic text-white">
                      M
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Muhzinur Rizki</div>
                    <div className="text-violet-purple text-xs uppercase tracking-widest font-semibold">Founder Zilabs</div>
                  </div>
                </div>

                <blockquote className="text-xl italic text-gray-200 leading-relaxed relative z-10">
                  "Inovasi bukan tentang ide baru yang rumit, tapi tentang eksekusi yang tepat dan memberi dampak nyata bagi bisnis."
                </blockquote>

                {/* Decorative Blur Inside Card */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-magenta/20 blur-3xl rounded-full" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
