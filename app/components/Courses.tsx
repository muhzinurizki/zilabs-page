"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code, Terminal } from "lucide-react";

const courses = [
  {
    title: "Laravel Backend Master",
    desc: "Kuasai ekosistem Laravel dari nol sampai mahir. Standar industri agensi.",
    icon: <Terminal className="w-6 h-6 text-electric-blue" />,
    level: "Beginner - Pro"
  },
  {
    title: "React Modern Interface",
    desc: "Membangun UI yang interaktif dan cepat dengan React & Framer Motion.",
    icon: <Code className="w-6 h-6 text-violet-purple" />,
    level: "Intermediate"
  },
  {
    title: "Fullstack Web Dev",
    desc: "Gabungkan kekuatan Laravel & React dalam satu proyek real-world.",
    icon: <BookOpen className="w-6 h-6 text-neon-magenta" />,
    level: "Advanced"
  }
];

export default function Courses() {
  const phoneNumber = "628137880759";

  const handleEnroll = (courseName: string) => {
    const message = `Halo Zilabs! Saya Mahasiswa, ingin daftar kursus: *${courseName}*. Saya ingin klaim harga promo Rp 750.000. Mohon info selanjutnya.`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section id="course" className="py-24 relative bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-violet-purple uppercase tracking-[0.2em]">Zilabs Academy</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Kuasai Tech Stack <br /> <span className="text-gray-500">Masa Depan.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <div className="flex items-center gap-3 justify-end mb-2">
              <span className="text-gray-500 line-through text-lg">Rp 1.000.000</span>
              <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded">DISKON 25%</span>
            </div>
            <p className="text-2xl font-black text-white">Rp 750.000 <span className="text-sm font-normal text-gray-400">/ Kursus</span></p>
            <p className="text-xs text-violet-purple font-medium mt-1">* Khusus Mahasiswa & Pelajar</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-violet-purple/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-violet-purple/20 transition-colors">
                  {course.icon}
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{course.level}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">{course.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {course.desc}
                </p>

                <button
                  onClick={() => handleEnroll(course.title)}
                  className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-violet-purple transition-colors"
                >
                  Daftar Sekarang <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
