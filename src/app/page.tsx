import HeroSection from "./sections/hero/HeroSection";
import GallerySection from "./sections/gallery/GallerySection";
import AboutSection from "./sections/about/AboutSection";
import LocationSection from "./sections/location/LocationSection";
import ConveyorBelt from "./components/conveyorbelt/ConveyorBelt";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <LocationSection />
      <ConveyorBelt />
    </main>
  );
}
