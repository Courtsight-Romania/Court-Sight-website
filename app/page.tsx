import { Nav } from "@/components/site/nav";
import { HeroCinematic } from "@/components/site/hero-cinematic";
import { Hero } from "@/components/site/hero";
import { SourcesBand } from "@/components/site/sources-band";
import { Problem } from "@/components/site/problem";
import { PhotoBand } from "@/components/site/photo-band";
import { Solution } from "@/components/site/solution";
import { HowItWorks } from "@/components/site/how-it-works";
import { NotBuilding } from "@/components/site/not-building";
import { Faq } from "@/components/site/faq";
import { EarlyAccess } from "@/components/site/early-access";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Filmul deschide pagina; eroul cu demo-ul și butoanele vine imediat
            după, ca vizitatorul să ajungă repede la ceva ce poate folosi. */}
        <HeroCinematic />
        <Hero />
        <SourcesBand />
        <Problem />
        <PhotoBand />
        <Solution />
        <HowItWorks />
        <NotBuilding />
        <Faq />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
