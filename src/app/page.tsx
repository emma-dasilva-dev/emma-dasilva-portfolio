import Footer from "@/components/layout/Footer/Footer";

import Header from "@/components/layout/Header/Header";

import Hero from "@/components/home/Hero/Hero";

import HomeSections from "@/components/home/HomeSections/HomeSections";

import ThreadExperience from "@/components/three/ThreadExperience/ThreadExperience";

export default function Home() {
  return (
    <main
      className="site-shell"
    >
      <ThreadExperience />

      <Header />

      <div
        className="page-layer"
      >
        <Hero />

        <HomeSections />

        <Footer />
      </div>
    </main>
  );
}
