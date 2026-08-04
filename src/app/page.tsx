import Build from "@/components/home/Build/Build";
import Contact from "@/components/home/Contact/Contact";
import Hero from "@/components/home/Hero/Hero";
import Think from "@/components/home/Think/Think";
import Tools from "@/components/home/Tools/Tools";
import Who from "@/components/home/Who/Who";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Who />
        <Build />
        <Think />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
