import AnimatedLogos from "@/components/AnimatedLogos";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AnimatedLogos />
      <Features />
      <Pricing />
      <Testimonials />
    </main>
  );
}
