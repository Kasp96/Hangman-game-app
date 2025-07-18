import { BackButton } from "./BackButton";
import { GameTitle } from "./GameTitle";
import { HowToPlayButton } from "./HowToPlayButton";
import { StartButton } from "./StartButton";
import { ViewHeading } from "./ViewHeading";
import { RULES } from "../constants/rules";

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
      {/* to jest HowToPlay */}
      <div className="absolute top-0 flex h-full w-full flex-col gap-6 bg-[rgba(0,0,0,0.35)] px-6 py-8">
        <div className="mb-[55px] flex items-center justify-between">
          <BackButton />
          <ViewHeading />
        </div>
        {RULES.map((rule) => {
          return (
            <div className="rounded-[20px] bg-white p-8">
              <div className="flex items-center gap-4 text-[24px]">
                <p className="text-blue-500">{rule.number}</p>
                <p className="text-blue-700 uppercase">{rule.title}</p>
              </div>
              <p className="mt-4 text-[16px] leading-[120%] tracking-[0.5px] text-purple-200">
                {rule.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
