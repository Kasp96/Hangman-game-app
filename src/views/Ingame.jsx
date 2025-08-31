import { useEffect } from "react";
import data from "../api/data.json";
import ICON_MENU from "../assets/icon-menu.svg";
import ICON_HEART from "../assets/icon-heart.svg";
import { ALPHABET } from "../constants/alphabet";
import { OverlayContainer } from "../components/OverlayContainer";
import { GradientButton } from "../components/GradientButton";
import { ProgressBar } from "../components/ProgressBar";
import { LetterButton } from "../components/LetterButton";
import { SecretWord } from "../components/SecretWord";
import { OptionsModal } from "../components/OptionsModal";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { PATH_TO_CATEGORY_NAME } from "../constants/categories";

export const Ingame = () => {
  const { state, dispatch } = useOutletContext();
  const { categoryName: categorySlug } = useParams();
  const categoryDisplayName = PATH_TO_CATEGORY_NAME[categorySlug];

  useEffect(() => {
    if (!categoryDisplayName) return;
    const normalizedCategories = Object.keys(data.categories).reduce(
      (acc, key) => {
        acc[key.toLowerCase()] = data.categories[key];
        return acc;
      },
      {},
    );

    const wordData =
      normalizedCategories[categoryDisplayName.toLowerCase()]?.[
        Number(state.wordId)
      ];

    if (!wordData) return;

    const arr = Object.values(wordData.name);
    const hiddenInit = {};
    arr.forEach((letter) => {
      if (letter !== " ") hiddenInit[letter.toUpperCase()] = true;
    });

    dispatch({ type: "SECRET_WORD", payload: { arr: arr } });
    dispatch({ type: "HIDDEN_LETTERS", payload: { hiddenInit: hiddenInit } });
  }, [state.wordId, categoryDisplayName, dispatch]);

  useEffect(() => {
    const isGameWon = Object.values(state.hiddenLetterArr);
    if (state.heartGrayLevel === 100) {
      dispatch({
        type: "GAME_LOST",
      });
    } else if (
      isGameWon.length > 0 &&
      isGameWon.every((letter) => !letter) &&
      state.ableToContinue
    ) {
      dispatch({
        type: "GAME_WON",
      });
    }
  }, [
    state.heartGrayLevel,
    state.isModalShown,
    state.hiddenLetterArr,
    state.ableToContinue,
    dispatch,
  ]);

  console.log(state.secretWordArr);
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
            state={state}
            dispatch={dispatch}
            setIsModalShown={() => dispatch({ type: "SHOW_MODAL" })}
          >
            {state.modalTitle}
          </OptionsModal>
        )}
        <div className={`${state.isModalShown ? "-z-20" : "z-0"}`}>
          <div className="mb-[50px] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <GradientButton
                src={ICON_MENU}
                onImgClick={() =>
                  dispatch({
                    type: "SHOW_MODAL",
                  })
                }
              />
              <h2 className="ml-15 text-[40px] text-white min-md:ml-23 min-md:text-[48px] min-md:tracking-[1px] min-md:uppercase min-lg:ml-55 min-lg:text-[88px] min-lg:normal-case">
                {categoryDisplayName}
              </h2>
            </div>
            <div className="flex items-center">
              <ProgressBar remainingAttempts={state.remainingAttempts} />
              <div>
                <div className="relative h-[50px] w-[50px] scale-[50%] overflow-hidden min-md:ml-[2.5rem] min-md:scale-[100%]">
                  <img
                    className="relative z-0 min-md:w-[54px]"
                    src={ICON_HEART}
                    alt="heart icon"
                  />
                  <img
                    className="absolute bottom-0 left-0 grayscale-100 min-md:bottom-[0.25rem]"
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
          <div className="flex flex-wrap justify-center gap-2 min-md:gap-4">
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
