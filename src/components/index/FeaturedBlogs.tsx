import Link from "next/link";
import FeaturedBlogItem from "./FeaturedBlogItem";

export default function FeaturedBlogs() {
  const FAKE_BLOGS = [
    {
      id: "one",
      image: "martin-martz-circles.jpg",
      title: "4 Venue Branding Examples From Our Portfolio",
      tags: ["CODING", "DEVELOPMENT"],
    },
    {
      id: "two",
      image: "adam-bignell-coast.jpg",
      title: "Why We Need Strong Brands for a Tough World",
      tags: ["SEO", "STRATEGY"],
    },
    {
      id: "three",
      image: "jaredd-craig-mist.jpg",
      title: "5 Personal Branding Examples From Our Portfolio",
      tags: ["BRANDING", "STRATEGY"],
    },
  ];
  return (
    <div className="px-40 pt-32">
      <h2 className="mb-32 text-center font-thin text-[#999999] ">
        FROM THE BLOG
      </h2>
      <div className="flex w-full flex-col gap-8 md:flex-row">
        {FAKE_BLOGS.map((blog) => {
          return (
            <FeaturedBlogItem
              key={blog.id}
              id={blog.id}
              image={blog.image}
              title={blog.title}
              tags={blog.tags}
            />
          );
        })}
      </div>
      <div className="mt-20 text-center">
        <Link href="/blog">
          <button className="border border-white px-6 py-2 font-bold text-white">
            READ ALL
          </button>
        </Link>
      </div>
    </div>
  );
}
