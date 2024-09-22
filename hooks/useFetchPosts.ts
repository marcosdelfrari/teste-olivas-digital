import { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  featured_media?: number;
  _embedded?: {
    "wp:featuredmedia": Array<{
      source_url: string;
    }>;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
}

function useFetchPosts(query: string | number, perPage: number = 99) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    let url = `https://www.olivas.digital/wp-json/wp/v2/posts?per_page=${perPage}&_embed`;

    if (typeof query === "number" && query > 0) {
      url += `&categories=${query}`;
    } else if (typeof query === "string" && query) {
      url += `&search=${encodeURIComponent(query)}`;
    }

    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao obter dados da API");
        setLoading(false);
      });
  }, [query, perPage]);

  return { posts, loading, error };
}

export default useFetchPosts;
