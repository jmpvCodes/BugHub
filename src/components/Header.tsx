import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  UserIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import BugIcon from "./landing/BugIcon";
import { CiSettings } from "react-icons/ci";
import { Menu } from "@headlessui/react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;
  isLoggedIn?: boolean;
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleTheme,
  language,
  setLanguage,
  isLoggedIn,
}) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isForgotPasswordPage = location.pathname === "/forgot-password";
  console.log("isLoggedIn", isLoggedIn);

  const navItems = [
    { name: language === "es" ? "Inicio" : "Home", href: "/#home" },
    {
      name: language === "es" ? "Características" : "Features",
      href: "/#features",
    },
    {
      name: language === "es" ? "¿Por qué BugHub?" : "Why BugHub?",
      href: "/#why-bughub",
    },
    {
      name: language === "es" ? "Demostración" : "Showcase",
      href: "/#showcase",
    },
  ];
  const dashboardNavItems = [
    { name: language === "es" ? "Resumen" : "Summary", href: "/summary" },
    { name: language === "es" ? "Bugs" : "Bugs", href: "/bugs" },
    {
      name: language === "es" ? "Análisis" : "Analysis",
      href: "/analysis",
    },
    { name: language === "es" ? "Proyectos" : "Projects", href: "/projects" },

    { name: language === "es" ? "Equipo" : "Team", href: "/team" },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to={isLoggedIn ? "/summary" : "/"}
            className="flex items-center"
          >
            <BugIcon className="h-8 w-auto sm:h-10 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
              BugHub
            </span>
          </Link>

          {isLoginPage && <nav className="hidden md:flex space-x-4"></nav>}

          {isLoggedIn && (
            <nav className="hidden md:flex space-x-4">
              {dashboardNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {!isLoggedIn &&
            !isLoginPage &&
            !isRegisterPage &&
            !isForgotPasswordPage && (
              <nav className="hidden md:flex space-x-4 items-center">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(2))}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleTheme}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    aria-label={
                      isDarkMode
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                  >
                    {isDarkMode ? (
                      <SunIcon className="h-6 w-6" />
                    ) : (
                      <MoonIcon className="h-6 w-6" />
                    )}
                  </button>
                  <Menu as="div" className="relative">
                    <Menu.Button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <span className="sr-only">Change language</span>
                      <span>{language.toUpperCase()}</span>
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setLanguage("es")}
                            className={`${
                              active
                                ? "bg-gray-100 dark:bg-gray-600"
                                : "text-gray-700 dark:text-gray-300"
                            } block w-full text-left px-4 py-2 text-sm`}
                          >
                            Español
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setLanguage("en")}
                            className={`${
                              active
                                ? "bg-gray-100 dark:bg-gray-600"
                                : "text-gray-700 dark:text-gray-300"
                            } block w-full text-left px-4 py-2 text-sm`}
                          >
                            English
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Link
                    to="/login"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    <UserIcon className="h-5 w-5 mr-1" />
                    {language === "es" ? "Iniciar Sesión" : "Login"}
                  </Link>
                </div>
              </nav>
            )}

          {isLoggedIn && (
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          )}

          {isLoggedIn && (
            <div className="items-center flex space-x-3">
              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>
              <Link
                to="/settings"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="User settings"
              >
                <CiSettings className="h-8 w-8" />
              </Link>
              <Link
                to="/profile"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="User profile"
              >
                <UserCircleIcon className="h-8 w-8" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
