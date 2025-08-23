import { GlassPanel } from "../components/GlassPanel";
import { StartButton } from "../components/StartButton";
import { BlueButton } from "../components/BlueButton";
import { ViewHeading } from "../components/ViewHeading";
import { ViewHeadingElement } from "../components/ViewHeadingElement";
import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <GlassPanel className="h-[480px] gap-[57px] min-md:w-[592px] min-md:h-[500px]">
      <ViewHeading className="mb-2 min-md:-mb-4 text-[88px] min-md:text-[140px]">
        <ViewHeadingElement className="top-2.5 left-11">the</ViewHeadingElement>
        Hangman
        <ViewHeadingElement className="bottom-10 left-[60%]">
          game
        </ViewHeadingElement>
      </ViewHeading>
      <StartButton />
      <Link to="/rules">
        <BlueButton className="text-heading-S text-shadow-outline text-stroke mb-16 w-[260px] rounded-[30px] py-2 before:rounded-[29px]">
          How to Play
        </BlueButton>
      </Link>
    </GlassPanel>
  );
};
