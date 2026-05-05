"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Code2, Trophy, Users } from "lucide-react";

const teamExpertise = [
  { label: "Laravel Development", level: "Expert" },
  { label: "React / Next.js", level: "Proper" },
  { label: "UI/UX Design", level: "Ultra-Premium" },
  { label: "System Architecture", level: "Secure" },
];

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section: Penjelasan Zilabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              The Story of Zilabs
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              Digital <br /> <span className="text-gray-500">Architects.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Zilabs (Zilabs Studio) lahir dari visi untuk menyediakan solusi teknologi yang tidak hanya berfungsi,
              tetapi juga memberikan pengalaman visual ultra-premium bagi UMKM dan instansi pendidikan.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col justify-end min-h-[200px]">
              <Trophy className="w-8 h-8 text-fuchsia-500 mb-4" />
              <h4 className="font-bold">Kualitas Proper</h4>
              <p className="text-xs text-gray-500">Standar industri Laravel & React.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 flex flex-col justify-end min-h-[200px]">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold">Fokus Edukasi</h4>
              <p className="text-xs text-gray-500">Membimbing Mahasiswa IT.</p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-32">
          <div className="p-1 rounded-[3rem] bg-gradient-to-r from-blue-600 via-fuchsia-600 to-blue-600">
            <div className="bg-black rounded-[2.9rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] bg-gray-800 overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Ganti dengan foto Anda: /muhzinur-rizki.jpg */}
                <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center text-4xl font-black italic text-white/20">
                  MR
                </div>
              </div>
              <div>
                <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
                  Founder & Lead Developer
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-4">Muhzinur Rizki</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                  Membangun Zilabs dengan dedikasi pada kode yang bersih dan desain yang futuristik.
                  Memastikan setiap proyek yang dikerjakan tim memiliki standar "Ultra-Premium".
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold">
                    Writers
                  </div>
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold">
                    Laravel Expert
                  </div>
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold">
                    React Architect
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tim Zilabs */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4 text-white">Zilabs Proper Team.</h2>
              <p className="text-gray-500 leading-relaxed">
                Tim teknis kami terdiri dari talenta berbakat yang mahir dalam ekosistem Laravel dan React,
                siap memberikan solusi digital terbaik untuk UMKM.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center min-w-[100px]">
                <div className="text-2xl font-black">100%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Commitment</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center min-w-[100px]">
                <div className="text-2xl font-black">24/7</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Support</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamExpertise.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group">
                <Code2 className="w-6 h-6 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">{item.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Entity */}
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
