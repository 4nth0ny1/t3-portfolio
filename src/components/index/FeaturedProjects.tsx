import FeaturedProjectItem from "./FeaturedProjectItem";

export default function FeaturedProjects() {
  const FAKE_PROJECTS = [
    {
      id: "one",
      image: "manageit.jpg",
      title: "T3-Manage-It",
      subtitle:
        "A 130-years-old Japanese brewery, only supplier to the Japanese Imperial Household, Sakari wants to help the world understand and enjoy sake better.",
      githubUrl: "https://github.com/4nth0ny1/t3-manage-it",
      websiteLink: "https://t3-manage-it.vercel.app/",
    },
    {
      id: "two",
      image: "newyorklife.jpg",
      title: "New York Life Recruiter Website",
      subtitle:
        "A 130-years-old Japanese brewery, only supplier to the Japanese Imperial Household, Sakari wants to help the world understand and enjoy sake better.",
      githubUrl: "",
      websiteLink: "https://nylfinancialprofessionalcareer.com/",
    },
    {
      id: "three",
      image: "reddit.jpg",
      title: "React Reddit",
      subtitle:
        "A 130-years-old Japanese brewery, only supplier to the Japanese Imperial Household, Sakari wants to help the world understand and enjoy sake better.",
      githubUrl: "https://github.com/4nth0ny1/reddit-front-2",
      websiteLink: "",
    },
  ];
  return (
    <div className="px-80">
      <h2 className="p-20 text-center text-2xl">SELECT PROJECTS</h2>
      {FAKE_PROJECTS.map((project) => {
        return (
          <FeaturedProjectItem
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
