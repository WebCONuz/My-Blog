function ServiceCard(props) {
  return (
    <div className="flex flex-wrap md:flex-nowrap pb-6 border-b border-[#ffffff36] mb-8">
      <div className="study-place w-full md:w-1/3 md:pr-3 2xl:pr-4 mb-7 md:mb-0">
        <h3 className="text-lg mb-3 md:mb-7 font-medium">{props.data.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-[#fffc] mr-2">{props.data.degree}</span>
          <span className="bg-[#FFB400] py-1 px-2 rounded-md text-sm">
            {props.data.time}
          </span>
        </div>
      </div>
      <div className="study-about w-full md:w-2/3 md:pl-6 2xl:pl-8">
        <h3 className="text-lg mb-3 md:mb-7 font-medium">
          {props.data.direction}
        </h3>
        <p className="text-[#fffc]">{props.data.text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
