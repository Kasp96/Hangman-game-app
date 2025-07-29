export const LetterButton = ({ children, handleLetterClick, clicked, letter }) => {
  return (
    <button
      onClick={() => handleLetterClick(letter)}
      className={`${clicked ? "opacity-25" : "opacity-100"} mb-6 flex h-[56px] w-[28px] items-center justify-center rounded-[8px] bg-white text-[24px] text-blue-700`}
    >
      {children}
    </button>
  );
};
