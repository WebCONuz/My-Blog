import "./intro.scss";

function Intro() {
  return (
    <section
      id="intro"
      className="main-content__intro rounded-md overflow-hidden w-[95%] mx-auto min-h-[70vh] md:min-h-[467px] flex flex-col justify-center items-center mb-16"
    >
      <div className="relative z-10">
        <h1 className="text-center max-w-[450px] md:max-w-full mx-auto text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
          I'm Toshtemirov Mukhammadi
        </h1>
        <h1 className="text-center max-w-[450px] md:max-w-full mx-auto text-3xl lg:text-4xl font-bold mb-6">
          <span className="text-[#FFB400]">Full Stack</span> Developer
        </h1>
        <p className="w-[80%] md:w-[65%] mx-auto text-center mb-6">
          I am a full-stack developer with expertise in Node.js, Vue.js, and
          React technologies. I am passionate about solving complex problems,
          creating various web applications, and developing software that
          automates daily life processes. With my skills, I strive to contribute
          to society by building innovative solutions that make life easier for
          people.
        </p>
        <div className="flex justify-center">
          <a
            href="https://t.me/Toshtemirov_Muxammadi"
            target="_blank"
            className="bg-[#FFB400] py-2 lg:py-3 px-6 flex justify-center items-center rounded-md hover:bg-white duration-200"
          >
            <span className="uppercase text-[#131313] mr-1 font-semibold">
              contact
            </span>
            <i className="bx bx-right-arrow-alt text-[#131313] text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
