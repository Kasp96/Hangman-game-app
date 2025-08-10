import { useContext, useEffect, useState } from "react";
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
  const [modalTitle, setModalTitle] = useState("Paused");
  const [selectedCategory] = useContext(CategoryContext);
  const [clickedLetters, setClickedLetters] = useState({});
  const [secretWordArr, setSecretWordArr] = useState([]);
  const [hiddenLetterArr, setHiddenLetterArr] = useState({});
  const [remainingAttempts, setRemainingAttempts] = useState(85);
  const [heartGrayLevel, setHeartGrayLevel] = useState(0);

  useEffect(() => {
    const isGameWon = Object.values(hiddenLetterArr);
    if (heartGrayLevel === 100) {
      setIsModalShown(true);
      setHeartGrayLevel(0);
      setRemainingAttempts(85);
      setModalTitle("You Lose");
    } else if (isGameWon.length > 0 && isGameWon.every((letter) => !letter)) {
      setIsModalShown(true);
      setModalTitle("You Win");
    }
  }, [heartGrayLevel, isModalShown, hiddenLetterArr]);

  const checkRemainingAttempts = () => {
    setRemainingAttempts((prevAttempts) => prevAttempts - 8.5);
    setHeartGrayLevel((prevLevel) => prevLevel + 10);
  };

  const handleLetterClick = (letter) => {
    setClickedLetters((prev) => ({ ...prev, [letter]: true }));
    if (secretWordArr.join("").toUpperCase().includes(letter.toUpperCase())) {
      setHiddenLetterArr((prevArr) => ({
        ...prevArr,
        [letter]: false,
      }));
    } else {
      checkRemainingAttempts();
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 h-full w-full ${isModalShown ? "bg-[hsla(250,68%,27%,0.35)]" : "bg-[(hsla(250,68%,27%,0)]"}`}
    >
      <OverlayContainer>
        {isModalShown && (
          <OptionsModal setIsModalShown={setIsModalShown}>
            {modalTitle}
          </OptionsModal>
        )}
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
              <ProgressBar remainingAttempts={remainingAttempts} />
              <div>
                <div className="relative h-[50px] w-[54px] scale-[50%] overflow-hidden">
                  <img
                    className="relative z-0"
                    src={ICON_HEART}
                    alt="heart icon"
                  />
                  <img
                    className="absolute bottom-0 left-0 grayscale-100"
                    src={ICON_HEART}
                    alt="heart"
                    style={{
                      height: `${heartGrayLevel}%`,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "bottom",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <SecretWord
            hiddenLetterArr={hiddenLetterArr}
            setHiddenLetterArr={setHiddenLetterArr}
            secretWordArr={secretWordArr}
            setSecretWordArr={setSecretWordArr}
          />
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
