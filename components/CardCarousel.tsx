"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

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

function CardCarousel() {
  {
    const [items, setItems] = useState<Post[]>([]);
    const [totalGroups, setTotalGroups] = useState(0);

    useEffect(() => {
      axios
        .get(
          "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373&per_page=1&_embed"
        )
        .then((response) => {
          setItems(response.data);
          setTotalGroups(Math.ceil(response.data.length / 3));
        })
        .catch((error) => {
          console.log("Erro ao obter dados da API", error);
        });
    }, []);

    return (
      <div>
        {Array.from({ length: totalGroups }).map((_, groupIndex) => (
          <div key={groupIndex} className="flex flex-shrink-0 w-full">
            {items.slice(groupIndex * 3, groupIndex * 3 + 3).map((item) => (
              <div
                key={item.id}
                className="flex-1 m-2 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center justify-center h-48">
                  <p className="text-2xl font-semibold">
                    {item.title.rendered}
                  </p>
                  {item._embedded?.["wp:featuredmedia"] && (
                    <Image
                      src={item._embedded["wp:featuredmedia"][0].source_url}
                      alt={item.title.rendered}
                      className="h-full object-cover"
                      width="180"
                      height="180"
                      quality="100"
                    ></Image>
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
  }
}

export default CardCarousel;
