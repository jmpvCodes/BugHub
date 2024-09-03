import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBug,
  FaEdit,
  FaTrash,
  FaClock,
} from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  bugsResolved: number;
  bugsFound: number;
  averageResolutionTime: number; // En horas
  projectsContributed: number;
  hoursWorked: number;
}

const initialTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ana García",
    role: "Desarrollador Frontend",
    email: "ana@example.com",
    bugsResolved: 45,
    bugsFound: 50,
    averageResolutionTime: 3.5,
    projectsContributed: 10,
    hoursWorked: 1200,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Desarrollador Backend",
    email: "carlos@example.com",
    bugsResolved: 38,
    bugsFound: 42,
    averageResolutionTime: 4.2,
    projectsContributed: 8,
    hoursWorked: 1100,
  },
  {
    id: 3,
    name: "Elena Martínez",
    role: "Diseñadora UI/UX",
    email: "elena@example.com",
    bugsResolved: 12,
    bugsFound: 15,
    averageResolutionTime: 5.0,
    projectsContributed: 5,
    hoursWorked: 900,
  },
  {
    id: 4,
    name: "David López",
    role: "QA Tester",
    email: "david@example.com",
    bugsResolved: 67,
    bugsFound: 70,
    averageResolutionTime: 2.8,
    projectsContributed: 12,
    hoursWorked: 1300,
  },
];

const TeamMemberCard: React.FC<{
  member: TeamMember;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}> = ({ member, onEdit, onDelete }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
    <div className="absolute top-2 right-2 flex space-x-2">
      <button
        onClick={() => onEdit(member.id)}
        className="text-blue-500 hover:text-blue-700"
      >
        <FaEdit />
      </button>
      <button
        onClick={() => onDelete(member.id)}
        className="text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
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
      <p className="flex items-center text-gray-700 dark:text-gray-300">
        <FaBug className="mr-2" /> {member.bugsFound} bugs encontrados
      </p>
      <p className="flex items-center text-gray-700 dark:text-gray-300">
        <FaClock className="mr-2" /> {member.averageResolutionTime}h tiempo
        medio de resolución
      </p>
      <p className="flex items-center text-gray-700 dark:text-gray-300">
        Proyectos: {member.projectsContributed}
      </p>
      <p className="flex items-center text-gray-700 dark:text-gray-300">
        Horas trabajadas: {member.hoursWorked}
      </p>
    </div>
  </div>
);

const TeamPage: React.FC = () => {
  const [teamMembers, setTeamMembers] =
    useState<TeamMember[]>(initialTeamMembers);

  const handleEditMember = (id: number) => {
    console.log("Editar miembro con ID:", id);
  };

  const handleDeleteMember = (id: number) => {
    const updatedMembers = teamMembers.filter((member) => member.id !== id);
    setTeamMembers(updatedMembers);
  };

  const handleAddMember = () => {
    console.log("Añadir nuevo miembro");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Equipo de Desarrollo
      </h1>
      <p className="text-gray-700 dark:text-gray-400 mb-6">
        Aquí puedes ver los miembros de nuestro equipo, sus roles y métricas de
        rendimiento.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onEdit={handleEditMember}
            onDelete={handleDeleteMember}
          />
        ))}
      </div>
      <div className="mt-12">
        <button
          onClick={handleAddMember}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Añadir Nuevo Miembro
        </button>
      </div>
    </div>
  );
};

export default TeamPage;
