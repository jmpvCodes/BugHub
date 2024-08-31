// src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  isDarkMode={isDarkMode}
                  toogleTheme={toggleTheme}
                />
              }
            />
            <Route
              path="/login"
              element={
                <LoginPage isDarkMode={isDarkMode} toogleTheme={toggleTheme} />
              }
            />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="/bugs" element={<BugsPage />} />
            <Route path="analysis" element={<AnalysisPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
