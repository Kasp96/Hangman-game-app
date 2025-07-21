import { GameTitle } from "../components/GameTitle";
import { GlassPanel } from "../components/GlassPanel";
import { StartButton } from "../components/StartButton";
import { BlueButton } from "../components/BlueButton";
import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <GlassPanel>
      <GameTitle />
      <StartButton />
      <Link to="/rules">
        <BlueButton className="text-heading-S text-shadow-outline text-stroke mb-16 rounded-[30px] py-2 before:rounded-[29px]">
          How to Play
        </BlueButton>
      </Link>
    </GlassPanel>
  );
};
