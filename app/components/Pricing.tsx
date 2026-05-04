"use client";
import { motion } from "framer-motion";
import { Check, Crown, Rocket, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Rp 1.000.000",
    desc: "Solusi cepat dan hemat untuk kehadiran digital awal bisnis Anda.",
    features: [
      "Single Landing Page",
      "Responsive Design (Mobile Friendly)",
      "Integrasi Tombol WhatsApp",
      "SSL Certificate (Keamanan)",
      "Waktu Pengerjaan 3-5 Hari"
    ],
    icon: <Zap className="w-6 h-6 text-electric-blue" />,
    highlight: false
  },
  {
    name: "Business",
    price: "Rp 5.000.000",
    desc: "Paket lengkap untuk branding profesional dan fitur lebih luas.",
    features: [
      "Hingga 5 Halaman Website",
      "Custom UI Design",
      "Integrasi Google Maps & Analytics",
      "Free Domain & Hosting 1 Tahun",
      "Basic SEO Optimization",
      "Support Maintenance 1 Bulan"
    ],
    icon: <Rocket className="w-6 h-6 text-violet-purple" />,
    highlight: true
  },
  {
    name: "Custom System",
    price: "Rp 15.000.000",
    desc: "Sistem khusus dengan fitur kompleks untuk skalabilitas bisnis.",
    features: [
      "Fullstack Web Application",
      "Dashboard Admin Panel",
      "Integrasi Database",
      "Sistem Autentikasi User",
      "Integrasi Payment Gateway",
      "Prioritas Support 3 Bulan"
    ],
    icon: <Crown className="w-6 h-6 text-neon-magenta" />,
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Investasi Untuk <span className="bg-gradient-brand bg-clip-text text-transparent">Pertumbuhan.</span>
          </motion.h2>
          <p className="text-gray-400">Pilih paket investasi yang sesuai dengan skala bisnis Anda saat ini.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group p-8 rounded-3xl border transition-all duration-500 ${
                plan.highlight
                ? "border-violet-purple/50 bg-white/[0.05] shadow-[0_0_40px_rgba(123,97,255,0.15)] scale-105 z-10"
                : "border-white/10 bg-white/[0.02] hover:border-white/20"
              } glass-card`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-brand rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
                  Paling Populer
                </div>
              )}

              <div className="mb-6 flex justify-between items-start">
                <div className={`p-3 rounded-2xl ${plan.highlight ? "bg-violet-purple/20" : "bg-white/5"}`}>
                  {plan.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="text-3xl font-extrabold mb-4 text-white">
                {plan.price}
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed h-12">
                {plan.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-violet-purple" : "text-electric-blue"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlight
                ? "bg-gradient-brand text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]"
                : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              }`}>
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
