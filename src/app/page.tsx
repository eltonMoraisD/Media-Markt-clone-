import Baner from "@/components/Baner";
import CaroselProduct from "@/components/CaroselProduct";
import ProductCategories from "@/components/ProductCategories/ProductCategories";

export default function Home() {
  return (
    <main>
      <Baner
        source={
          "https://mediamarkt.lu/cdn/shop/files/BANNER_LASTCHANCE_HOME_1296x.jpg?v=1694790891"
        }
      />
      <ProductCategories />
      <Baner
        source={
          "https://mediamarkt.lu/cdn/shop/files/apple_22.09_493b4bbb-4004-4a6e-8e52-8b4fc9d347a1_1296x.jpg?v=1695301631"
        }
      />
      <CaroselProduct />
    </main>
  );
}
