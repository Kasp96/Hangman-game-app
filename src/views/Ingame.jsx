import { useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
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
import { initialState } from "../reducer/reducer";
import data from "../api/data.json";

export const Ingame = () => {
  const [selectedCategory] = useContext(CategoryContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 30);
    const wordData = data.categories?.[selectedCategory]?.[randomNumber];
    if (!wordData) return;

    const arr = Object.values(wordData.name);
    const hiddenInit = {};
    arr.forEach((letter) => {
      if (letter !== " ") hiddenInit[letter.toUpperCase()] = true;
    });

    dispatch({ type: "SECRET_WORD", payload: { arr: arr } });
    dispatch({ type: "HIDDEN_LETTERS", payload: { hiddenInit: hiddenInit } });
  }, [selectedCategory]);

  useEffect(() => {
    const isGameWon = Object.values(state.hiddenLetterArr);
    if (state.heartGrayLevel === 100) {
      dispatch({
        type: "GAME_LOST",
      });
    } else if (isGameWon.length > 0 && isGameWon.every((letter) => !letter)) {
      dispatch({
        type: "GAME_WON",
      });
    }
  }, [state.heartGrayLevel, state.isModalShown, state.hiddenLetterArr]);

  const checkRemainingAttempts = () => {
    dispatch({
      type: "UPDATE_ATTEMPTS",
    });
    dispatch({
      type: "UPDATE_GRAY_LEVEL",
    });
  };

  const handleLetterClick = (letter) => {
    dispatch({
      type: "LETTER_PICK",
      payload: {
        letter: letter,
      },
    });
    if (
      state.secretWordArr.join("").toUpperCase().includes(letter.toUpperCase())
    ) {
      dispatch({
        type: "HIDE_PICKED_LETTER",
        payload: {
          letter: letter,
        },
      });
    } else {
      checkRemainingAttempts();
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 h-full w-full ${state.isModalShown ? "bg-[hsla(250,68%,27%,0.35)]" : "bg-[(hsla(250,68%,27%,0)]"}`}
    >
      <OverlayContainer>
        {state.isModalShown && (
          <OptionsModal
            setIsModalShown={() => dispatch({ type: "SHOW_MODAL" })}
          >
            {state.modalTitle}
          </OptionsModal>
        )}
        <div className={`${state.isModalShown ? "-z-20" : "z-0"}`}>
          <div className="mb-[90px] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <GradientButton
                src={ICON_MENU}
                onImgClick={() =>
                  dispatch({
                    type: "SHOW_MODAL",
                  })
                }
              />
              <h2 className="text-[40px] text-white">{selectedCategory}</h2>
            </div>
            <div className="flex items-center">
              <ProgressBar remainingAttempts={state.remainingAttempts} />
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
                      height: `${state.heartGrayLevel}%`,
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
            hiddenLetterArr={state.hiddenLetterArr}
            secretWordArr={state.secretWordArr}
          />
          <div className="flex flex-wrap justify-center gap-2">
            {ALPHABET.map((letter) => {
              return (
                <LetterButton
                  key={letter}
                  letter={letter}
                  clicked={state.clickedLetters[letter]}
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
