// app/page.tsx
"use client";

import Busca from "@/components/Busca";
import CarrouselBlog from "@/components/CarrouselBlog";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSearch = (query: string, type: string) => {
    const formattedQuery = encodeURIComponent(query);
    router.push(`/blog?${type}=${formattedQuery}`); // Redireciona com base no tipo
  };

  return (
    <div>
      <h1>Buscar Posts</h1>
      <Busca onSearch={handleSearch} /> {/* Passa a função correta */}
      <CarrouselBlog />
    </div>
  );
}
