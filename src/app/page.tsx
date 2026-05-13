import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import Yacht from "@/components/Yacht";
import Schedule from "@/components/Schedule";
import Divider from "@/components/Divider";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Welcome />
      <Details />
      <Gallery />
      <Yacht />
      <Schedule />
      <Divider light />
      <Explore />
      <Footer />
    </main>
  );
}
