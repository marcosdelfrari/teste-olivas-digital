"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { id } from "../lib/data";

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
    const widthImg = "347";
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
              <div key={item.id} className="flex-1 w-[24.66rem] m-[1.56rem]">
                <div className="flex flex-col items-center justify-center ">
                  {item._embedded?.["wp:featuredmedia"] && (
                    <Image
                      src={item._embedded["wp:featuredmedia"][0].source_url}
                      alt={item.title.rendered}
                      className="h-[11.56rem] w-[24.66rem] object-cover"
                      width={widthImg}
                      height="750"
                      quality="100"
                    ></Image>
                  )}
                  <p className="text-[1.56rem] text-[#5d5d5d] my-[1.56rem] line-clamp-2">
                    {item.title.rendered}
                  </p>
                  <p
                    className="text-[20px] leading-[1.5rem] text-[#7f7f7f] text-left line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: item.excerpt.rendered,
                    }}
                  />
                  <button className="w-[173px] h-[56px] py-[20px] px-[30px] gap-[10px] rounded-[50px_0_0_0] border-[2px] border-[#c6b92d] opacity-0">
                    Seu texto aqui
                  </button>
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
