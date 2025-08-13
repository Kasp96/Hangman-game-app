import { SecretLetter } from "./SecretLetter";

export const SecretWord = ({ secretWordArr, hiddenLetterArr }) => {
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
