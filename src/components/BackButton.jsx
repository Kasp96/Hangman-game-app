import ICON_BACK from "../assets/icon-back.svg";
import { Link } from "react-router-dom";

export const BackButton = ({ to = "/" }) => {
  return (
    <Link
      to={to}
      className="h-[40px] w-[40px] rounded-full"
      style={{
        backgroundImage: "var(--gradient-button)",
      }}
    >
      <img className="scale-[45%]" src={ICON_BACK} alt="icon back" />
    </Link>
  );
};
