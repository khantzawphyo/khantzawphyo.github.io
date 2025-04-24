import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div className="mt-6 flex w-full flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="group relative">
          <motion.div
            initial={false}
            whileHover="hover"
            whileTap="tap"
            className="group relative"
          >
            <a
              href="https://github.com/khantzawphyo"
              className="relative z-10 flex items-center rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-300 hover:bg-white"
            >
              Visit My GitHub
              <motion.span
                variants={{
                  hover: {
                    x: [0, 4, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }}
                className="ml-1 inline-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
            </a>

            {/* Glow effect - now properly synced */}
            <motion.div
              className="absolute -inset-1 z-0 rounded-xl bg-white opacity-20 blur-md"
              variants={{
                hover: { opacity: 0.4 },
                tap: { opacity: 0.3 },
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <div className="absolute -inset-1 z-0 rounded-xl bg-white opacity-20 blur-md transition-all duration-300 group-hover:opacity-50 group-active:opacity-50 group-focus:opacity-50" />
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
  );
};
export default CallToAction;
