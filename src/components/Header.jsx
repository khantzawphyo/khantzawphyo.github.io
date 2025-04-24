import { motion } from "framer-motion";
import NavLink from "./NavLink";

const Header = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Subtle background with border */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/10" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Logo/Name */}
          <a
            className="font-medium text-white font-sans text-lg hover:text-gray-200 transition-colors duration-200 flex items-center"
            href="https://khantzawphyo.github.io"
          >
            <motion.span
              className="bg-white/10 rounded-full p-2 mr-2 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.span>
            khantzawphyo
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-2">
            <NavLink href="#">Home</NavLink>
            <NavLink href="https://github.com/khantzawphyo" target="_blank">
              GitHub
            </NavLink>
            <NavLink href="mailto:khantzawphyo02@gmail.com">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-white focus:outline-none hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={onMenuToggle}
            aria-label="Toggle mobile menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
