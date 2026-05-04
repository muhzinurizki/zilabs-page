"use client";
import { motion } from "framer-motion";
import { Code2, Layout, Database, Zap } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Website modern berkinerja tinggi, responsif, dan SEO friendly.",
    icon: <Code2 className="w-6 h-6 text-electric-blue" />,
    color: "border-electric-blue/20 bg-electric-blue/10",
  },
  {
    title: "System Development",
    desc: "Sistem kustom untuk efisiensi operasional internal bisnis Anda.",
    icon: <Database className="w-6 h-6 text-violet-purple" />,
    color: "border-violet-purple/20 bg-violet-purple/10",
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka yang intuitif dan pengalaman pengguna yang memikat.",
    icon: <Layout className="w-6 h-6 text-neon-magenta" />,
    color: "border-neon-magenta/20 bg-neon-magenta/10",
  },
  {
    title: "Automation",
    desc: "Otomatisasi proses bisnis untuk menghemat waktu dan biaya.",
    icon: <Zap className="w-6 h-6 text-electric-blue" />,
    color: "border-electric-blue/20 bg-electric-blue/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Layanan Unggulan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            Solusi terintegrasi untuk setiap tahap perjalanan bisnis Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer hover:border-violet-purple/50"
            >
              <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-lg border ${service.color} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
