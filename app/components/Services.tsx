"use client";
import { motion } from "framer-motion";
import { Code2, Database, Layout } from "lucide-react";

const services = [
  {
    title: "Build",
    subtitle: "Web & Platform Development",
    desc: "Kami membangun fondasi digital yang kuat — dari website hingga sistem kompleks yang scalable.",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    title: "Launch",
    subtitle: "UI/UX & Experience",
    desc: "Kami desain pengalaman yang bukan hanya indah, tapi juga meningkatkan trust & conversion.",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Grow",
    subtitle: "System & Automation",
    desc: "Kami bantu bisnis berkembang dengan sistem yang efisien dan automasi yang cerdas.",
    icon: <Database className="w-5 h-5" />,
  },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#FAFAFA]">

      {/* ☁️ CLOUD BACKGROUND (CONSISTENT WITH HERO) */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />

      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* 🧠 HEADER */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs tracking-[0.4em] text-gray-400 mb-4"
          >
            OUR PROCESS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black leading-tight mb-6"
          >
            From Idea to{" "}
            <span className="bg-gradient-to-r from-neon-purple to-electric-blue text-transparent bg-clip-text">
              Scalable Business
            </span>
          </motion.h2>

          <p className="text-gray-500">
            Kami tidak hanya membangun produk — kami membangun sistem yang membantu bisnis Anda berkembang.
          </p>
        </div>

        {/* 🚀 FLOW SERVICES */}
        <div className="relative flex flex-col gap-16">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse text-right md:text-left" : ""
                }`}
            >

              {/* ICON + NUMBER */}
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-xl border border-gray-100">
                <span className="absolute -top-2 -right-2 text-xs font-bold text-gray-400">
                  0{i + 1}
                </span>
                {service.icon}
              </div>

              {/* CONTENT */}
              <div className="max-w-md">
                <h3 className="text-2xl font-black mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-neon-purple mb-3">
                  {service.subtitle}
                </p>

                <p className="text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>

            </motion.div>
          ))}

          {/* ✨ CONNECTING LINE */}
          <div className="hidden md:block absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

        </div>
      </div>
    </section>
  );
}
