export const BlueButton = ({ children, className = "" }) => {
  return (
    <button
      className={`shadow-layer-3 before:shadow-layer-4 relative flex w-[260px] justify-center bg-blue-500 tracking-wide uppercase before:absolute before:inset-[0] before:content-[''] ${className} `}
      style={{
        color: "var(--color-white)",
      }}
    >
      {children}
    </button>
  );
};
