import React from "react";
import { FaBug, FaCheckCircle, FaClock } from "react-icons/fa";
import Header from "../components/Header";
import { useState } from "react";

const SummaryCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
}> = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center">
    <div className="mr-4 text-blue-500 dark:text-blue-400">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  </div>
);

const SummaryPage: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toogleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toogleTheme}
        language={language}
        isLoggedIn={true}
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Resumen del Proyecto
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Bugs Activos"
          value="24"
          icon={<FaBug size={24} />}
        />
        <SummaryCard
          title="Bugs Resueltos"
          value="156"
          icon={<FaCheckCircle size={24} />}
        />
        <SummaryCard
          title="Tiempo Promedio de Resolución"
          value="2.5 días"
          icon={<FaClock size={24} />}
        />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Actividad Reciente
        </h2>
        <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
          <li className="p-4 text-white">Usuario1 resolvió el bug #1234</li>
          <li className="p-4 text-white">
            Usuario2 asignó el bug #5678 a Usuario3
          </li>
          <li className="p-4 text-white">
            Usuario4 reportó un nuevo bug #9101
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummaryPage;
