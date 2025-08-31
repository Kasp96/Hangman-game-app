import START_BTN from "../assets/icon-play.png";
import { Link } from "react-router-dom";

export const StartButton = () => {
  return (
    <Link to="/categories">
      <button className="group shadow-layer-1 before:shadow-layer-2 relative flex h-[160px] w-[160px] items-center justify-center rounded-[50%] before:absolute before:inset-[0] before:rounded-full before:content-[''] min-md:h-[200px] min-md:w-[200px]">
        <img className="z-10" src={START_BTN} />
        <span className="gradient-styles bg-gradient-button h-[160px] w-[160px] min-md:h-[200px] min-md:w-[200px]"></span>
        <span className="gradient-styles bg-gradient-button-hover h-[160px] w-[160px] opacity-0 transition-all group-hover:opacity-100 min-md:h-[200px] min-md:w-[200px]"></span>
      </button>
    </Link>
  );
};
