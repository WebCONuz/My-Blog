function ProjectCard(props) {
  return (
    <div class="card w-[48.5%] md:w-[32%] mb-3 sm:mb-6 relative">
      <img
        src={props.data.image}
        alt="card-img"
        class="w-full h-[160px] sm:h-[300px] object-cover"
      />
      <div class="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-full p-4 bg-[#000000d0] opacity-0 hover:opacity-100 duration-200">
        <h3 class="text-center text-sm sm:text-lg uppercase font-semibold mb-3">
          {props.data.title}
        </h3>
        <div class="flex items-center justify-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-400 text-gray-400 hover:border-white hover:text-white duration-200 mr-1">
            <a
              href={props.data.link}
              target="_blank"
              class="text-2xl bx bx-link"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
