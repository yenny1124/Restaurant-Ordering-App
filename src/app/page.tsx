import NavBar from "./components/navbar/NavBar";
import HeroSection from "./sections/hero/HeroSection";
import GallerySection from "./sections/gallery/GallerySection";
import AboutSection from "./sections/about/AboutSection";
import LocationSection from "./sections/location/LocationSection";
export default function Home() {
  //navbar will be on each page instead of layout for now because there is some issue with it not being mounted first or something that idk how to fix rn
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <LocationSection />
    </main>
  );
}
