"use client";
import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Database,
  Layout,
  Search,
  ShieldCheck,
  Smartphone,
  Zap
} from "lucide-react";
import Navbar from "../components/Navbar";

const mainServices = [
  {
    title: "Web Development",
    desc: "Website ultra-premium yang responsif dan SEO-friendly untuk meningkatkan brand awareness UMKM.",
    icon: <Layout className="w-12 h-12 text-blue-500" />,
    features: ["Next.js Speed", "SEO Optimized", "Responsive Design"]
  },
  {
    title: "Sistem Custom",
    desc: "Sistem manajemen internal (ERP/CRM) yang proper menggunakan Laravel untuk automasi bisnis.",
    icon: <Database className="w-12 h-12 text-fuchsia-500" />,
    features: ["Secure Database", "Custom Workflow", "API Integration"]
  }
];

const expertise = [
  { name: "Frontend", tool: "React / Next.js", icon: <Code2 className="w-5 h-5" /> },
  { name: "Backend", tool: "Laravel / PHP", icon: <Zap className="w-5 h-5" /> },
  { name: "Mobile", tool: "React Native", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Data", tool: "MySQL / PostgreSQL", icon: <ShieldCheck className="w-5 h-5" /> },
];

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
          >
            Digital <br /> <span className="text-gray-500">Solutions.</span>
          </motion.h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Kami menggabungkan estetika desain modern dengan keandalan teknologi untuk membantu UMKM bertransformasi secara digital.
          </p>
        </div>

        {/* Core Services - Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden group"
            >
              <div className="mb-8">{service.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>

              <div className="flex flex-wrap gap-3">
                {service.features.map((feat, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-medium border border-white/5">
                    {feat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise / Tech Stack Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Teknologi yang Kami Gunakan</h2>
            <p className="text-gray-500">Zilabs menggunakan teknologi terbaru untuk memastikan sistem Anda skalabel dan aman.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center">
                <div className="p-3 bg-white/5 rounded-xl mb-4 text-blue-400">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-300">{item.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Section - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10">
            <Search className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Konsultasi & Analisis</h3>
            <p className="text-gray-400 leading-relaxed">
              Kami mulai dengan memahami masalah bisnis Anda dan merancang solusi digital yang paling efektif untuk target UMKM Anda.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-end">
            <BarChart3 className="w-10 h-10 text-fuchsia-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Skalabilitas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sistem yang kami bangun siap berkembang seiring bertumbuhnya bisnis Anda.
            </p>
          </div>
        </div>
        <div className="pt-20 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.5em] mb-4">
            Supported By
          </p>
          <div className="text-xl font-black text-gray-400 tracking-tighter hover:text-white transition-colors cursor-default">
            NUSA KODE LABS
          </div>
        </div>
      </section>
    </main>
  );
}
