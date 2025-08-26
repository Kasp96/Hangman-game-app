import { useTextStroke } from "../hooks/useTextStroke";

export const ViewHeading = ({ children, className }) => {
  const textStroke = useTextStroke();

  return (
    <div className={`relative ${className} tracking-[2.5px]`}>
      <span
        className="absolute inset-0 text-black"
        style={{
          zIndex: 0,
          WebkitTextStroke: `${textStroke + "px"}  #243041`,
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
