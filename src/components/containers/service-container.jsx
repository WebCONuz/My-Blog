import Title from "../ui/title";
import ServiceCard from "../cards/service-card";

const services = [
  {
    id: 1,
    title: "Responsive Design",
    image: "/services/responsive.png",
    text: "Creating a responsive web template",
  },
  {
    id: 2,
    title: "CRM systems",
    image: "/services/crm.png",
    text: "CRM systems to grow your business",
  },
  {
    id: 3,
    title: "SPA",
    image: "/services/spa.png",
    text: "Creating a Single Page Applications",
  },
  {
    id: 4,
    title: "backend architecture",
    image: "/services/architect.png",
    text: "Building backend applications and their architecture",
  },
  {
    id: 5,
    title: "telegram bot",
    image: "/services/bot.png",
    text: "Creating all kinds of telegram bots",
  },
  {
    id: 6,
    title: "Hosting",
    image: "/services/hosting.png",
    text: "Domen, Hosting and SEO optimization",
  },
];

function ServiceContainer() {
  return (
    <section
      id="services"
      className="main-content__services w-[95%] mx-auto mb-16"
    >
      <Title
        title="my services"
        description="I can offer several of my services for you. You can get acquainted with them below."
      />
      <div className="flex justify-between flex-wrap">
        {services.map((item) => (
          <ServiceCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default ServiceContainer;
