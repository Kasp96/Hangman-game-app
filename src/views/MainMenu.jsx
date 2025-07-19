import { GameTitle } from "../components/GameTitle";
import { StartButton } from "../components/StartButton";
import { BlueButton } from "../components/BlueButton";

export const MainMenu = () => {
  return (
    <div
      className="shadow-layer-5 before:shadow-layer-6 absolute top-[55%] flex h-[480px] translate-y-[-50%] flex-col items-center justify-end gap-[57px] rounded-[45px] px-8 before:absolute before:inset-0 before:rounded-[45px]"
      style={{ backgroundImage: "var(--gradient-menu)" }}
    >
      <GameTitle />
      <StartButton />
      <BlueButton className="text-heading-S text-shadow-outline text-stroke mb-16 rounded-[30px] py-2 before:rounded-[29px]">
        How to Play
      </BlueButton>
    </div>
  );
};
