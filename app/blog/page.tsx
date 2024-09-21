// app/blog/page.tsx
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import useFetchPosts from "../../hooks/useFetchPosts";
import PostCard from "@/components/PostCard"; // Importa o novo componente

function BlogPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || ""; // Palavra-chave
  const categoryId = Number(searchParams.get("category")) || 0; // ID da categoria

  const { posts, loading, error } = useFetchPosts(keyword || categoryId); // Chama a função com base no tipo de busca

  return (
    <div>
      <h1>Resultados da Busca</h1>
      {keyword && <h2>Palavra-chave: "{keyword}"</h2>}
      {categoryId > 0 && <h2>ID da Categoria: {categoryId}</h2>}

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title.rendered}
            imageUrl={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            excerpt={post.excerpt.rendered}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
