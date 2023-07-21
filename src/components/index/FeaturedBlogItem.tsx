import { useState } from "react";

type FeaturedBlogProps = {
  id: string;
  title: string;
  image: string;
  tags: string[];
};

export default function FeaturedBlog({
  id,
  title,
  image,
  tags,
}: FeaturedBlogProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="bg-black text-[#999999]"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt="blog-image"
          className="h-[325px] w-full transition duration-1000 hover:scale-125"
        />
      </div>
      {isHovering ? (
        <div className="p-8">
          <h2 className="mb-8 mt-16 w-3/4 text-4xl text-white">{title}</h2>
          <div className="mb-10 flex flex-row gap-4 text-xs">
            {tags.map((tag) => {
              return (
                <p className="text-[#00d084]" key={tag}>
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-8">
          <h2 className="mb-8 mt-16 w-3/4 text-4xl">{title}</h2>
          <div className="mb-10 flex flex-row gap-4 text-xs">
            {tags.map((tag) => {
              return (
                <p className="opacity-30" key={tag}>
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
