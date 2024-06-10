import { Suspense } from 'react'; // Added import for Suspense
import LandingPage from "@/components/Views/LandingPage";
import ShopDetails from "@/components/Views/ShopDetails";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import { allProductFetherFromSanity } from "@/components/utils/apicalling";
import { allProductFetherFromSanityType } from "@/components/utils/types";
import Image from "next/image";
import LoadingComponent from '@/components/ui/LoadingComponent';

export default function Home() {
  return (
    <>
      <LandingPage />
      <Suspense fallback={<LoadingComponent isCarousel={true} cardLimit={3} />}>
        <Carousel />
      </Suspense>
      <ShopDetails />
    </>
  );
}

async function Carousel() {
  let data = await allProductFetherFromSanity() as allProductFetherFromSanityType;

  return <ProductGridViewer ProducData={data.result.slice(0, 3)} />;
}
