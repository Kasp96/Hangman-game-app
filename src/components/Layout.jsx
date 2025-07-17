import { GameTitle } from "./GameTitle";
import { HowToPlayButton } from "./HowToPlayButton";
import { StartButton } from "./StartButton";

import ICON_BACK from "../assets/icon-back.svg";

export const Layout = () => {
  return (
    <div className="bg-mobile-bg flex min-h-screen w-full justify-center">
      {/* to jest MainMenu */}
      {/* <div
        className="shadow-layer-5 before:shadow-layer-6 absolute top-[55%] flex h-[480px] translate-y-[-50%] flex-col items-center justify-end gap-[57px] rounded-[45px] px-8 before:absolute before:inset-0 before:rounded-[45px]"
        style={{ backgroundImage: "var(--gradient-secondary)" }}
      >
        <GameTitle />
        <StartButton />
        <HowToPlayButton />
      </div> */}
      <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.0)] px-6 py-8">
        <div className="flex items-center justify-between">
          <span>
            <img src={ICON_BACK} alt="icon back" />
          </span>
          {/* <h2 className="text-heading-M bg-gradient-heading bg-clip-text text-transparent">
            How to Play
          </h2> */}
          <div className="relative text-[48px]">
            <span
              className="absolute inset-0 text-black"
              style={{
                transform: "translate(3px, 3px)",
                zIndex: 0,
              }}
            >
              How to Play
            </span>
            <span
              className="bg-gradient-heading relative bg-clip-text text-transparent"
              style={{
                zIndex: 1,
              }}
            >
              How to Play
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
