"use client";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">

      {/* ☁️ BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
              WHY ZILABS
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Built for Growth. <br />
              <span className="bg-gradient-to-r from-neon-purple to-electric-blue text-transparent bg-clip-text">
                Not Just Delivery.
              </span>
            </h2>

            <div className="space-y-8">

              {[
                {
                  title: "Business-Driven Approach",
                  desc: "Kami fokus pada outcome bisnis, bukan sekadar deliver fitur."
                },
                {
                  title: "Scalable From Day One",
                  desc: "Dibangun untuk growth jangka panjang, bukan solusi sementara."
                },
                {
                  title: "Long-Term Partnership",
                  desc: "Kami bukan vendor, tapi partner yang grow bersama Anda."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >

                  {/* ICON */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 flex items-center justify-center text-neon-purple">
                    <Check size={18} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-bold text-dark-navy mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* RIGHT (FOUNDER STATEMENT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >

            {/* GRADIENT BORDER */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition" />

            {/* CARD */}
            <div className="relative bg-white rounded-[2.4rem] p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-purple to-electric-blue flex items-center justify-center text-white font-bold">
                  M
                </div>

                <div>
                  <p className="font-bold text-dark-navy">
                    Muhzinur Rizki
                  </p>
                  <p className="text-xs text-gray-400 tracking-widest">
                    FOUNDER • ZILABS
                  </p>
                </div>

              </div>

              {/* QUOTE */}
              <blockquote className="text-lg text-gray-600 leading-relaxed mb-6">
                “Kami percaya teknologi bukan hanya soal membangun produk,
                tapi menciptakan sistem yang benar-benar mendorong bisnis bertumbuh.”
              </blockquote>

              {/* SIGNATURE TOUCH */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Sparkles size={14} />
                <span>Building real impact, not just features</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
