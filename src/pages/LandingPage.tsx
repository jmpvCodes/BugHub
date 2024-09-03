// src/pages/LandingPage.tsx

import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import WhyBugHub from "../components/landing/WhyBugHub";
import FeaturesShowcase from "../components/landing/FeaturesShowcase";
import Header from "../components/Header";
import { useState } from "react";

interface LandingPageProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const LandingPage: React.FC<LandingPageProps> = (isDarkMode, toogleTheme) => {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toogleTheme}
        language={language}
        setLanguage={setLanguage}
        isLoggedIn={isLoggedIn}
      />
      <Hero />
      <Features />
      <WhyBugHub />
      <FeaturesShowcase />
    </>
  );
};

export default LandingPage;
