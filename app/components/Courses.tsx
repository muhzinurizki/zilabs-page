"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Terminal } from "lucide-react";

const courses = [
  {
    title: "Laravel Backend Mastery",
    desc: "Belajar membangun backend production-ready dengan standar industri agency.",
    icon: <Terminal className="w-5 h-5" />,
    level: "Beginner → Advanced"
  },
  {
    title: "Modern React Interface",
    desc: "Bangun UI interaktif, scalable, dan high-performance menggunakan React.",
    icon: <Code2 className="w-5 h-5" />,
    level: "Intermediate"
  },
  {
    title: "Fullstack System Builder",
    desc: "Gabungkan backend & frontend dalam project real-world end-to-end.",
    icon: <BookOpen className="w-5 h-5" />,
    level: "Advanced"
  }
];

export default function Courses() {
  const phoneNumber = "628137880759";

  const handleEnroll = (courseName: string) => {
    const message = `Halo Zilabs! Saya ingin join program: *${courseName}*. Mohon info selanjutnya.`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">

      {/* ☁️ BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">

          <div className="max-w-xl">
            <p className="text-xs tracking-[0.4em] text-gray-400 mb-4">
              ZILABS ACADEMY
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Learn Real Skills.{" "}
              <span className="bg-gradient-to-r from-neon-purple to-electric-blue text-transparent bg-clip-text">
                Build Real Products.
              </span>
            </h2>

            <p className="text-gray-500">
              Program pembelajaran berbasis pengalaman nyata, bukan sekadar teori.
            </p>
          </div>

          {/* PRICE BLOCK (SOFT, PREMIUM) */}
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through">
              Rp 1.000.000
            </p>
            <p className="text-3xl font-black text-dark-navy">
              Rp 750.000
            </p>
            <p className="text-xs text-gray-400">
              per program • khusus pelajar
            </p>
          </div>

        </div>

        {/* COURSES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[2.5rem] p-[1px]"
            >

              {/* GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 opacity-0 group-hover:opacity-100 transition" />

              {/* CARD */}
              <div className="relative bg-white rounded-[2.4rem] p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] h-full flex flex-col justify-between">

                <div>
                  {/* ICON */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 text-neon-purple group-hover:scale-110 transition">
                    {course.icon}
                  </div>

                  <span className="text-xs tracking-widest text-gray-400">
                    {course.level}
                  </span>

                  <h3 className="text-xl font-black mt-2 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {course.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleEnroll(course.title)}
                  className="flex items-center justify-between text-sm font-bold text-dark-navy group-hover:text-neon-purple transition"
                >
                  Join Program
                  <ArrowRight className="group-hover:translate-x-1 transition" />
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
