export const SecretLetter = ({ children }) => {
  return (
    <button className="shadow-layer-word mb-0.5 flex h-[60px] w-[34px] items-center justify-center rounded-[10px] bg-blue-500 px-3 py-1 text-[40px] text-white uppercase">
      {children}
    </button>
  );
};
