export const GlassPanel = ({ children }) => {
  return (
    <div
      className="shadow-layer-5 before:shadow-layer-6 absolute top-[55%] flex h-[480px] translate-y-[-50%] flex-col items-center justify-end gap-[57px] rounded-[45px] px-8 before:absolute before:inset-0 before:rounded-[45px]"
      style={{ backgroundImage: "var(--gradient-menu)" }}
    >
      {children}
    </div>
  );
};
