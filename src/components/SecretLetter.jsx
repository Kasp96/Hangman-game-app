export const SecretLetter = ({ children, isLetterHidden }) => {
  return (
    <button
      className={`${isLetterHidden ? "shadow-layer-hidden opacity-25" : "shadow-layer-word opacity-100"} mb-0.5 flex h-[60px] w-[34px] items-center justify-center rounded-[10px] bg-blue-500 px-3 py-1 text-[40px] text-white uppercase`}
    >
      {isLetterHidden ? "" : children}
    </button>
  );
};
