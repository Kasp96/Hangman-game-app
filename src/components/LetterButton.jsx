export const LetterButton = ({ children, clicked, setClicked }) => {
  return (
    <button
      onClick={() => setClicked(true)}
      className={`${clicked ? "opacity-25" : "opacity-100"} mb-6 flex h-[56px] w-[28px] items-center justify-center rounded-[8px] bg-white text-[24px] text-blue-700`}
    >
      {children}
    </button>
  );
};
