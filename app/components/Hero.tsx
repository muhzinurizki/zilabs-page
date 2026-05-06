"use client";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Cpu, Rocket } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#FAFAFA]">

      {/* 🔮 CURSOR GLOW (disable on mobile biar ga berat) */}
      <motion.div
        className="hidden md:block pointer-events-none fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 blur-[120px] z-0"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* ☁️ CLOUD BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px]"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-electric-blue/20 rounded-full blur-[140px]"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* 📝 LEFT */}
        <div className="lg:col-span-7">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-widest text-gray-500 font-semibold">
              OPEN FOR PROJECT
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.1] font-black tracking-tight mb-6"
          >
            We Build{" "}
            <span className="bg-gradient-to-r from-neon-purple to-electric-blue text-transparent bg-clip-text">
              Digital Experience
            </span>
            <br />
            That Drives{" "}
            <span className="italic font-light">Growth.</span>
          </motion.h1>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm md:text-base text-gray-500 max-w-md md:max-w-lg mb-10 leading-relaxed"
          >
            Kami bantu brand & UMKM scale dengan teknologi modern —
            bukan cuma website, tapi sistem yang benar-benar menghasilkan.
          </motion.p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-dark-navy text-white font-bold rounded-xl md:rounded-2xl overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition" />
              <span className="relative flex items-center justify-center gap-2 text-xs md:text-sm tracking-wider uppercase">
                Start Project
                <ChevronRight className="group-hover:translate-x-1 transition" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 md:px-10 md:py-5 border border-gray-200 rounded-xl md:rounded-2xl font-bold hover:shadow-lg transition text-xs md:text-sm w-full sm:w-auto"
            >
              View Work
            </motion.button>

          </div>
        </div>

        {/* 💎 RIGHT */}
        <div className="lg:col-span-5 relative flex justify-center mt-10 lg:mt-0">
          <motion.div
            style={{ y: y1 }}
            className="relative w-[260px] sm:w-[320px] md:w-[380px] aspect-square"
          >

            {/* Glass */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] border border-white/60 shadow-2xl rotate-2" />

            {/* Logo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-full h-full p-10 md:p-14"
            >
              <Image
                src="/Logo_Icon_v2.png"
                alt="Zilabs"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Floating Icons (hide on small) */}
            <motion.div
              className="hidden sm:block absolute top-6 -right-4 bg-white p-3 rounded-xl shadow-lg"
              animate={{ y: [0, -8, 0] }}
            >
              <Rocket className="text-neon-purple w-5 h-5" />
            </motion.div>

            <motion.div
              className="hidden sm:block absolute bottom-6 -left-4 bg-white p-3 rounded-full shadow-lg"
              animate={{ y: [0, 8, 0] }}
            >
              <Cpu className="text-electric-blue w-5 h-5" />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
