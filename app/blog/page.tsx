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
    <div className="pt-28 mx-5 sm:m-0">
      <h1 className="text-3xl sm:text-4xl font-semibold text-secondary weight-600">
        Resultados da Busca
      </h1>
      {keyword && (
        <h2>
          Palavra-chave: <span className="text-primary">{keyword}</span>
        </h2>
      )}

      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {error && <p>{error}</p>}

      {/* Verifica se posts é um array antes de renderizar */}
      {Array.isArray(posts) && posts.length > 0 ? (
        <div className="flex my-5 flex-wrap">
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
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
}

export default BlogPage;
