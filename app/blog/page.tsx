"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import useFetchPosts from "../../hooks/useFetchPosts";
import PostCard from "@/components/PostCard";
import Loading from "@/components/Loading";
function BlogPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const categoryId = Number(searchParams.get("category")) || 0;

  const { posts, loading, error } = useFetchPosts(keyword || categoryId);

  return (
    <div>
      <h1>Resultados da Busca</h1>
      {keyword && <h2>Palavra-chave: "{keyword}"</h2>}
      {categoryId > 0 && <h2>ID da Categoria: {categoryId}</h2>}

      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {error && <p>{error}</p>}

      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id} className="w-1/2 sm:w-1/3 lg:w-1/4 ">
            <PostCard
              title={post.title.rendered}
              imageUrl={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
              link={post.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
