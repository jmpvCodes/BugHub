import React from "react";
import { FaUser, FaEnvelope, FaBug } from "react-icons/fa";
import Header from "../components/Header";
import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Ana García",
    role: "Desarrollador Frontend",
    email: "ana@example.com",
    bugsResolved: 45,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Desarrollador Backend",
    email: "carlos@example.com",
    bugsResolved: 38,
  },
  {
    id: 3,
    name: "Elena Martínez",
    role: "Diseñadora UI/UX",
    email: "elena@example.com",
    bugsResolved: 12,
  },
  {
    id: 4,
    name: "David López",
    role: "QA Tester",
    email: "david@example.com",
    bugsResolved: 67,
  },
];

const TeamMemberCard: React.FC<{ member: (typeof teamMembers)[0] }> = ({
  member,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="bg-blue-500 rounded-full p-3 mr-4">
        <FaUser className="text-white" size={24} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {member.role}
        </p>
      </div>
    </div>
    <div className="space-y-2">
      <p className="flex items-center text-gray-700 dark:text-gray-300">
        <FaEnvelope className="mr-2" /> {member.email}
      </p>
      <p className="flex items-center text-gray-700 dark:text-gray-300">
        <FaBug className="mr-2" /> {member.bugsResolved} bugs resueltos
      </p>
    </div>
  </div>
);

const TeamPage: React.FC = () => {
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
        Equipo de Desarrollo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      <div className="mt-12">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Añadir Nuevo Miembro
        </button>
      </div>
    </div>
  );
};

export default TeamPage;
