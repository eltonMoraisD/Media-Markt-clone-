import CaroselProduct from "@/components/CaroselProduct";
import Header from "@/components/Header";
import ProductCategories from "@/components/ProductCategories/ProductCategories";
import Top from "@/components/TopDown";
import BanerCarousel from "../components/CarouselBaner";
import BigCard from "@/components/BigCard";


export default function Home() {
  return (
    <main>
      <Header />
      <Top />
      <BanerCarousel />
      <ProductCategories />
      <BigCard />
      <CaroselProduct />
    </main>
  );
}
