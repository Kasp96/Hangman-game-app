import GAME_TITLE from "../assets/game-title.png";
import { StartButton } from "./StartButton";

export const Layout = () => {
  return (
    <div className="bg-mobile-bg flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <img src={GAME_TITLE} alt="game title logo" />
        </div>
        <StartButton />
        <button
          className="h-[100px] w-[160px] bg-[blue-700] uppercase"
          style={{ color: "var(--color-white)" }}
        >
          How to play
        </button>
      </div>
    </div>
  );
};
