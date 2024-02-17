import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Gallery />
    </main>
  );
}
