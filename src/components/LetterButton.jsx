export const LetterButton = ({children}) => {
  return (
    <button className="flex h-[56px] w-[28px] items-center justify-center rounded-[8px] bg-white text-[24px] text-blue-700 mb-6">
      {children}
    </button>
  );
};
