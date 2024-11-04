import classes from "./loader.scss";

function Loader() {
  return (
    <div className="loader w-screen h-screen bg-white flex items-center justify-center fixed top-0 left-0 z-50">
      <div className={classes["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
