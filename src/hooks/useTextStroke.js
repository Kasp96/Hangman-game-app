import { useEffect, useState } from "react";

export const useTextStroke = () => {
  const [headingTextStroke, setHeadingTextStroke] = useState(10);
  const [headingElTextStroke, setHeadingElTextStroke] = useState(10);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width >= 768) {
      setHeadingTextStroke(20);
      setHeadingElTextStroke(21);
    } else {
      setHeadingTextStroke(10);
      setHeadingElTextStroke(12);
    }
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (headingTextStroke, headingElTextStroke);
};
