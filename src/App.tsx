// src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegisterPage from "./pages/RegisterPage";
import SummaryPage from "./pages/SummaryPage";
import BugsPage from "./pages/BugsPage";
import AnalysisPage from "./pages/AnalysisPage";
import TeamPage from "./pages/TeamPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import CreateMultipleBugsPage from "./pages/CreateMultipleBugsPage";
import ProjectsPage from "./pages/ProjectsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Comprobar preferencia de modo oscuro
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);

    // Comprobar si hay un token de sesión
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    // Opcional: Escuchar cambios en la preferencia de color del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addListener(handleChange);

    // Limpieza del efecto
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ToastContainer />
      <Router>
        <div
          className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}
        >
          <Header
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            language={language}
            setLanguage={setLanguage}
            isLoggedIn={isLoggedIn}
          />

          <div className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/login"
                element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/summary" element={<SummaryPage />} />
              <Route path="/bugs" element={<BugsPage />} />
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route
                path="/profile"
                element={<ProfilePage setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route
                path="/multiple-bugs"
                element={<CreateMultipleBugsPage />}
              />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
