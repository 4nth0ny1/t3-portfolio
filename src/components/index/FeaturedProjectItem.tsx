import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";

type ProjectProps = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  githubUrl: string;
  websiteLink: string;
};

export default function FeaturedProject({
  id,
  title,
  image,
  subtitle,
  githubUrl,
  websiteLink,
}: ProjectProps) {
  return (
    <div className="py-40">
      <img src={image} alt="project_image" />
      <div className="px-40 py-12">
        <h2 className="py-4 text-3xl">{title}</h2>
        <h3 className="px-10 text-2xl">{subtitle}</h3>
        <div className="flex flex-row justify-between gap-4 px-10 py-6">
          <Link href="/blog/{id}">
            <button className="border-2 border-gray-300 px-4 py-2 text-sm hover:border-[#00d084]">
              VIEW PROJECT
            </button>
          </Link>
          <div>
            {githubUrl && (
              <Link href={githubUrl}>
                <button className="px-4 py-2 text-3xl hover:text-[#00d084]">
                  <BsGithub />
                </button>
              </Link>
            )}
            {websiteLink && (
              <Link href={websiteLink}>
                <button className="px-4 py-2 text-3xl hover:text-[#00d084]">
                  <BiLink />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
