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
    </main>
  );
}
