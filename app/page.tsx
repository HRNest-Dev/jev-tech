import {
  Navigation,
  Hero,
  About,
  Services,
  Portfolio,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
