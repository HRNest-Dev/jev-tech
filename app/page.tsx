import {
  Navigation,
  Hero,
  About,
  FlagshipProduct,
  Services,
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
        <FlagshipProduct />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
