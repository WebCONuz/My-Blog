function ServiceCard(props) {
  return (
    <div className="card bg-[#242424] p-8 w-full sm:w-[48.5%] md:w-[32%] flex flex-col items-center mb-3 sm:mb-6">
      <img src={props.data.image} alt="card-image" className="mb-6 w-[70px]" />
      <h3 className="text-lg font-medium mb-2 capitalize">
        {props.data.title}
      </h3>
      <p className="text-[#fffc] text-[15px] text-center">{props.data.text}</p>
    </div>
  );
}

export default ServiceCard;
