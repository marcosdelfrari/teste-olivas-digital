"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import useResponsiveItems from "@/hooks/useResponsiveItems";
import useCarousel from "@/hooks/useCarousel";

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

function CarrouselBlog() {
  const [items, setItems] = useState<Post[]>([]);
  const itemsPerGroup = useResponsiveItems();
  const totalGroups = Math.ceil(items.length / itemsPerGroup);
  const { activeIndex, handlePrev, handleNext, handleDotClick } =
    useCarousel(totalGroups);

  useEffect(() => {
    axios
      .get(
        "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373&per_page=9&_embed"
      )
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log("Erro ao obter dados da API", error);
      });
  }, []);

  return (
    <div className="mx-5">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {Array.from({ length: totalGroups }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex mb-10 flex-shrink-0 w-full">
              {items
                .slice(
                  groupIndex * itemsPerGroup,
                  groupIndex * itemsPerGroup + itemsPerGroup
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex-1 custom-shadow p-10 sm:w-1/3 m-4 rounded-3xl"
                  >
                    <div className="flex flex-col items-center justify-center">
                      {item._embedded?.["wp:featuredmedia"] && (
                        <Image
                          src={item._embedded["wp:featuredmedia"][0].source_url}
                          alt={item.title.rendered}
                          className="h-[11.56rem] w-full object-cover"
                          width="347"
                          height="185"
                          quality="100"
                        />
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
                      <button className="sm:w-[10.9rem] sm:h-[3.5rem] px-[0.5rem] py-[0.3rem] sm:p-0 mt-[1.56rem] gap-[10px] border-[2px] text-normal border-primary text-primary sm:text-[1.25rem] font-[700] rounded-[3.2rem]">
                        Leia mais
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              index === activeIndex ? "bg-indigo-600" : "bg-gray-300"
            }`}
            aria-label={`Go to group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarrouselBlog;
