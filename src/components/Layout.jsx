import GAME_TITLE from "../assets/game-title.png";
import { HowToPlayButton } from "./HowToPlayButton";
import { StartButton } from "./StartButton";

export const Layout = () => {
  return (
    <div className="bg-mobile-bg flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-15">
        <div>
          <img src={GAME_TITLE} alt="game title logo" />
        </div>
        <StartButton />
        <HowToPlayButton/>
      </div>
    </div>
  );
};
