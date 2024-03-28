import { Inter } from "next/font/google";
import HeroSection from "@/components/heroSection/HeroSection";
import Services from "@/components/services/Services";
import Collections from "@/components/collections/Collections";
import CollectionSlider from "@/components/collections/CollectionSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Collections />
      <CollectionSlider />
    </main>
  );
}
