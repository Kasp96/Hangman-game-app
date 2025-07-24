import { GlassPanel } from "../components/GlassPanel";
import { StartButton } from "../components/StartButton";
import { BlueButton } from "../components/BlueButton";
import { Link } from "react-router-dom";
import { ViewHeading } from "../components/ViewHeading";
import "../styles/viewHeading.css";
import { ViewHeadingElement } from "../components/ViewHeadingElement";

export const MainMenu = () => {
  return (
    <GlassPanel className="gap-[57px] h-[480px]">
      <ViewHeading className="mb-2 text-[88px]">
        <ViewHeadingElement className="top-2 left-11">the</ViewHeadingElement>
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
