import { useEffect, useState } from "react";

export const useTextStroke = () => {
  const [textStroke, setTextStroke] = useState(10);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    width >= 768 ? setTextStroke(20) : setTextStroke(10);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return textStroke;
};
