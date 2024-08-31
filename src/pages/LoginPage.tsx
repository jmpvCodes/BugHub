// src/pages/LoginPage.tsx

import React from "react";
import LoginScreen from "../components/login/LoginScreen";
import Header from "../components/Header";
import { useState } from "react";

interface LoginPageProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const LoginPage: React.FC<LoginPageProps> = (isDarkMode, toogleTheme) => {
  const [language, setLanguage] = useState<"es" | "en">("es");
  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toogleTheme}
        language={language}
      />
      <LoginScreen />
    </>
  );
};

export default LoginPage;
