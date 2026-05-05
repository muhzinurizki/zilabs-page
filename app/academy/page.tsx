"use client";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  GraduationCap,
  Rocket,
  Terminal,
  Users
} from "lucide-react";
import Navbar from "../components/Navbar";

const academyFeatures = [
  {
    title: "Kurikulum Industri",
    desc: "Materi yang disusun berdasarkan kebutuhan riil di Zilabs Studio, fokus pada Laravel dan React.",
    icon: <Terminal className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Mentoring Direct",
    desc: "Bimbingan langsung dari praktisi yang menangani proyek UMKM dan sistem custom.",
    icon: <Users className="w-6 h-6 text-fuchsia-500" />
  },
  {
    title: "Real Project",
    desc: "Mahasiswa tidak hanya belajar teori, tapi terlibat dalam simulasi proyek nyata.",
    icon: <Rocket className="w-6 h-6 text-purple-500" />
  }
];

const courses = [
  {
    title: "Fullstack Laravel & React",
    target: "Mahasiswa IT & Fresh Graduate",
    duration: "8 Minggu",
    price: "RP 2.500.000",
    features: [
      "Mastering Laravel 11 & React 18",
      "Restful API & Authentication",
      "Deployment ke Vercel & VPS",
      "Portfolio Review"
    ],
    isPopular: true
  },
  {
    title: "Frontend Master (Next.js)",
    target: "Mahasiswa IT",
    duration: "4 Minggu",
    price: "RP 1.500.000",
    features: [
      "Next.js App Router",
      "Framer Motion Animation",
      "Tailwind CSS Expert",
      "TypeScript Basic"
    ],
    isPopular: false
  }
];

export default function AcademyPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Academy */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold tracking-widest uppercase">Mencetak Developer Proper</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Zilabs Academy.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Jembatan antara dunia akademik dan industri. Kami membantu mahasiswa IT menguasai tech stack yang benar-benar digunakan oleh Zilabs Studio.
          </p>
        </div>

        {/* Kenapa Harus Zilabs Academy? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {academyFeatures.map((feat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5">{feat.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Kursus Tersedia */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Program Unggulan</h2>
              <p className="text-gray-500">Pilih spesialisasi yang sesuai dengan karir impian Anda.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[3rem] border transition-all relative overflow-hidden ${
                  course.isPopular ? 'bg-white/10 border-blue-500/50' : 'bg-white/5 border-white/10'
                }`}
              >
                {course.isPopular && (
                  <span className="absolute top-8 right-8 px-4 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                    Paling Diminati
                  </span>
                )}

                <h3 className="text-3xl font-black mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-8">{course.target}</p>

                <div className="space-y-4 mb-12">
                  {course.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Durasi {course.duration}</span>
                    <span className="text-3xl font-black">{course.price}</span>
                  </div>
                  <button className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform active:scale-95">
                    Daftar Sekarang
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="p-12 rounded-[3rem] bg-gradient-to-r from-blue-600/20 to-fuchsia-600/20 border border-white/10 text-center">
          <Cpu className="w-12 h-12 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Butuh Kurikulum Khusus UMKM?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Kami juga menyediakan pelatihan digital dasar untuk pelaku UMKM agar bisa mengelola website dan sistem mereka secara mandiri.
          </p>
          <button className="text-sm font-bold underline decoration-fuchsia-500 underline-offset-8">
            Hubungi Konsultan Pendidikan Kami
          </button>
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
