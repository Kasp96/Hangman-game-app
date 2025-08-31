import { useTextStroke } from "../hooks/useTextStroke";

export const ViewHeadingElement = ({ children, className }) => {
  const textElStroke = useTextStroke();

  return (
    <div
      className={`relative max-w-2 ${className} text-[30px] tracking-[2.5px] uppercase min-md:text-[50px]`}
    >
      <span
        className="absolute inset-0 text-black"
        style={{
          zIndex: 0,
          WebkitTextStroke: `${textElStroke + "px"} #243041`,
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
