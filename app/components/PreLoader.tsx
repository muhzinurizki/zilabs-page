"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 2 detik agar user sempat melihat animasi brand
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-deep-black flex flex-col items-center justify-center"
        >
          {/* Container Logo */}
          <div className="relative">
            {/* Efek Glow di belakang logo */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-violet-purple blur-3xl -z-10"
            />

            {/* Box Logo Z */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-24 h-24 bg-gradient-brand rounded-2xl flex items-center justify-center font-bold italic text-5xl text-white shadow-2xl"
            >
              Z
            </motion.div>
          </div>

          {/* Teks Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-col items-center"
          >
            <span className="text-2xl font-black tracking-[0.3em] text-white">ZILABS</span>
            <div className="mt-4 w-32 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-purple to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
