function Title(props) {
  return (
    <div className="title text-center mb-8">
      <h2 className="text-[32px] font-bold capitalize mb-4">{props.title}</h2>
      <p className="max-w-[438px] text-[#fffc] mx-auto">{props.description}</p>
    </div>
  );
}

export default Title;
