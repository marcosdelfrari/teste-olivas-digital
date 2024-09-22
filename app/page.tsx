import Header from "@/components/Header";
import Seo from "@/components/Seo";
import SpaceSection from "@/components/SpaceSection";
import Performance from "@/components/Performance";
import Contato from "@/components/Contato";
import Blog from "@/components/Blog";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <div>
      <Header />
      <SpaceSection />
      <Seo />
      <SpaceSection />
      <Performance />
      <SpaceSection />
      <Blog />
      <SpaceSection />
      <Contato />
      <WhatsappFloat />
      <SpaceSection />
    </div>
  );
}
