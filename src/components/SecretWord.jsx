import { useContext, useEffect, useState } from "react";
import data from "../api/data.json";
import { CategoryContext } from "../contexts/CategoryContext";
import { SecretLetter } from "./SecretLetter";

export const SecretWord = () => {
  const [selectedCategory] = useContext(CategoryContext);
  const [randomWord, setRandomWord] = useState(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 30);
    setRandomWord(randomNumber);
  }, [selectedCategory]);

  if (
    randomWord === null ||
    !data.categories[selectedCategory] ||
    !data.categories[selectedCategory][randomWord]
  ) {
    return null;
  }

  const categoryEl = data.categories[selectedCategory][randomWord];
  const arr = Object.values(categoryEl.name);

  return (
    <div className="mb-[118px] flex flex-wrap justify-center-safe gap-3">
      {arr.map((word, index) => {
        if (word === " ") {
          return (
            <div key={index} className="h-[60px] w-[34px] bg-transparent">
              *{" "}
            </div>
          );
        } else {
          return <SecretLetter key={index}>{word}</SecretLetter>;
        }
      })}
    </div>
  );
};
