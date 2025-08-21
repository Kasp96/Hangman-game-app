export const OverlayContainer = ({ children }) => {
  return (
    <div className="absolute top-0 flex h-full w-full flex-col gap-6 overflow-x-hidden bg-[rgba(0,0,0,0.35)] px-5 py-8">
      {children}
    </div>
  );
};
