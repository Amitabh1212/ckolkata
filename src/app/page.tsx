import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Services,
  Clients,
  Packages,
  Portfolio,
  Contact,
  Impact,
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
        <Services />
        <Portfolio />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
