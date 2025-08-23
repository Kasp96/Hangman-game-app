export const ViewHeading = ({ children, className, style = {} }) => {
  return (
    <div className={`relative ${className} tracking-[2.5px]`}>
      <span
        className="absolute inset-0 text-black"
        style={{
          zIndex: 0,
          WebkitTextStroke: "10px #243041",
          ...(window.innerWidth >= 768 && { WebkitTextStroke: "20px #243041" }),
          ...style,
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
