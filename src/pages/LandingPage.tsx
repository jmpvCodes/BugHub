// src/pages/LandingPage.tsx

import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import WhyBugHub from "../components/landing/WhyBugHub";
import FeaturesShowcase from "../components/landing/FeaturesShowcase";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhyBugHub />
      <FeaturesShowcase />
    </>
  );
};

export default LandingPage;
