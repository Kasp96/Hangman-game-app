export const ViewHeadingElement = ({ children, className }) => {
  return (
    <div
      className={`max-w-2 relative ${className} text-[30px] tracking-[2.5px] uppercase`}
    >
      <span
        className="absolute inset-0 text-black"
        style={{
          zIndex: 0,
          WebkitTextStroke: "11px #243041",
        }}
      >
        {children}
      </span>
      <span
        className="absolute bg-white bg-clip-text text-transparent"
        style={{
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </div>
  );
};
