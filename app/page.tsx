import { Nav } from "@/components/site/nav";
import { HeroCinematic } from "@/components/site/hero-cinematic";
import { Hero } from "@/components/site/hero";
import { SourcesBand } from "@/components/site/sources-band";
import { Problem } from "@/components/site/problem";
import { Solution } from "@/components/site/solution";
import { HowItWorks } from "@/components/site/how-it-works";
import { Echipa } from "@/components/site/echipa";
import { Faq } from "@/components/site/faq";
import { EarlyAccess } from "@/components/site/early-access";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav cinematicHero />
      <main className="flex-1">
        {/* Filmul deschide pagina; eroul cu demo-ul și butoanele vine imediat
            după, ca vizitatorul să ajungă repede la ceva ce poate folosi. */}
        <HeroCinematic />
        <Hero />
        <SourcesBand />
        <Problem />
        <Solution />
        <HowItWorks />
        <Echipa />
        <Faq />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
