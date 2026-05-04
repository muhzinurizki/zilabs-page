"use client";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-deep-black relative overflow-hidden text-white">
      {/* Decorative Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-purple/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Identity */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center font-bold italic text-white">
                Z
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">ZILABS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Partner teknologi terpercaya untuk membangun, meluncurkan, dan mengembangkan solusi digital masa depan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-violet-purple/20 transition-colors text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-violet-purple/20 transition-colors text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-violet-purple/20 transition-colors text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">Layanan</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Web Development <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Sistem Custom <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
              <li>
                <a href="#course" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Zilabs Academy <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#why" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Harga Paket</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">Kontak</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-violet-purple flex-shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">hello@zilabs.id</span>
              </li>
              <li className="text-xs leading-relaxed text-gray-500">
                Tangerang, Banten<br />
                Indonesia
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] md:text-xs tracking-wide">
            © {currentYear} ZILABS TECHNOLOGY. FOUNDED BY <span className="text-gray-300 font-bold uppercase tracking-widest">Muhzinur Rizki</span>.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
