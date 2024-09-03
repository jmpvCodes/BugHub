import React, { useState } from "react";
import {
  FaFolder,
  FaUser,
  FaBug,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Header from "../components/Header";

interface Bug {
  id: number;
  title: string;
  severity: "Baja" | "Media" | "Alta" | "Crítica";
  status: "Abierto" | "En progreso" | "Resuelto";
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  teamMembers: TeamMember[];
  activeBugs: Bug[];
}

const initialProjects: Project[] = [
  {
    id: 1,
    name: "iPets Web",
    description:
      "Actualización completa de la interfaz de usuario y mejora de la experiencia del usuario en página web para mascotas.",
    teamMembers: [
      { id: 1, name: "Ana García", role: "Desarrollador Frontend" },
      { id: 2, name: "Carlos Rodríguez", role: "Desarrollador Backend" },
      { id: 3, name: "Elena Martínez", role: "Diseñadora UI/UX" },
    ],
    activeBugs: [
      {
        id: 1,
        title: "Error en el formulario de registro",
        severity: "Alta",
        status: "En progreso",
      },
      {
        id: 2,
        title: "Problema de rendimiento en la página de inicio",
        severity: "Media",
        status: "Abierto",
      },
    ],
  },
  {
    id: 2,
    name: "BugHub App",
    description:
      "Creación de una aplicación móvil para iOS y Android que complemente nuestra plataforma web existente.",
    teamMembers: [
      { id: 4, name: "David López", role: "Desarrollador iOS" },
      { id: 5, name: "Eva Sánchez", role: "Desarrollador Android" },
      { id: 3, name: "Elena Martínez", role: "Diseñadora UI/UX" },
    ],
    activeBugs: [
      {
        id: 3,
        title: "Crash en la pantalla de inicio en Android",
        severity: "Crítica",
        status: "Abierto",
      },
      {
        id: 4,
        title: "Problemas de autenticación en iOS",
        severity: "Alta",
        status: "En progreso",
      },
    ],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <FaFolder className="mr-2 text-blue-500" />
          {project.name}
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-700"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>
      {isExpanded && (
        <div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Miembros del Equipo
            </h4>
            <ul className="space-y-2">
              {project.teamMembers.map((member) => (
                <li
                  key={member.id}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <FaUser className="mr-2 text-green-500" />
                  {member.name} - {member.role}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Bugs Activos
            </h4>
            <ul className="space-y-2">
              {project.activeBugs.map((bug) => (
                <li
                  key={bug.id}
                  className="flex items-center justify-between text-gray-700 dark:text-gray-300"
                >
                  <span className="flex items-center">
                    <FaBug className="mr-2 text-red-500" />
                    {bug.title}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      bug.severity === "Crítica"
                        ? "bg-red-500 text-white"
                        : bug.severity === "Alta"
                        ? "bg-orange-500 text-white"
                        : bug.severity === "Media"
                        ? "bg-yellow-500 text-black"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {bug.severity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="container mx-auto px-4 py-8">
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        language={language}
        isLoggedIn={true}
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Proyectos Activos
      </h1>
      <p className="text-gray-700 dark:text-gray-400 mb-6">
        Aquí puedes ver todos los proyectos en los que estamos trabajando
        actualmente, junto con los miembros del equipo asignados y los bugs
        activos.
      </p>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
