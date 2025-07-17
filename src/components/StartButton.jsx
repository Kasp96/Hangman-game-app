import START_BTN from "../assets/icon-play.png";

export const StartButton = () => {
  return (
    <button
      className="shadow-layer-1 before:shadow-layer-2 relative flex h-[160px] w-[160px] items-center justify-center rounded-[50%] before:absolute before:inset-[0] before:rounded-full before:content-['']"
      style={{ backgroundImage: "var(--gradient-button)" }}
    >
      <img src={START_BTN} />
    </button>
  );
};
