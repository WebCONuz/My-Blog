import Title from "../ui/title";
import ProjectCard from "../cards/project-card";

const projects = [
  {
    id: 1,
    title: "Object recognition program",
    image: "/mini-apps/mini_algo.jpg",
    link: "https://tanibolish1.netlify.app",
  },
  {
    id: 2,
    title: "App for changing image contrast",
    image: "mini-apps/mini_contrast.jpg",
    link: "https://changeconvert.netlify.app",
  },
  {
    id: 3,
    title: "Snake game",
    image: "/mini-apps/mini_snake.jpg",
    link: "https://snake-game-3202.netlify.app",
  },
  {
    id: 4,
    title: "Multi-step authentication",
    image: "/mini-apps/mini_auth.jpg",
    link: "https://multi-step-authentication.netlify.app",
  },
  {
    id: 5,
    title: "Google translator",
    image: "/mini-apps/mini_trasnlator.jpg",
    link: "https://my-translator.netlify.app",
  },
  {
    id: 6,
    title: "Weather app",
    image: "/mini-apps/mini_weather.jpg",
    link: "https://simple-weather-project.netlify.app",
  },
];

function MiniappContainer() {
  return (
    <section
      id="portfolio-mini-app"
      className="main-content__portfolio w-[95%] mx-auto mb-16"
    >
      <Title
        title="Mini-app projects"
        description="Here are some mini-apps I have made"
      />
      <div className="flex justify-between flex-wrap">
        {projects.map((item) => (
          <ProjectCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default MiniappContainer;
