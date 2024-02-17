import NavBar from "./components/navbar/NavBar";
import Hero from "./sections/hero/Hero";
import Gallery from "./sections/gallery/Gallery";
export default function Home() {
  //navbar will be on each page instead of layout for now because there is some issue with it not being mounted first or something that idk how to fix rn
  return (
    <main>
      <NavBar />
      <Hero />
      <Gallery />
    </main>
  );
}
