import React from "react";
import CarouselBlog from "./CarouselBlog";

function Blog() {
  return (
    <div>
      <div className="flex items-center mb-10 gap-1 justify-center">
        <h1 className="text-3xl sm:text-4xl font-semibold weight-600">
          Últimas do
        </h1>
        <h1 className="text-3xl sm:text-4xl font-semibold text-secondary weight-600">
          Blog
        </h1>
      </div>
      <CarouselBlog />
      <div className="flex items-center justify-center mt-10">
        <button className="bg-primary sm:h-[64px] sm:w-[360px] h-[46px] w-[200px] rounded-full py-2 px-4  text-sm font-medium text-white hover:bg-secondary focus:outline-none">
          Veja Mais
        </button>
      </div>
    </div>
  );
}

export default Blog;
