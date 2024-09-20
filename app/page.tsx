import CardCarousel from "@/components/CardCarousel";
import CarrouselBlog from "@/components/CarrouselBlog";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <CardCarousel />
    </main>
  );
}
