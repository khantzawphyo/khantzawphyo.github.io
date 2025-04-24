import CallToAction from "./CallToAction";
import HeadingText from "./HeadingText";

const MainContent = () => {
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

  return (
    <div className="relative z-20 flex min-h-screen w-full flex-col items-center justify-end px-4 sm:px-6 py-16 sm:py-20 text-center">
      <div className="w-full">
        <HeadingText phrases={phrases} />

        <div className="mx-auto mt-4 max-w-xl text-gray-300 sm:text-lg">
          <p>This site is currently under construction.</p>
          <p>I'm working on my portfolio — stay tuned!</p>
        </div>

        <CallToAction />
      </div>
    </div>
  );
};

export default MainContent;
