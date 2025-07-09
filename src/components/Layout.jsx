import START_BTN from "../assets/icon-play.svg";
import GAME_TITLE from "../assets/game-title.png";

export const Layout = () => {
  return (
    <div className="bg-mobile-bg flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <img src={GAME_TITLE} alt="game title logo" />
        </div>
        <button
          className="flex h-[165px] w-[165px] items-center justify-center rounded-[50%] border-2"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <img src={START_BTN} />
        </button>
        <button>How to play</button>
      </div>
    </div>
  );
};
