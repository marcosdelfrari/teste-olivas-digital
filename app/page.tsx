import CarrouselBlog from "@/components/CarrouselBlog";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Seo from "@/components/Seo";
import SpaceSection from "@/components/SpaceSection";
import Performance from "@/components/Performance";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <div>
      <Header />
      <SpaceSection />
      <Seo />
      <SpaceSection />
      <Performance />
      <SpaceSection />
      <CarrouselBlog />
      <SpaceSection />
      <Contato />
      <SpaceSection />
    </div>
  );
}
