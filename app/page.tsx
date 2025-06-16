import Bento from "../components/sections/bento/default";
// import CTA from "../components/sections/cta/default";
// import FAQ from "../components/sections/faq/default";
import Feature from "../components/sections/feature/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
// import Logos from "../components/sections/logos/default";
// import Pricing from "../components/sections/pricing/default";
// import Stats from "../components/sections/stats/default";
import Teams from "../components/sections/teams/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Hero />
      {/* <Logos /> */}
      <Feature />
      <Bento />
      <Items />
      <Teams />
      {/* <Stats /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}
