import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Clients,
  About,
  Services,
  Impact,
  Works,
  Portfolio,
  Packages,
  Contact,
} from "@/components/sections";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Impact />
        <Works />
        <Portfolio />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
