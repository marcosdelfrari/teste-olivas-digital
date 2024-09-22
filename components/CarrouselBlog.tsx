"use client";
import Image from "next/image";
import useFetchPosts from "@/hooks/useFetchPosts";
import useResponsiveItems from "@/hooks/useResponsiveItems";
import useCarousel from "@/hooks/useCarousel";
import Loading from "./Loading";

function CarrouselBlog() {
  const { itemsPerGroup, postsPerPage } = useResponsiveItems(); // Usando ambos os valores do hook
  const { posts, loading, error } = useFetchPosts(373, postsPerPage); // Passando o valor de postsPerPage dinamicamente
  const totalGroups = Math.ceil(posts.length / itemsPerGroup);
  const { activeIndex, handleDotClick } = useCarousel(totalGroups);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="mx-5">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {Array.from({ length: totalGroups }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex mb-10 flex-shrink-0 w-full">
              {posts
                .slice(
                  groupIndex * itemsPerGroup,
                  groupIndex * itemsPerGroup + itemsPerGroup
                )
                .map((post) => (
                  <div
                    key={post.id}
                    className="flex-1 custom-shadow sp-5 lg:p-10 p-4 sm:w-1/3 sm:m-4 m-2 rounded-3xl"
                  >
                    <div className="flex flex-col items-center justify-center">
                      {post._embedded?.["wp:featuredmedia"] && (
                        <Image
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                          className="h-[11.56rem] w-full object-cover"
                          width="347"
                          height="185"
                          quality="100"
                        />
                      )}
                      <p className="text-lg sm:text-2xl text-[#5d5d5d] my-3 sm:my-6 line-clamp-2">
                        {post.title.rendered}
                      </p>
                      <p
                        className="sm:text-lg text-sm leading-[1.5rem] text-[#7f7f7f] text-left line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                      <button className="sm:w-[10.9rem] w-full sm:h-[3.5rem] px-[0.5rem] py-[0.3rem] sm:p-0 mt-[1.56rem] gap-[10px] border-[2px] text-normal border-primary text-primary sm:text-[1.25rem] font-[700] rounded-[3.2rem]">
                        <a target="_blank" href={post.link}>
                          Leia mais
                        </a>
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
