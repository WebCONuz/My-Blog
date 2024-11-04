function SidebarRight(props) {
  return (
    <aside className="right-aside border border-[#ffb3006b] sm:border-none w-auto px-2 sm:px-0 pt-4 sm:pt-0 bg-[#0000008a] lg:bg-transparent rounded-[1.5rem] sm:bg-[#131313] absolute top-2 right-2 z-40 sm:static h-hidden sm:w-[10%] md:w-[7%] lg:w-[5%] sm:h-screen overflow-hidden flex flex-col justify-start sm:justify-center items-center duration-300">
      <a
        href="#"
        className="show-data flex items-center justify-center mb-3 sm:mb-16 lg:hidden w-[34px] h-[34px] rounded-md bg-[#FFB400] duration-200"
      >
        <i className="bx bxs-user-detail text-2xl text-[#131313]"></i>
      </a>
      <a
        href="#"
        className="show-menu sm:hidden flex items-center justify-center mb-3 w-[34px] h-[34px] rounded-md bg-[#FFB400] duration-200"
      >
        <i className="bx bx-menu text-2xl text-[#131313]"></i>
      </a>
      <a
        href="#intro"
        className="right-aside__item flex items-center justify-center my-2 sm:my-3 w-[34px] h-[34px] rounded-full bg-[#FFB400] hover:bg-[#FFB400] duration-200"
      >
        <i className="bx bxs-home-alt-2 text-xl text-[#131313]"></i>
      </a>
      <a
        href="#services"
        className="right-aside__item flex items-center justify-center my-2 sm:my-3 w-[34px] h-[34px] rounded-full bg-[#353535] hover:bg-[#FFB400] duration-200"
      >
        <i className="bx bx-code-block text-xl text-[#131313]"></i>
      </a>
      <a
        href="#education"
        className="right-aside__item flex items-center justify-center my-2 sm:my-3 w-[34px] h-[34px] rounded-full bg-[#353535] hover:bg-[#FFB400] duration-200"
      >
        <i className="bx bx-book-content text-xl text-[#131313]"></i>
      </a>
      <a
        href="#work"
        className="right-aside__item flex items-center justify-center my-2 sm:my-3 w-[34px] h-[34px] rounded-full bg-[#353535] hover:bg-[#FFB400] duration-200"
      >
        <i className="bx bxs-briefcase-alt-2 text-xl text-[#131313]"></i>
      </a>
      <a
        href="#portfolio"
        className="right-aside__item flex items-center justify-center my-2 sm:my-3 w-[34px] h-[34px] rounded-full bg-[#353535] hover:bg-[#FFB400] duration-200"
      >
        <i className="bx bx-network-chart text-xl text-[#131313]"></i>
      </a>
      <a
        href="#blog"
        className="right-aside__item flex items-center justify-center my-2 sm:my-3 w-[34px] h-[34px] rounded-full bg-[#353535] hover:bg-[#FFB400] duration-200"
      >
        <i className="bx bxl-blogger text-xl text-[#131313]"></i>
      </a>
      {/* <a
          href="#contact"
          className="right-aside__item flex items-center justify-center my-2 sm:my-3 w-[34px] h-[34px] rounded-full bg-[#353535] hover:bg-[#FFB400] duration-200"
        >
          <i className="bx bxs-contact text-xl text-[#131313]"></i>
        </a>  */}
    </aside>
  );
}

export default SidebarRight;
