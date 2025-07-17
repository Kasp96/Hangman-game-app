import ICON_BACK from "../assets/icon-back.svg";

export const BackButton = () => {
  return (
    <span
      className="h-[40px] w-[40px] rounded-full"
      style={{
        backgroundImage: "var(--gradient-button)",
      }}
    >
      <img className="scale-[45%]" src={ICON_BACK} alt="icon back" />
    </span>
  );
};
