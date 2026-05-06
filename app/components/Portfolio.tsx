"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Layout } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Replatform",
    impact: "+40% Conversion",
    desc: "Migrasi ke arsitektur modern untuk meningkatkan speed, UX, dan conversion.",
    tag: "Web Development",
    icon: <Code2 className="w-5 h-5" />,
    size: "large",
  },
  {
    title: "Finance System",
    impact: "−60% Manual Work",
    desc: "Automasi sistem keuangan untuk efisiensi operasional.",
    tag: "System",
    icon: <Database className="w-5 h-5" />,
    size: "small",
  },
  {
    title: "EduTech Landing",
    impact: "+2.3x Engagement",
    desc: "UI/UX berbasis behavior untuk meningkatkan interaksi user.",
    tag: "UI/UX",
    icon: <Layout className="w-5 h-5" />,
    size: "small",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">

      {/* ☁️ SOFT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-purple/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="mb-20 max-w-xl">
          <p className="text-xs tracking-[0.5em] text-gray-400 mb-4">
            CASE STUDIES
          </p>

          <h2 className="text-5xl font-black leading-tight mb-4">
            Real Work.{" "}
            <span className="bg-gradient-to-r from-neon-purple to-electric-blue text-transparent bg-clip-text">
              Real Impact.
            </span>
          </h2>

          <p className="text-gray-500">
            Project yang kami bangun dengan fokus pada hasil nyata.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative group rounded-[2.5rem] p-[1px]
              ${p.size === "large" ? "md:col-span-2" : ""}`}
            >

              {/* ✨ GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* CARD */}
              <div className="relative bg-white rounded-[2.4rem] p-8 md:p-10 h-full flex flex-col justify-between border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

                {/* TOP */}
                <div>
                  {/* ICON */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 text-neon-purple group-hover:scale-110 transition">
                    {p.icon}
                  </div>

                  {/* TAG */}
                  <span className="text-xs tracking-widest text-gray-400">
                    {p.tag}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-2xl font-black mt-2 mb-3">
                    {p.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="flex items-center justify-between">

                  {/* IMPACT */}
                  <span className="text-sm font-bold bg-gradient-to-r from-neon-purple to-electric-blue text-transparent bg-clip-text">
                    {p.impact}
                  </span>

                  {/* CTA ICON */}
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition">
                    <ArrowUpRight size={18} />
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
