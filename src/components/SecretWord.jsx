import { SecretLetter } from "./SecretLetter";

export const SecretWord = ({ secretWordArr, hiddenLetterArr }) => {
  const words = [];
  let currentWord = [];

  secretWordArr.forEach((char, index) => {
    if (char === " ") {
      if (currentWord.length > 0) {
        words.push(currentWord);
        currentWord = [];
      }
    } else {
      currentWord.push({ char, index });
    }
  });
  if (currentWord.length > 0) words.push(currentWord);
  return (
    <div className="mb-[118px] flex flex-wrap justify-center gap-3">
      {words.map((word, wordIndex) => {
        const scale =
          word.length > 12
            ? "scale-75"
            : word.length > 8
              ? "scale-90"
              : "scale-100";

        return (
          <div key={wordIndex} className={`flex gap-2 ${scale}`}>
            {word.map(({ char, index }) => (
              <SecretLetter
                hiddenLetterArr={hiddenLetterArr}
                key={index}
                letter={char}
              >
                {char}
              </SecretLetter>
            ))}
          </div>
        );
      })}
    </div>
  );

  // <div className="mb-[118px] flex flex-wrap justify-center-safe gap-3">
  //   {secretWordArr.map((word, index) => {
  //     if (word === " ") {
  //       return (
  //         <div key={index} className="h-[60px] w-[34px] bg-transparent"></div>
  //       );
  //     } else {
  //       return (
  //         <SecretLetter
  //           hiddenLetterArr={hiddenLetterArr}
  //           key={index}
  //           letter={word}
  //         >
  //           {word}
  //         </SecretLetter>
  //       );
  //     }
  //   })}
  // </div>
};
