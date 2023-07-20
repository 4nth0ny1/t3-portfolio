import FeaturedProject from "./FeaturedProject";

export default function FeaturedProjects() {
  const FAKE_PROJECTS = [
    {
      id: "one",
      image: "martin-martz-circles.jpg",
      title: "T3-Manage-It",
      subtitle:
        "A 130-years-old Japanese brewery, only supplier to the Japanese Imperial Household, Sakari wants to help the world understand and enjoy sake better.",
      githubUrl: "https://github.com/4nth0ny1/t3-manage-it",
      websiteLink: "https://t3-manage-it.vercel.app/",
    },
    {
      id: "two",
      image: "adam-bignell-coast.jpg",
      title: "Why We Need Strong Brands for a Tough World",
      subtitle:
        "A 130-years-old Japanese brewery, only supplier to the Japanese Imperial Household, Sakari wants to help the world understand and enjoy sake better.",
      githubUrl: "",
      websiteLink: "",
    },
    {
      id: "three",
      image: "jaredd-craig-mist.jpg",
      title: "5 Personal Branding Examples From Our Portfolio",
      subtitle:
        "A 130-years-old Japanese brewery, only supplier to the Japanese Imperial Household, Sakari wants to help the world understand and enjoy sake better.",
      githubUrl: "",
      websiteLink: "",
    },
  ];
  return (
    <div className="bg-[#E3E3E3] px-40">
      <h2 className="p-20 text-center text-sm">SELECT PROJECTS</h2>
      {FAKE_PROJECTS.map((project) => {
        return (
          <FeaturedProject
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
            githubUrl={project.githubUrl}
            websiteLink={project.websiteLink}
          />
        );
      })}
    </div>
  );
}
