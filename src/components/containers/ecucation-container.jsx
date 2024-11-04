import Title from "../ui/title";
import EducationCard from "../cards/education-card";

const educations = [
  {
    id: 1,
    title: "Tashkent University of Information Technologies",
    degree: "Student",
    time: "Sep 2018 - June 2022",
    direction: "Software engineering",
    text: `I graduated from the "Software Engineering" department of the Tashkent
          University of Information Technologies. I got my bachelor degree from
          this university. My overall GPA: 4.2`,
  },
  {
    id: 2,
    title: "Najot Ta'lim",
    degree: "Student",
    time: "Aug 2022 - April 2023",
    direction: "Node.js + Vue.js bootcamp course",
    text: `After graduating from the university, I continued studying at the 
        educational center "Salvation Education". During my studies, I gained 
        a lot of new knowledge on building frontend, backend and database 
        architecture, I participated in internships.`,
  },
];

function EcucationContainer() {
  return (
    <section
      id="education"
      className="main-content__education w-[95%] mx-auto mb-16"
    >
      <Title
        title="education"
        description="Get to know the institutions where I studied"
      />
      <div className="bg-[#242424] p-6 sm:p-8">
        {educations.map((item) => (
          <EducationCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default EcucationContainer;
