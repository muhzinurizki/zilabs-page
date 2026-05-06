"use client";
import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Discovery",
    desc: "Kami memahami bisnis Anda secara mendalam sebelum menulis satu baris kode pun.",
  },
  {
    no: "02",
    title: "Strategy",
    desc: "Kami merancang solusi yang selaras dengan tujuan bisnis dan growth Anda.",
  },
  {
    no: "03",
    title: "Development",
    desc: "Proses transparan dengan update berkala di setiap milestone.",
  },
  {
    no: "04",
    title: "Launch",
    desc: "Deployment stabil + support untuk memastikan semuanya berjalan optimal.",
  },
];

export default function Workflow() {
  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">

      {/* ☁️ BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="mb-20 max-w-xl">
          <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
            WORKFLOW
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Clear Process.{" "}
            <span className="bg-gradient-to-r from-neon-purple to-electric-blue text-transparent bg-clip-text">
              Zero Guesswork.
            </span>
          </h2>

          <p className="text-gray-500">
            Kami bekerja dengan sistem yang terstruktur agar setiap tahap jelas dan terukur.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative">

          {/* LINE CONNECTOR */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple/30 via-electric-blue/30 to-neon-purple/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >

                {/* DOT */}
                <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-neon-purple z-10" />

                {/* CARD */}
                <div className="relative bg-white rounded-[2rem] p-6 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:-translate-y-2 transition">

                  {/* NUMBER */}
                  <span className="text-xs tracking-widest text-gray-400">
                    {step.no}
                  </span>

                  <h3 className="text-lg font-black mt-2 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
