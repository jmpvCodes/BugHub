import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../components/Header";
import { useState } from "react";

const bugData = [
  {
    id: 1,
    title: "Error en el login",
    status: "Abierto",
    priority: "Alta",
    assignedTo: "Usuario1",
  },
  {
    id: 2,
    title: "Problema de renderizado en IE11",
    status: "En Progreso",
    priority: "Media",
    assignedTo: "Usuario2",
  },
  {
    id: 3,
    title: "Crash en la página de perfil",
    status: "Resuelto",
    priority: "Baja",
    assignedTo: "Usuario3",
  },
];

const BugsPage: React.FC = () => {
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
        Gestión de Bugs
      </h1>
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Buscar bugs..."
          className="p-2 border rounded-md w-64 dark:bg-gray-700 dark:text-white"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Nuevo Bug
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-white">ID</th>
              <th className="px-4 py-2 text-left text-white">Título</th>
              <th className="px-4 py-2 text-left text-white">Estado</th>
              <th className="px-4 py-2 text-left text-white">Prioridad</th>
              <th className="px-4 py-2 text-left text-white">Asignado a</th>
              <th className="px-4 py-2 text-left text-white">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {bugData.map((bug) => (
              <tr key={bug.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2 text-white">{bug.id}</td>
                <td className="px-4 py-2 text-white">{bug.title}</td>
                <td className="px-4 py-2 text-white">{bug.status}</td>
                <td className="px-4 py-2 text-white">{bug.priority}</td>
                <td className="px-4 py-2 text-white">{bug.assignedTo}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BugsPage;
