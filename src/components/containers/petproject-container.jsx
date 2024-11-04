import Title from "../ui/title";
import PetProjectCard from "../cards/petproject-card";

const projects = [
  {
    id: 1,
    title: "CV Builder",
    image: "/mini-apps/resume.jpg",
    link: "https://cv-makeruz.netlify.app",
  },
  {
    id: 2,
    title: "Shipmate CRM",
    image: "mini-apps/crm2.jpg",
    link: "https://shipmate-demo.netlify.app",
  },
  {
    id: 3,
    title: "The Future CRM",
    image: "/mini-apps/crm.jpg",
    link: "https://future-crm.netlify.app",
  },
  {
    id: 4,
    title: "Uzum clone",
    image: "/mini-apps/mandarin.jpg",
    link: "https://mandarin-shop.netlify.app",
  },
  {
    id: 5,
    title: "WebCON Academy",
    image: "/mini-apps/my-course.jpg",
    link: "https://webcon.netlify.app",
  },
  {
    id: 6,
    title: "HomeDev Black",
    image: "/mini-apps/homedev_black.jpg",
    link: "https://uzhomedev.netlify.app",
  },
  {
    id: 7,
    title: "Medizin",
    image: "/mini-apps/medizin.jpg",
    link: "https://med-technique.netlify.app",
  },
  {
    id: 8,
    title: "Pharmlive Design",
    image: "/mini-apps/pharmlive.jpg",
    link: "https://pharm-live.netlify.app",
  },
  {
    id: 9,
    title: "HomeDev Green",
    image: "/mini-apps/homedev_green.jpg",
    link: "https://homedev-pro.netlify.app",
  },
  {
    id: 10,
    title: "Portfolio design 1",
    image: "/mini-apps/portfolio2.jpg",
    link: "https://colorly-portfolio.netlify.app",
  },
  {
    id: 11,
    title: "Uzcar market",
    image: "/mini-apps/rent_car1.jpg",
    link: "https://uzcar-market.netlify.app",
  },
  {
    id: 12,
    title: "Buyuk Bilim website design",
    image: "/mini-apps/buyuk_bilim.jpg",
    link: "https://buyukbilim.netlify.app",
  },
  {
    id: 13,
    title: "Ashyo shop",
    image: "/mini-apps/ashyo.jpg",
    link: "https://ashyo-market.netlify.app",
  },
  {
    id: 14,
    title: "Portfolio design 2",
    image: "/mini-apps/protfolio1.jpg",
    link: "https://bootstrapkursproject.netlify.app",
  },
  {
    id: 15,
    title: "Rental Car",
    image: "/mini-apps/rent_car2.jpg",
    link: "https://rentalcar-agency.netlify.app",
  },
];

function PetProjectContainer() {
  return (
    <section
      id="portfolio-design"
      className="main-content__portfolio w-[95%] mx-auto mb-16"
    >
      <Title
        title="Profects for experience"
        description="Independently completed projects to increase experience"
      />
      <div className="flex justify-between flex-wrap">
        {projects.map((item) => (
          <PetProjectCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default PetProjectContainer;
