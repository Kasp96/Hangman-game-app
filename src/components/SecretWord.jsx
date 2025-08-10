import { useContext, useEffect, useState } from "react";
import data from "../api/data.json";
import { CategoryContext } from "../contexts/CategoryContext";
import { SecretLetter } from "./SecretLetter";

export const SecretWord = ({
  secretWordArr,
  setSecretWordArr,
  hiddenLetterArr,
  setHiddenLetterArr,
}) => {
  const [selectedCategory] = useContext(CategoryContext);
  const [randomWord, setRandomWord] = useState(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 30);
    setRandomWord(randomNumber);
  }, [selectedCategory]);

  useEffect(() => {
    if (data.categories?.[selectedCategory]?.[randomWord]) {
      const hiddenInit = {};
      const arr = Object.values(
        data.categories[selectedCategory][randomWord].name,
      );
      setSecretWordArr(arr);
      arr.forEach((letter) => {
        if (letter !== " ") hiddenInit[letter.toUpperCase()] = true;
      });

      setHiddenLetterArr(hiddenInit);
    }
  }, [randomWord, selectedCategory, setSecretWordArr, setHiddenLetterArr]);

  return (
    <div className="mb-[118px] flex flex-wrap justify-center-safe gap-3">
      {secretWordArr.map((word, index) => {
        if (word === " ") {
          return (
            <div key={index} className="h-[60px] w-[34px] bg-transparent"></div>
          );
        } else {
          return (
            <SecretLetter
              hiddenLetterArr={hiddenLetterArr}
              key={index}
              letter={word}
            >
              {word}
            </SecretLetter>
          );
        }
      })}
    </div>
  );
};
