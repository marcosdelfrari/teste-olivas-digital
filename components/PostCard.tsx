import React from "react";
import Image from "next/image";

interface PostCardProps {
  imageUrl?: string;
  title: string;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({ imageUrl, title, link }) => {
  return (
    <a target="_blank" href={link}>
      <div className="flex-1 custom-shadow sm:p-7 p-4 w-90  m-2 rounded-3xl">
        <div className="flex flex-col items-center justify-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              className="sm:h-[11.56rem] w-full object-cover"
              width="347"
              height="185"
              quality="100"
            />
          )}
          <p className="text-md lg:text-lg text-[#5d5d5d] mt-3 lg:mt-6 line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
