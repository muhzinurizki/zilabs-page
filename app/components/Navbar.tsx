"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link"; // Gunakan Link untuk multi-page
import { usePathname } from "next/navigation"; // Untuk deteksi halaman aktif
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Layanan", href: "../services" },
  { name: "Portfolio", href: "../portfolio" },
  { name: "Academy", href: "../academy" },
  { name: "Tentang", href: "../about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup mobile menu otomatis saat pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-magenta-600 rounded-xl flex items-center justify-center font-bold italic text-white shadow-[0_0_15px_rgba(123,97,255,0.3)] group-hover:scale-110 transition-transform">
            Z
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">ZILABS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Underline Indicator */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-fuchsia-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </div>

          <div className="h-6 w-px bg-white/10 mx-2" />

          <Link href="/contact">
            <button className="px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all active:scale-95 flex items-center gap-2 group">
              Mulai Proyek
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full md:hidden bg-black border-b border-white/5 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-bold tracking-tight transition-colors ${
                    pathname === link.href ? "text-white" : "text-gray-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-white/5 my-2" />
              <Link href="/contact" className="w-full">
                <button className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3">
                  Konsultasi Sekarang
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
