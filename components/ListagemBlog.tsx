"use client"; // Adicione esta linha no topo do arquivo

import { useEffect, useState } from "react";
import axios from "axios";

// Definindo a interface para os dados do post
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
}

const ListagemBlog = () => {
  const [items, setItems] = useState<Post[]>([]); // Definindo o estado como um array de Post
  const [totalGroups, setTotalGroups] = useState(0);

  useEffect(() => {
    axios
      .get("https://www.olivas.digital/wp-json/wp/v2/posts?categories=373") // Limitando a resposta a 9 posts e usando _embed para imagens
      .then((response) => {
        setItems(response.data); // Definindo o tipo de items corretamente
        setTotalGroups(Math.ceil(response.data.length / 3)); // Calculando total de grupos (3 posts por grupo)
      })
      .catch((error) => {
        console.log("Erro ao obter dados da API", error);
      });
  }, []);
  return (
    <div className="overflow-x-auto">
      {" "}
      {Array.from({ length: totalGroups }).map((_, groupIndex) => (
        <div key={groupIndex} className="flex flex-shrink-0 w-full">
          {items.slice(groupIndex * 3, groupIndex * 3 + 3).map((item) => (
            <div
              key={item.id}
              className="flex-1 m-2 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center h-48">
                <p className="text-2xl font-semibold">{item.title.rendered}</p>
                {item._embedded?.["wp:featuredmedia"] && (
                  <img
                    src={item._embedded["wp:featuredmedia"][0].source_url}
                    alt={item.title.rendered}
                    className="h-full object-cover"
                  />
                )}
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt.rendered,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListagemBlog;
