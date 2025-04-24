import React, { useState } from "react";
import cosmos from "./assets/images/cosmos.jpg";
import space from "./assets/images/space.jpg";
import yangon from "./assets/images/yangon.jpg";
import ubein from "./assets/images/u-bein.jpg";
import bagan from "./assets/images/bagan.jpg";
import BackgroundImage from "./components/BackgroundImage";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Cursor from "./components/Cursor";

const App = () => {
  const backgrounds = [cosmos, space, yangon, ubein, bagan];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-700 dark:bg-black font-sans dark:text-gray-100">
      <Cursor />
      <Header onMenuToggle={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <div className="relative w-full overflow-auto pb-20 md:pb-0">
        <BackgroundImage backgrounds={backgrounds} />

        {/* Gradient & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-20% to-transparent" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

        <MainContent />
      </div>
    </div>
  );
};

export default App;
