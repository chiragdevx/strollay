import { Inter } from "next/font/google";
import HeroSection from "@/components/heroSection/HeroSection";
import Services from "@/components/services/Services";
import Collections from "@/components/collections/Collections";
import CollectionSlider from "@/components/collections/CollectionSlider";
import CTA from "@/components/CTA/CTA";
import collectionApi from "@/api/collectionApi";
import { useEffect } from "react";
import { collectionActions } from "@/store/actions/collection";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collectionActions.getCollections());
  }, []);
  return (
    <main>
      <HeroSection />
      <Services />
      <Collections />
      <CollectionSlider />
      <CTA />
    </main>
  );
}

// export async function getServerSideProps() {
//   const response: any = await collectionApi.getCollections();

//   const { data } = response.data;

//   // Pass data to the page via props
//   return { props: { data } };
// }
