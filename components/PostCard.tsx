import React from "react";

interface PostCardProps {
  imageUrl?: string;
  title: string;
  excerpt: string;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  title,
  excerpt,
  link,
}) => {
  return (
    <div className="w-1/4">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        Leia mais
      </a>
    </div>
  );
};

export default PostCard;
