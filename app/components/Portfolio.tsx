"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Re-platforming",
    category: "Web Development",
    desc: "Migrasi sistem legacy ke Next.js 15 dengan kenaikan performa 40%.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    size: "large"
  },
  {
    title: "Z-Finance App",
    category: "System Development",
    desc: "Dashboard manajemen keuangan internal perusahaan.",
    stack: ["React", "Node.js"],
    size: "small"
  },
  {
    title: "EduTech Landing Page",
    category: "UI/UX Design",
    desc: "Desain ultra-premium untuk startup edukasi.",
    stack: ["Framer", "Tailwind"],
    size: "small"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Proyek <span className="text-violet-purple">Terpilih.</span></h2>
            <p className="text-gray-400 max-w-md">Beberapa solusi digital yang telah kami bangun untuk klien kami.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-violet-purple hover:text-white transition-colors">
            Lihat Semua <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-1 rounded-[2rem] overflow-hidden group ${
                p.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className="bg-dark-gray/40 rounded-[1.9rem] p-8 h-full flex flex-col justify-between hover:bg-white/[0.05] transition-all">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-violet-purple uppercase tracking-widest">{p.category}</span>
                    <Code className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 border border-white/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
