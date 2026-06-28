import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CTA from "../components/Cta";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-stone-100 transition-colors dark:bg-zinc-950">
      <Navbar />
      <Hero />
      <Features/>
      <CTA/>
      <Footer/>
    </main>
  );
}