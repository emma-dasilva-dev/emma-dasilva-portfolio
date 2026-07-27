import Contact from "@/components/home/Contact/Contact";
import Hero from "@/components/home/Hero/Hero";
import Process from "@/components/home/Process/Process";
import Work from "@/components/home/Work/Work";

import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <Work />

      <Process />

      <Contact />

      <Footer />
    </main>
  );
}
