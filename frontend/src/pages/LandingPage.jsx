import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-stone-100 transition-colors dark:bg-zinc-950">
      <Navbar />
      <Hero />
      <Features/>
      <Footer/>
    </main>
  );
}