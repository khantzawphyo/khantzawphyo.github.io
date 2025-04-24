import { useEffect, useState } from "react";

const BackgroundImage = ({ backgrounds }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const transitionDuration = 1000;
    const displayDuration = 5000;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
        setFade(true);
      }, transitionDuration);
    }, displayDuration);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
    />
  );
};

export default BackgroundImage;
