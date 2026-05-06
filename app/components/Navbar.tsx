"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const menu = [
  { name: "HOME", id: "home" },
  { name: "SERVICES", id: "services" },
  { name: "WORK", id: "portfolio" },
  { name: "ACADEMY", id: "course" },
  { name: "WHY", id: "why" },
  { name: "PRICING", id: "pricing" },
  { name: "FAQ", id: "faq" },
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  // 🔥 detect active section + hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // hide navbar when scroll down
      if (currentY > lastY && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(currentY);

      // detect active section
      menu.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  // 🎯 smooth scroll handler
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const top =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* 🔥 SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple to-electric-blue z-[60] origin-left"
      />

      {/* 💎 NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]"
      >
        <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-xl">

          {/* LOGO */}
          <div
            className="relative w-36 h-10 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <Image
              src="/Logo_Workmap_v2-removebg.png"
              alt="Zilabs"
              fill
              className="object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative group"
              >
                <span
                  className={`text-[11px] font-black tracking-[0.25em] transition ${active === item.id
                      ? "text-dark-navy"
                      : "text-dark-navy/50"
                    }`}
                >
                  {item.name}
                </span>

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-neon-purple to-electric-blue transition-all duration-300 ${active === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="relative px-6 py-3 rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue" />
              <span className="relative text-white text-[11px] font-black tracking-widest flex items-center gap-2">
                START PROJECT
                <ArrowRight size={14} />
              </span>
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <Menu size={26} />
          </button>
        </div>
      </motion.nav>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={30} />
            </button>

            {menu.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-3xl font-black tracking-widest"
              >
                {item.name}
              </motion.button>
            ))}

            <button
              onClick={() => scrollTo("contact")}
              className="mt-6 px-10 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-electric-blue text-white font-bold"
            >
              START PROJECT
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
