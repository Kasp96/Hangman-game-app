export const SecretLetter = ({ children, hiddenLetterArr, letter }) => {
  const isHidden = hiddenLetterArr[letter.toUpperCase()] === true;

  return (
    <button
      className={`${isHidden ? "shadow-layer-hidden text-transparent opacity-25" : "shadow-layer-word text-white opacity-100"} mb-0.5 flex h-[60px] w-[34px] items-center justify-center rounded-[10px] bg-blue-500 px-3 py-1 text-[40px] uppercase min-md:w-[88px] min-md:h-[112px] min-md:rounded-[32px] min-md:text-[64pxh] min-lg:w-[112px] min-lg:h-[128px] min-lg:text-[88px]`}
    >
      {children}
    </button>
  );
};
