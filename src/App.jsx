import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cosmos from "./assets/images/cosmos.jpg";
import space from "./assets/images/space.jpg";
import galaxy from "./assets/images/galaxy.jpg";

const App = () => {
  const backgrounds = [cosmos, space, galaxy];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [fade, setFade] = useState(true); 

  const phrases = [
    <>
      Site under <span className="italic">Construction</span>
    </>,
    <>
      Coming <span className="italic">Soon</span>
    </>,
    <>
      Portfolio Launching <span className="italic">Shortly</span>
    </>,
    <>
      Stay <span className="italic">Tuned</span>
    </>,
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const transitionDuration = 1000; // 1s fade duration
    const displayDuration = 5000; // 5s display duration

    const interval = setInterval(() => {
      setFade(false); // start fading out

      setTimeout(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
        setFade(true); // fade in new background
      }, transitionDuration);
    }, displayDuration);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="flex min-h-screen bg-white text-gray-700 dark:bg-black font-sans dark:text-gray-100">
      <div className="relative w-full overflow-auto pb-20 md:pb-0">
        {/* Single Background Layer with Fade */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
        />

        {/* Gradient & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-20% to-transparent" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

        {/* Content */}
        <div className="relative z-20 flex min-h-screen w-full flex-col items-center justify-end px-4 sm:px-6 py-16 sm:py-20 text-center">
          {" "}
          <div className="w-full">
            <div className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] overflow-hidden flex items-center justify-center">
              {" "}
              <AnimatePresence initial={false} mode="wait">
                <motion.h1
                  key={currentPhraseIndex}
                  className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-serif"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                >
                  {phrases[currentPhraseIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="mx-auto mt-4 max-w-xl text-gray-300 sm:text-lg">
              <p>This site is currently under construction.</p>
              <p>I'm working on my portfolio — stay tuned!</p>
            </div>

            <div className="mt-6 flex w-full flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="group relative">
                  <a
                    href="https://github.com/khantzawphyo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View my GitHub"
                    className="relative z-10 flex items-center rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-white text-center whitespace-normal"
                  >
                    Visit My GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <div className="absolute -inset-1 z-0 rounded-xl bg-white opacity-20 blur-md transition-all duration-300 group-hover:opacity-50" />
                </div>
              </div>

              <p className="text-xs text-gray-300">
                Feel free to drop a message.{" "}
                <a
                  href="mailto:khantzawphyo02@gmail.com"
                  className="underline hover:text-white"
                >
                  Reach out here!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
