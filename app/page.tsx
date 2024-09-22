import CarrouselBlog from "@/components/CarrouselBlog";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import SpaceSection from "@/components/SpaceSection";
import Performance from "@/components/Performance";

export default function Home() {
  return (
    <div>
      <Header />
      <SpaceSection />
      <Seo />
      <SpaceSection />
      <Performance />
      <CarrouselBlog />
    </div>
  );
}
