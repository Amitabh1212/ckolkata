import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Services,
  Clients,
  Packages,
  Portfolio,
  Contact,
  Impact,
  Works,
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
        <Impact />
        <Works />
        <Services />
        <Portfolio />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
