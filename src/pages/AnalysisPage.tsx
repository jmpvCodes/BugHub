import React from "react";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";

const AnalysisCard: React.FC<{ title: string; icon: React.ReactNode }> = ({
  title,
  icon,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <div className="text-blue-500 dark:text-blue-400">{icon}</div>
    </div>
    <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
      <span className="text-gray-500 dark:text-gray-400">Gráfico aquí</span>
    </div>
  </div>
);

interface AnalysisPageProps {
  isDarkMode: boolean;
  toogleTheme: () => void;
}

const AnalysisPage: React.FC<AnalysisPageProps> = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Análisis de Bugs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnalysisCard title="Bugs por Estado" icon={<FaChartPie size={24} />} />
        <AnalysisCard
          title="Bugs por Prioridad"
          icon={<FaChartBar size={24} />}
        />
        <AnalysisCard
          title="Tendencia de Resolución"
          icon={<FaChartLine size={24} />}
        />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Estadísticas Generales
        </h2>
        <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <li className="text-white">
            Tiempo promedio de resolución: 2.5 días
          </li>
          <li className="text-white">Bugs resueltos esta semana: 15</li>
          <li className="text-white">Bugs nuevos esta semana: 8</li>
          <li className="text-white">
            Desarrollador más activo: Usuario2 (23 bugs resueltos)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnalysisPage;
