import CarouselSection from "../sections/CarouselSection/CarouselSection";
import ProductListSection from "../sections/ProductListSection/ProductListSection";
import AboutSection from "../sections/AboutSection/AboutSection";
import MapSection from "../sections/MapSection/MapSection";

export default function HomePage() {
  return (
    <div id="home">
      <CarouselSection />
      <ProductListSection />
      <AboutSection />
      <MapSection/>
    </div>
  );
}
