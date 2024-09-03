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
import ProfilePage from "./pages/ProfilePage";
import CreateMultipleBugsPage from "./pages/CreateMultipleBugsPage";
import ProjectsPage from "./pages/ProjectsPage";

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
      <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
        <div className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-300">
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
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/multiple-bugs" element={<CreateMultipleBugsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
