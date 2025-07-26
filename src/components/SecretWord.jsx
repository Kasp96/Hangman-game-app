import { useContext, useEffect } from "react";
import data from "../api/data.json";
import { CategoryContext } from "../contexts/CategoryContext";
import { SecretLetter } from "./SecretLetter";

export const SecretWord = () => {
  const [selectedCategory] = useContext(CategoryContext);

  // useEffect(() => {

  // }, )
  // pomyslec nad buttonami z modala!

  let randomNumber = Math.floor(Math.random() * 30);
  const categoryEl = data.categories[selectedCategory][randomNumber];
  const arr = Object.values(categoryEl.name);
  console.log(arr);

  return (
    <div className="mb-[118px] flex flex-wrap justify-center-safe gap-3">
      {arr.map((word, index) => {
        if (word === " ") {
          return <div className="h-[60px] w-[34px] bg-transparent">* </div>;
        } else {
          return <SecretLetter key={index}>{word}</SecretLetter>;
        }
      })}
    </div>
  );
};
