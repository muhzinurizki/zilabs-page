import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Courses from "./components/Courses";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import FloatingWA from "./components/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Courses />
      <About />
      <Pricing />
      <Workflow />
      <FAQ />
      <CTA />
      <FloatingWA />
      <div className="pt-20 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.5em] mb-4">
            Supported By
          </p>
          <div className="text-xl font-black text-gray-400 tracking-tighter hover:text-white transition-colors cursor-default">
            NUSA KODE LABS
          </div>
        </div>
    </main>
  );
}
