import { useContext, useState } from "react";
import ICON_MENU from "../assets/icon-menu.svg";
import ICON_HEART from "../assets/icon-heart.svg";
import { ALPHABET } from "../constants/alphabet";
import { OverlayContainer } from "../components/OverlayContainer";
import { GradientButton } from "../components/GradientButton";
import { ProgressBar } from "../components/ProgressBar";
import { LetterButton } from "../components/LetterButton";
import { GlassPanel } from "../components/GlassPanel";
import { ViewHeading } from "../components/ViewHeading";
import { BlueButton } from "../components/BlueButton";
import { CategoryContext } from "../contexts/CategoryContext";
import { SecretWord } from "../components/SecretWord";

export const Ingame = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedCategory] = useContext(CategoryContext);

  return (
    <div
      className={`absolute top-0 left-0 h-full w-full ${isModalShown ? "bg-[hsla(250,68%,27%,0.35)]" : "bg-[(hsla(250,68%,27%,0)]"}`}
    >
      <OverlayContainer>
        {isModalShown && (
          <div className="absolute top-0 z-50 h-full w-full">
            <GlassPanel className="h-[435px] gap-[37px] pb-18">
              <ViewHeading
                className="-mb-2 text-[90px]"
                style={{ WebkitTextStroke: "16px #243041" }}
              >
                Paused
              </ViewHeading>
              <BlueButton
                onClick={() => setIsModalShown((prevModal) => !prevModal)}
                className="text-heading-S w-[225px] rounded-[30px] py-2 before:rounded-[29px]"
              >
                Continue
              </BlueButton>
              <BlueButton className="text-heading-S w-[260px] rounded-[30px] py-2 before:rounded-[29px]">
                New category
              </BlueButton>
              <BlueButton className="text-heading-S bg-gradient-button w-[225px] rounded-[30px] py-2 before:rounded-[29px]">
                Quit game
              </BlueButton>
            </GlassPanel>
          </div>
        )}
        <div className={`${isModalShown ? "-z-20" : "z-0"}`}>
          <div className="mb-[55px] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <GradientButton
                src={ICON_MENU}
                onImgClick={() => setIsModalShown((prevModal) => !prevModal)}
              />
              <h2 className="text-[40px] text-white">{selectedCategory}</h2>
            </div>
            <div className="flex items-center">
              <ProgressBar />
              <img className="scale-[50%]" src={ICON_HEART} alt="heart icon" />
            </div>
          </div>
          <SecretWord />
          <div className="flex flex-wrap gap-2">
            {ALPHABET.map((letter) => {
              return <LetterButton key={letter}>{letter}</LetterButton>;
            })}
          </div>
        </div>
      </OverlayContainer>
    </div>
  );
};
