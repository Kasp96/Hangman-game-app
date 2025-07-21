export const OverlayContainer = ({ children }) => {
  return (
    <div className="absolute top-0 flex h-full w-full flex-col gap-6 overflow-hidden bg-[rgba(0,0,0,0.35)] px-6 py-8">
      {children}
    </div>
  );
};
