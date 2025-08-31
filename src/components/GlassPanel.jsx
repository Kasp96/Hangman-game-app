export const GlassPanel = ({ children, className = "" }) => {
  return (
    <div
      className={`shadow-layer-5 before:shadow-layer-6 absolute top-[55%] flex translate-y-[-50%] flex-col items-center justify-end rounded-[45px] px-8 before:absolute before:inset-0 before:rounded-[45px] ${className} `}
      style={{ backgroundImage: "var(--gradient-menu)" }}
    >
      {children}
    </div>
  );
};
