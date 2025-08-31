import { Link } from "react-router-dom";

export const GradientButton = ({ to, src, onImgClick }) => {
  return (
    <Link
      onClick={onImgClick}
      to={to}
      className="absolute left-5 flex h-[40px] w-[40px] items-center justify-center rounded-full min-md:h-[64px] min-md:w-[64px] min-lg:left-[6rem] min-lg:h-[94px] min-lg:w-[94px]"
    >
      <div className="group z-10">
        <img
          className="relative scale-[45%] min-md:scale-[70%] min-lg:scale-[100%]"
          src={src}
          alt="icon back"
        />
        <span className="bg-gradient-button gradient-styles h-[40px] w-[40px] min-md:h-[64px] min-md:w-[64px] min-lg:h-[94px] min-lg:w-[94px]"></span>
        <span className="gradient-styles bg-gradient-button-hover h-[40px] w-[40px] opacity-0 transition-all group-hover:opacity-100 min-md:h-[64px] min-md:w-[64px] min-lg:h-[94px] min-lg:w-[94px]"></span>
      </div>
    </Link>
  );
};
