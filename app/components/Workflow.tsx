"use client";
import { motion } from "framer-motion";

const steps = [
  { no: "01", title: "Discovery", desc: "Konsultasi mendalam untuk memahami kebutuhan dan tantangan bisnis Anda." },
  { no: "02", title: "Strategy", desc: "Penyusunan blueprint teknologi dan desain antarmuka yang presisi." },
  { no: "03", title: "Development", desc: "Proses coding transparan dengan update berkala setiap milestone." },
  { no: "04", title: "Launch", desc: "Deployment ke server produksi dan pelatihan penggunaan sistem." },
];

export default function Workflow() {
  return (
    <section className="py-24 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold mb-4">Cara Kami <span className="text-electric-blue">Bekerja.</span></h2>
          <p className="text-gray-500">Proses terstruktur untuk hasil yang terukur.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="text-7xl font-black text-white/5 absolute -top-10 left-0 group-hover:text-electric-blue/10 transition-colors">
                {step.no}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
