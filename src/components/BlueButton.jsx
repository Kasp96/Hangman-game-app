export const BlueButton = ({
  children,
  className = "",
  style = {},
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`shadow-layer-3 before:shadow-layer-4 relative flex justify-center bg-blue-500 tracking-wide uppercase before:absolute before:inset-[0] before:content-[''] ${className} `}
      style={{
        color: "var(--color-white)",
        ...style,
      }}
    >
      {children}
    </button>
  );
};
