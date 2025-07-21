import { Link } from "react-router-dom";

export const GradientButton = ({ to, src, onImgClick }) => {
  const commonClasses =
    "flex h-[40px] w-[40px] items-center justify-center rounded-full";

  const commonStyle = {
    backgroundImage: "var(--gradient-button)",
  };

  if (onImgClick) {
    return (
      <button
        onClick={onImgClick}
        className={commonClasses}
        style={commonStyle}
      >
        <img className="scale-[45%]" src={src} alt="icon back" />
      </button>
    );
  }

  return (
    <Link to={to} className={commonClasses} style={commonStyle}>
      <img className="scale-[45%]" src={src} alt="icon back" />
    </Link>
  );
};
