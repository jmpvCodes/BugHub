// src/pages/BugsPage.tsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBug, FaPlus } from "react-icons/fa";
import BugModal from "../components/bugs/BugModal";
import BugList from "../components/bugs/BugList";

interface Bug {
  id: number;
  title: string;
  description: string;
  severity: string;
  priority: string;
  category: string;
  assignedTo: string;
  dateFound: string;
  expectedFixDate: string;
  steps: string;
  status: string;
  attachments: string[]; // URLs de los archivos adjuntos
}

const BugsPage: React.FC = () => {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Aquí cargarías los bugs desde tu API
    // Por ahora, usaremos datos de ejemplo más detallados
    setBugs([
      {
        id: 1,
        title: "Error en login",
        description:
          "Los usuarios no pueden iniciar sesión después de actualizar sus contraseñas",
        severity: "Alta",
        priority: "Urgente",
        category: "Autenticación",
        assignedTo: "Juan Pérez",
        dateFound: "2023-05-15",
        expectedFixDate: "2023-05-20",
        steps:
          "1. Actualizar contraseña\n2. Intentar iniciar sesión\n3. Recibir error 403",
        status: "Abierto",
        attachments: ["error_screenshot.png"],
      },
      {
        id: 2,
        title: "Problema de renderizado en Safari",
        description:
          "Las imágenes no se cargan correctamente en Safari en dispositivos iOS",
        severity: "Media",
        priority: "Media",
        category: "Frontend",
        assignedTo: "Ana García",
        dateFound: "2023-05-10",
        expectedFixDate: "2023-05-25",
        steps:
          "1. Abrir la página de galería en Safari iOS\n2. Observar que las imágenes no se cargan",
        status: "En progreso",
        attachments: [],
      },
    ]);
  }, []);

  const handleAddBug = (newBugData: FormData) => {
    // Aquí procesarías el FormData y lo enviarías a tu API
    // Por ahora, simularemos la creación de un nuevo bug
    const newBug: Bug = {
      id: bugs.length + 1,
      title: newBugData.get("title") as string,
      description: newBugData.get("description") as string,
      severity: newBugData.get("severity") as string,
      priority: newBugData.get("priority") as string,
      category: newBugData.get("category") as string,
      assignedTo: newBugData.get("assignedTo") as string,
      dateFound: newBugData.get("dateFound") as string,
      expectedFixDate: newBugData.get("expectedFixDate") as string,
      steps: newBugData.get("steps") as string,
      status: "Abierto",
      attachments: [], // Aquí procesarías los archivos adjuntos y guardarías sus URLs
    };

    setBugs([...bugs, newBug]);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="justify-between items-center mb-6 mt-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Bugs
        </h1>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2"
          >
            <FaPlus className="inline mr-2" /> Nuevo Bug
          </button>
          <Link
            to="/multiple-bugs"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
          >
            <FaBug className="inline mr-2" /> Crear Múltiples Bugs
          </Link>
        </div>
      </div>
      <BugList bugs={bugs} />
      {isModalOpen && (
        <BugModal
          onClose={() => setIsModalOpen(false)}
          onAddBug={handleAddBug}
        />
      )}
    </div>
  );
};

export default BugsPage;
