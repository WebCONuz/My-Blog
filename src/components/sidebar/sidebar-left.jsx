function SidebarLeft(props) {
  return (
    <aside className="about-data absolute top-0 -left-full z-30 bg-[#131313] shadow-2xl shadow-[#000000] lg:shadow-none lg:static left-aside w-full sm:w-[350px] lg:w-[25%] h-screen overflow-y-scroll py-[50px] px-6 2xl:px-10 duration-300">
      <div className="left-aside__info border-b border-[#383838] pb-6 mb-6">
        <img
          src="/avatar/me1.jpg"
          alt="avatar-img"
          className="w-[65%] block mx-auto mb-8 rounded-full"
        />
        <h3 className="text-center text-xl font-medium mb-4">
          Toshtemirov Mukhammadi
        </h3>
        <p className="text-center font-[15px] mb-4 opacity-80">
          Full-Stack Developer
        </p>
        <ul className="flex w-full justify-center items-center">
          <li className="mx-1 2xl:mx-[6px]">
            <a
              href="mailto:muxammaditoshtemirov@gmail.com"
              target="_blank"
              className="flex justify-center items-center w-8 h-8 bg-[#FFB400] rounded-full hover:bg-white duration-200"
            >
              <i className="bx bxs-envelope text-[#131313] text-xl"></i>
            </a>
          </li>
          <li className="mx-1 2xl:mx-[6px]">
            <a
              href="https://instagram.com/muxammadi_toshtemirov?igshid=ZDdkNTZiNTM"
              target="_blank"
              className="flex justify-center items-center w-8 h-8 bg-[#FFB400] rounded-full hover:bg-white duration-200"
            >
              <i className="bx bxl-instagram-alt text-[#131313] text-xl"></i>
            </a>
          </li>
          <li className="mx-1 2xl:mx-[6px]">
            <a
              href="https://t.me/Toshtemirov_Muxammadi"
              target="_blank"
              className="flex justify-center items-center w-8 h-8 bg-[#FFB400] rounded-full hover:bg-white duration-200"
            >
              <i className="bx bxl-telegram text-[#131313] text-xl"></i>
            </a>
          </li>
          <li className="mx-1 2xl:mx-[6px]">
            <a
              href="https://www.linkedin.com/in/muxammadi-toshtemirov-a4b81526a/"
              target="_blank"
              className="flex justify-center items-center w-8 h-8 bg-[#FFB400] rounded-full hover:bg-white duration-200"
            >
              <i className="bx bxl-linkedin text-[#131313] text-xl"></i>
            </a>
          </li>
          <li className="mx-1 2xl:mx-[6px]">
            <a
              href="https://github.com/WebCONuz"
              target="_blank"
              className="flex justify-center items-center w-8 h-8 bg-[#FFB400] rounded-full hover:bg-white duration-200"
            >
              <i className="bx bxl-github text-[#131313] text-xl"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="left-aside__address border-b border-[#383838] pb-6 mb-6">
        <ul>
          <li className="flex justify-between items-center mb-[10px]">
            <span className="block mr-2 py-[2px] px-1 2xl:py-1 2xl:px-2 text-sm 2xl:text-base bg-[#FFB400] text-[#131313] rounded-md font-medium">
              Born
            </span>
            <span>07.06.1717</span>
          </li>
          <li className="flex justify-between items-center mb-[10px]">
            <span className="block mr-2 py-[2px] px-1 2xl:py-1 2xl:px-2 text-sm 2xl:text-base bg-[#FFB400] text-[#131313] rounded-md font-medium">
              Freelance
            </span>
            <span className="text-[#7CB641]">Available</span>
          </li>
          <li className="flex justify-between items-center mb-[10px]">
            <span className="block mr-2 py-[2px] px-1 2xl:py-1 2xl:px-2 text-sm 2xl:text-base bg-[#FFB400] text-[#131313] rounded-md font-medium">
              Phone
            </span>
            <span>(94) 542 63 ..</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="block mr-2 py-[2px] px-1 2xl:py-1 2xl:px-2 text-sm 2xl:text-base bg-[#FFB400] text-[#131313] rounded-md font-medium">
              Address
            </span>
            <span>Tashkent, Uzb</span>
          </li>
        </ul>
      </div>

      <div className="left-aside__skills border-b border-[#383838] pb-6 mb-6">
        <h3 className="text-xl font-medium mb-4">Skills</h3>
        <ul>
          <li className="mb-[10px]">
            <div className="statistic flex justify-between items-center py-1 mb-1">
              <span className="opacity-80">HTML/CSS</span>
              <span className="opacity-80">
                <i className="bx bx-check-double text-2xl"></i>
              </span>
            </div>
            <div className="range w-full border border-[#FFB400] p-[2px] rounded-[10px]">
              <div className="w-[90%] bg-[#FFB400] rounded-[10px] h-[2px]"></div>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="statistic flex justify-between items-center py-1 mb-1">
              <span className="opacity-80">JS/TS</span>
              <span className="opacity-80">
                <i className="bx bx-check-double text-2xl"></i>
              </span>
            </div>
            <div className="range w-full border border-[#FFB400] p-[2px] rounded-[10px]">
              <div className="w-[80%] bg-[#FFB400] rounded-[10px] h-[2px]"></div>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="statistic flex justify-between items-center py-1 mb-1">
              <span className="opacity-80">Vue/Nuxt</span>
              <span className="opacity-80">
                <i className="bx bx-check-double text-2xl"></i>
              </span>
            </div>
            <div className="range w-full border border-[#FFB400] p-[2px] rounded-[10px]">
              <div className="w-[75%] bg-[#FFB400] rounded-[10px] h-[2px]"></div>
            </div>
          </li>
          {/* <li className="mb-[10px]">
              <div
                className="statistic flex justify-between items-center py-1 mb-1"
              >
                <span className="opacity-80"> 3</span>
                <span className="opacity-80">
                  <i className="bx bx-check-double text-2xl"></i>
                </span>
              </div>
              <div
                className="range w-full border border-[#FFB400] p-[2px] rounded-[10px]"
              >
                <div className="w-[75%] bg-[#FFB400] rounded-[10px] h-[2px]"></div>
              </div>
            </li>  */}
          <li className="mb-[10px]">
            <div className="statistic flex justify-between items-center py-1 mb-1">
              <span className="opacity-80">React/Redux</span>
              <span className="opacity-80">
                <i className="bx bx-check-double text-2xl"></i>
              </span>
            </div>
            <div className="range w-full border border-[#FFB400] p-[2px] rounded-[10px]">
              <div className="w-[60%] bg-[#FFB400] rounded-[10px] h-[2px]"></div>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="statistic flex justify-between items-center py-1 mb-1">
              <span className="opacity-80">Node/Nest</span>
              <span className="opacity-80">
                <i className="bx bx-check-double text-2xl"></i>
              </span>
            </div>
            <div className="range w-full border border-[#FFB400] p-[2px] rounded-[10px]">
              <div className="w-[75%] bg-[#FFB400] rounded-[10px] h-[2px]"></div>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="statistic flex justify-between items-center py-1 mb-1">
              <span className="opacity-80">Database</span>
              <span className="opacity-80">
                <i className="bx bx-check-double text-2xl"></i>
              </span>
            </div>
            <div className="range w-full border border-[#FFB400] p-[2px] rounded-[10px]">
              <div className="w-[70%] bg-[#FFB400] rounded-[10px] h-[2px]"></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="left-aside__extra border-b border-[#383838] pb-6 mb-6">
        <h3 className="text-xl font-medium mb-4">Extra Skills</h3>
        <ul>
          <li className="flex items-center mb-1">
            <i className="bx bx-checkbox-checked text-[#FFB400] text-2xl"></i>
            <span className="opacity-70 ml-3 text-lg">
              Bootstap, Tailwind, Sass
            </span>
          </li>
          <li className="flex items-center mb-1">
            <i className="bx bx-checkbox-checked text-[#FFB400] text-2xl"></i>
            <span className="opacity-70 ml-3 text-lg">
              Element-plus, Flowbite, Pinia
            </span>
          </li>
          <li className="flex items-center mb-1">
            <i className="bx bx-checkbox-checked text-[#FFB400] text-2xl"></i>
            <span className="opacity-70 ml-3 text-lg">
              Express, Koa, ORM, ODM
            </span>
          </li>
          <li className="flex items-center mb-1">
            <i className="bx bx-checkbox-checked text-[#FFB400] text-2xl"></i>
            <span className="opacity-70 ml-3 text-lg">Mongo, SQL, Redis</span>
          </li>
          <li className="flex items-center mb-1">
            <i className="bx bx-checkbox-checked text-[#FFB400] text-2xl"></i>
            <span className="opacity-70 ml-3 text-lg">Git, Github, Docker</span>
          </li>
        </ul>
      </div>

      <div className="left-aside__lang border-b border-[#383838] pb-6 mb-6">
        <h3 className="text-xl font-medium mb-4">Languages</h3>
        <ul className="">
          <li className="mb-[10px]">
            <div className="statistic flex items-center">
              <i className="bx bx-radio-circle-marked mr-2 text-[#FFB400]"></i>
              <span className="opacity-80 mr-auto">Uzbek:</span>
              <span className="opacity-80 ml-2">Native Language</span>
            </div>
          </li>
          <li className="mb-[10px]">
            <div className="statistic flex items-center">
              <i className="bx bx-radio-circle-marked mr-2 text-[#FFB400]"></i>
              <span className="opacity-80 mr-auto">English:</span>
              <span className="opacity-80 ml-2">Intermediate - B2</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="left-aside__resume">
        <a
          href="./files/resume.pdf"
          className="bg-[#FFB400] py-2 2xl:py-3 flex justify-center items-center rounded-md hover:bg-white duration-200"
          download="Toshtemirov_CV"
        >
          <span className="uppercase text-[#131313] mr-2 font-semibold">
            Download Resume
          </span>
        </a>
      </div>
    </aside>
  );
}

export default SidebarLeft;
