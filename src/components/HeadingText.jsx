import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeadingText = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false} mode="wait">
        <motion.h1
          key={currentPhraseIndex}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-serif"
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            textShadow: "0 0 10px rgba(255,255,255,0.3)",
          }}
          exit={{
            opacity: 0,
            y: -20,
            rotateX: -90,
            textShadow: "0 0 5px rgba(255,255,255,0.1)",
          }}
          transition={{
            duration: 0.8,
            ease: "backOut",
          }}
        >
          {phrases[currentPhraseIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default HeadingText;
