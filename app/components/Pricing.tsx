"use client";
import { motion } from "framer-motion";
import { Check, Crown, Rocket, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "Rp 1.000.000",
    desc: "Untuk bisnis yang ingin mulai tampil profesional secara online.",
    features: [
      "Landing page siap pakai",
      "Mobile optimized",
      "WhatsApp integration",
      "Fast deployment"
    ],
    icon: <Zap className="w-5 h-5" />,
    highlight: false
  },
  {
    name: "Business",
    price: "Rp 5.000.000",
    desc: "Untuk brand yang ingin meningkatkan branding & conversion.",
    features: [
      "Multi-page website",
      "Custom UI design",
      "Analytics integration",
      "Basic SEO setup",
      "1 month support"
    ],
    icon: <Rocket className="w-5 h-5" />,
    highlight: true
  },
  {
    name: "Custom System",
    price: "Mulai 15jt",
    desc: "Untuk bisnis yang butuh sistem scalable & automation.",
    features: [
      "Full custom system",
      "Dashboard & database",
      "User authentication",
      "Payment integration",
      "Priority support"
    ],
    icon: <Crown className="w-5 h-5" />,
    highlight: false
  }
];

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const phone = "628137880759";

  const generateMessage = (plan: string) => {
    if (plan === "Starter") {
      return `Halo Zilabs 👋

Saya tertarik dengan paket *Starter*.

Saat ini saya ingin mulai membangun presence online untuk bisnis saya, dan butuh website yang simple tapi tetap terlihat profesional.

Boleh dibantu untuk penjelasan detail dan next step-nya? Terima kasih 🙏`;
    }

    if (plan === "Business") {
      return `Halo Zilabs 👋

Saya tertarik dengan paket *Business*.

Saat ini saya sedang mengembangkan bisnis dan ingin meningkatkan branding serta conversion melalui website yang lebih profesional.

Saya ingin diskusi lebih lanjut terkait kebutuhan saya dan bagaimana Zilabs bisa membantu.

Boleh dijelaskan langkah selanjutnya?`;
    }

    if (plan === "Custom System") {
      return `Halo Zilabs 👋

Saya tertarik dengan layanan *Custom System Development*.

Saat ini bisnis saya membutuhkan sistem khusus untuk membantu operasional dan meningkatkan efisiensi.

Saya ingin konsultasi lebih lanjut untuk membahas kebutuhan dan solusi yang bisa dibangun bersama Zilabs.

Mohon arahan untuk langkah berikutnya. Terima kasih 🙏`;
    }

    return "";
  };

  const handleClick = (plan: string) => {
    setLoadingPlan(plan);

    const message = generateMessage(plan);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoadingPlan(null);
    }, 600); // delay kecil biar smooth
  };

  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">

      {/* ☁️ BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
            INVESTMENT
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Invest in Your Growth.
          </h2>

          <p className="text-gray-500">
            Pilih pendekatan terbaik untuk fase bisnis Anda saat ini.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className={`relative group rounded-[2.5rem] p-[1px] ${plan.highlight ? "md:scale-105 z-10" : ""
                }`}
            >

              {/* GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition" />

              {/* CARD */}
              <div className="relative bg-white rounded-[2.4rem] p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-full flex flex-col">

                {/* BADGE */}
                {plan.highlight && (
                  <div className="mb-4 text-xs font-bold text-neon-purple tracking-widest">
                    MOST CHOSEN
                  </div>
                )}

                {/* ICON */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 text-neon-purple">
                  {plan.icon}
                </div>

                <h3 className="text-xl font-black mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {plan.desc}
                </p>

                <div className="text-3xl font-black mb-6">
                  {plan.price}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-neon-purple" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleClick(plan.name)}
                  disabled={loadingPlan === plan.name}
                  className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition ${plan.highlight
                      ? "bg-gradient-to-r from-neon-purple to-electric-blue text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                    }`}
                >
                  {loadingPlan === plan.name ? "Opening..." : "Pilih Paket"}
                  <ArrowRight size={16} />
                </button>

                {/* TRUST TEXT */}
                <p className="text-xs text-gray-400 mt-4 text-center">
                  Konsultasi gratis • respon cepat via WhatsApp
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
