import React from "react";
import {
  FaBug,
  FaCheckCircle,
  FaClock,
  FaProjectDiagram,
  FaUsers,
  FaArrowUp,
  FaArrowDown,
  FaFire,
  FaTrophy,
} from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SummaryCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: "up" | "down";
  trendValue?: string;
}> = ({ title, value, icon, trend, trendValue }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center transition-transform transform hover:scale-105">
    <div className="mr-4 text-blue-500 dark:text-blue-400">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
      {trend && (
        <div
          className={`flex items-center mt-2 ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend === "up" ? <FaArrowUp /> : <FaArrowDown />}
          <span className="ml-1">{trendValue}</span>
        </div>
      )}
    </div>
  </div>
);

const ProjectProgressCard: React.FC<{
  name: string;
  progress: number;
  color: string;
}> = ({ name, progress, color }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      {name}
    </h3>
    <div className="w-24 h-24 mx-auto">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: color,
          pathColor: color,
        })}
      />
    </div>
  </div>
);

const SummaryPage: React.FC = () => {
  const bugTrendData = [
    { name: "Lun", bugs: 12 },
    { name: "Mar", bugs: 19 },
    { name: "Mié", bugs: 15 },
    { name: "Jue", bugs: 22 },
    { name: "Vie", bugs: 18 },
    { name: "Sáb", bugs: 10 },
    { name: "Dom", bugs: 8 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Panel de Control
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="Bugs Activos"
          value="24"
          icon={<FaBug size={24} />}
          trend="up"
          trendValue="10%"
        />
        <SummaryCard
          title="Bugs Resueltos"
          value="156"
          icon={<FaCheckCircle size={24} />}
          trend="down"
          trendValue="5%"
        />
        <SummaryCard
          title="Tiempo Promedio de Resolución"
          value="2.5 días"
          icon={<FaClock size={24} />}
        />
        <SummaryCard
          title="Proyectos Activos"
          value="8"
          icon={<FaProjectDiagram size={24} />}
          trend="up"
          trendValue="15%"
        />
        <SummaryCard
          title="Miembros del Equipo"
          value="12"
          icon={<FaUsers size={24} />}
        />
        <SummaryCard
          title="Eficiencia del Equipo"
          value="92%"
          icon={<FaFire size={24} />}
          trend="up"
          trendValue="3%"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tendencia de Bugs
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={bugTrendData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bugs" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Top Contribuidores
          </h2>
          <ol className="list-decimal list-inside">
            <li className="text-gray-700 dark:text-gray-300 mb-2">
              Ana García - 45 bugs resueltos{" "}
              <FaTrophy className="inline text-yellow-500 ml-2" />
            </li>
            <li className="text-gray-700 dark:text-gray-300 mb-2">
              Carlos Rodríguez - 38 bugs resueltos
            </li>
            <li className="text-gray-700 dark:text-gray-300 mb-2">
              Elena Martínez - 32 bugs resueltos
            </li>
          </ol>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Progreso de Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ProjectProgressCard
            name="Rediseño Web"
            progress={75}
            color="#4CAF50"
          />
          <ProjectProgressCard name="App Móvil" progress={40} color="#2196F3" />
          <ProjectProgressCard name="API v2" progress={90} color="#FFC107" />
          <ProjectProgressCard
            name="Base de Datos"
            progress={60}
            color="#9C27B0"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Actividad Reciente
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCheckCircle className="text-green-500 mr-2" />
            <strong>Ana García</strong> resolvió el bug <strong>#1234</strong>{" "}
            en el proyecto Rediseño Web
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaBug className="text-red-500 mr-2" />
            <strong>Carlos Rodríguez</strong> reportó un nuevo bug{" "}
            <strong>#5678</strong> en la App Móvil
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaProjectDiagram className="text-blue-500 mr-2" />
            <strong>Elena Martínez</strong> inició una nueva fase en el proyecto
            API v2
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummaryPage;
