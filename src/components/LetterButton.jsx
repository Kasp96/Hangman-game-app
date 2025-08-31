export const LetterButton = ({
  children,
  handleLetterClick,
  clicked,
  letter,
}) => {
  return (
    <button
      disabled={clicked}
      onClick={() => handleLetterClick(letter)}
      className={`${clicked ? "opacity-25" : "opacity-100"} mb-6 min-md:mb-0 flex h-[56px] w-[28px] items-center justify-center rounded-[8px] bg-white text-[24px] text-blue-700 min-md:w-[64px] min-md:h-[84px] min-md:rounded-[20px] min-md:text-[48px] min-lg:w-[109px]`}
    >
      {children}
    </button>
  );
};
