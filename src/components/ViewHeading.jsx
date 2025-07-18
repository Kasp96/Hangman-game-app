export const ViewHeading = ({children}) => {
  return (
    <div className="relative text-[48px] tracking-[2.5px]">
      <span
        className="absolute inset-0 text-black"
        style={{
          zIndex: 0,
          WebkitTextStroke: "10px #243041",
        }}
      >
        {children}
      </span>
      <span
        className="bg-gradient-heading relative bg-clip-text text-transparent"
        style={{
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </div>
  );
};
