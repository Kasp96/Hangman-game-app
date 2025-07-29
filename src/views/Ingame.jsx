import { useContext, useState } from "react";
import ICON_MENU from "../assets/icon-menu.svg";
import ICON_HEART from "../assets/icon-heart.svg";
import { ALPHABET } from "../constants/alphabet";
import { OverlayContainer } from "../components/OverlayContainer";
import { GradientButton } from "../components/GradientButton";
import { ProgressBar } from "../components/ProgressBar";
import { LetterButton } from "../components/LetterButton";
import { CategoryContext } from "../contexts/CategoryContext";
import { SecretWord } from "../components/SecretWord";
import { OptionsModal } from "../components/OptionsModal";

export const Ingame = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedCategory] = useContext(CategoryContext);
  const [clickedLetters, setClickedLetters] = useState({});

  const checkLetter = () => {
    console.log("test");
  };

  const handleLetterClick = (letter) => {
    setClickedLetters((prev) => ({ ...prev, [letter]: true }));
    checkLetter();
  };

  return (
    <div
      className={`absolute top-0 left-0 h-full w-full ${isModalShown ? "bg-[hsla(250,68%,27%,0.35)]" : "bg-[(hsla(250,68%,27%,0)]"}`}
    >
      <OverlayContainer>
        {isModalShown && <OptionsModal setIsModalShown={setIsModalShown} />}
        <div className={`${isModalShown ? "-z-20" : "z-0"}`}>
          <div className="mb-[90px] flex items-center justify-between">
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
          <div className="flex flex-wrap justify-center gap-2">
            {ALPHABET.map((letter) => {
              return (
                <LetterButton
                  key={letter}
                  letter={letter}
                  clicked={clickedLetters[letter]}
                  handleLetterClick={handleLetterClick}
                >
                  {letter}
                </LetterButton>
              );
            })}
          </div>
        </div>
      </OverlayContainer>
    </div>
  );
};
