import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          className="fixed top-0 right-0 z-40 h-full w-3/4 sm:w-1/3 bg-black/20 backdrop-blur-md flex flex-col items-start p-6 space-y-6 text-white border-l border-white/10"
        >
          <button
            className="self-end text-white"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <a href="#" onClick={onClose} className="text-lg">
            Home
          </a>
          <a
            href="https://github.com/khantzawphyo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
          >
            GitHub
          </a>
          <a
            href="mailto:khantzawphyo02@gmail.com"
            onClick={onClose}
            className="text-lg"
          >
            Contact
          </a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
