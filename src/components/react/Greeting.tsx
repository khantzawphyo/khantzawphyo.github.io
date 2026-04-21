import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const greetings = [
  "Hello,",
  "Bonjour,",
  "Mingalarpar,",
  "Hola,",
  "Konnichiwa,",
  "Ciao,",
  "Ni hao,",
  "Xin chào,",
];

export default function Greeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block min-w-37.5">
      <AnimatePresence mode="wait">
        <motion.span
          key={greetings[index]}
          initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="inline-block"
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
