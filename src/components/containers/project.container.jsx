import Title from "../ui/title";
import ProjectCard from "../cards/project-card";

const projects = [
  {
    id: 1,
    title: "Miniature",
    image: "/portfolio/miniature.jpg",
    link: "https://miniature.uz",
  },
  {
    id: 2,
    title: "Universal bank",
    image: "/portfolio/universal.jpg",
    link: "https://universalbank.uz",
  },
  {
    id: 3,
    title: "Petfood e-commerse",
    image: "/portfolio/kw.jpg",
    link: "https://k-w.uz",
  },
  {
    id: 4,
    title: "Online library of TUIT Samarkand branch",
    image: "/portfolio/library.png",
    link: "https://lib.samtuit.uz",
  },
  {
    id: 5,
    title: "HomeDev website",
    image: "/portfolio/homedev.jpg",
    link: "https://homedev.uz",
  },
  {
    id: 6,
    title: '"Buyuk Bilim" website',
    image: "/portfolio/learning-center.webp",
    link: "https://buyukbilim.uz",
  },
  {
    id: 7,
    title: "Anex travel website",
    image: "/portfolio/anex.jpg",
    link: "https://anextravel.uz",
  },
  {
    id: 8,
    title: "Zamin avto website",
    image: "/portfolio/zaminavto.jpg",
    link: "https://zaminavto.uz",
  },
  {
    id: 9,
    title: "Pharmlive",
    image: "/portfolio/pharmlive.jpg",
    link: "https://pharmlive.uz",
  },
];

function ProjectContainer() {
  return (
    <section
      id="portfolio"
      className="main-content__portfolio w-[95%] mx-auto mb-16"
    >
      <Title
        title="Real Projects"
        description="Real projects I have worked on"
      />
      <div className="flex justify-between flex-wrap">
        {projects.map((item) => (
          <ProjectCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContainer;
