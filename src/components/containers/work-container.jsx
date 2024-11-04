import Title from "../ui/title";
import WorkCard from "../cards/work-card";

const works = [
  {
    id: 1,
    title: "Najot Ta'lim",
    degree: "Assistant teacher & Freelancer",
    city: "Tashkent",
    time: "Sep 2018 - June 2022",
    works: [
      "So far, I have been teaching vue.js and node.js technologies to students here",
      "My friends and I formed our own group and took projects to order as a team",
      "We are currently working on a pet food website and its dashboard, Shipmate crm software",
      "Here we participated in the fullstack programming competition with our team and won the proud 1st place",
      "Here I learned team culture and developed soft skills",
    ],
  },
  {
    id: 2,
    title: "Viento Group",
    degree: "Vue.js Frontend developer",
    city: "Tashkent",
    time: "May 2023 - Nov 2023",
    works: [
      "I developed the frontend part of several websites: miniature, essi, pharmlive, viento, mijozlar, universalbank",
      "I corrected the identified shortcomings of the completed universal bank website",
      'I made the frontend of the authorization part of the platform called "Mijozlar"',
      "I developed the frontend part of the company's website",
      "I learned how to work with a group here",
    ],
  },
  {
    id: 3,
    title: "HomeDev Agency",
    degree: "Fullstack developer",
    city: "Tashkent",
    time: "Jan 2023 - May 2023",
    works: [
      'I developed the backend part of the "HomeDev" website using express.js technology',
      'I developed the frontend part of the "HomeDev" website using vue.js technology',
      'I added "multilingual" functionality to the website using the i18n package',
      "I have created an admin panel to manage the website",
      'I am getting acquainted with the "Education CRM project, which the company is currently working on.',
    ],
  },
  {
    id: 4,
    title: "Najot Ta'lim",
    degree: "Junior Fullstack developer (practise)",
    city: "Tashkent",
    time: "March 2023 - Apr 2023",
    works: [
      'During the internship, the real project "Akmal express crm" was assigned to our team and I performed the role of team lead in this team',
      "I distributed tasks to our teammates and took control of the overall process",
      "I developed the main pages of the project using vue.js",
      "I integrated the frontend and backend parts of the project with the help of pinia state manager",
    ],
  },
  {
    id: 5,
    title: '"Buyuk Bilim" Learning Center',
    degree: "Frontend developer and mentor",
    city: "Tashkent",
    time: "Oct 2021 - Aug 2022",
    works: [
      "I used to teach frontend technologies to students here",
      "I created the website of the educational center. The website consisted of frontend, backend and small admin panel parts. It was one of my first things",
    ],
  },
  {
    id: 6,
    title: "Library of SamTUIT",
    degree: "Frontend developer and technical worker",
    city: "Tashkent",
    time: "Sep 2021 - Sep 2022",
    works: [
      "The frontend of the library website was created by me",
      "Based on the given requirements, the UI design of the library website was developed",
      "Based on the design, the frontend part of the website was created",
      "Software for determining general statistics of site visitors has been developed on the basis of Yandex services",
    ],
  },
];

function WorkContainer() {
  return (
    <section id="work" className="main-content__work w-[95%] mx-auto mb-16">
      <Title
        title="Work history"
        description="I have worked in several places and participated in internships. You can read more about it below"
      />
      <div className="bg-[#242424] p-6 sm:p-8">
        {works.map((item) => (
          <WorkCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default WorkContainer;
