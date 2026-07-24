import Contact from "@/components/home/Contact/Contact";

import Hero from "@/components/home/Hero/Hero";

import HowIThink from "@/components/home/HowIThink/HowIThink";

import SelectedWork from "@/components/home/SelectedWork/SelectedWork";

import Stories from "@/components/home/Stories/Stories";

import Footer from "@/components/layout/Footer/Footer";

import Header from "@/components/layout/Header/Header";

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

        <SelectedWork />

        <HowIThink />

        <Stories />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}