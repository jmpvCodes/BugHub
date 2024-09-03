// src/pages/CreateMultipleBugsPage.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa";

interface Bug {
  title: string;
  description: string;
  severity: string;
  priority: string;
  category: string;
  assignedTo: string;
  dateFound: string;
  expectedFixDate: string;
  steps: string;
}

const CreateMultipleBugsPage: React.FC = () => {
  const [bugs, setBugs] = useState<Bug[]>([
    {
      title: "",
      description: "",
      severity: "Media",
      priority: "Media",
      category: "",
      assignedTo: "",
      dateFound: "",
      expectedFixDate: "",
      steps: "",
    },
  ]);
  const navigate = useNavigate();
  const handleAddBug = () => {
    setBugs([
      ...bugs,
      {
        title: "",
        description: "",
        severity: "Media",
        priority: "Media",
        category: "",
        assignedTo: "",
        dateFound: "",
        expectedFixDate: "",
        steps: "",
      },
    ]);
  };

  const handleRemoveBug = (index: number) => {
    const newBugs = bugs.filter((_, i) => i !== index);
    setBugs(newBugs);
  };

  const handleBugChange = (index: number, field: keyof Bug, value: string) => {
    const newBugs = [...bugs];
    newBugs[index] = { ...newBugs[index], [field]: value };
    setBugs(newBugs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías los bugs a tu API
    console.log("Bugs a crear:", bugs);
    // Después de crear los bugs, redirige a la página de bugs
    navigate("/bugs");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Crear Múltiples Bugs
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {bugs.map((bug, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Bug #{index + 1}
              </h3>
              <button
                type="button"
                onClick={() => handleRemoveBug(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={bug.title}
                onChange={(e) =>
                  handleBugChange(index, "title", e.target.value)
                }
                placeholder="Título del bug"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                required
              />
              <input
                type="text"
                value={bug.category}
                onChange={(e) =>
                  handleBugChange(index, "category", e.target.value)
                }
                placeholder="Categoría"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <select
                value={bug.severity}
                onChange={(e) =>
                  handleBugChange(index, "severity", e.target.value)
                }
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
                <option value="Crítica">Crítica</option>
              </select>
              <select
                value={bug.priority}
                onChange={(e) =>
                  handleBugChange(index, "priority", e.target.value)
                }
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
                <option value="Urgente">Urgente</option>
              </select>
              <input
                type="text"
                value={bug.assignedTo}
                onChange={(e) =>
                  handleBugChange(index, "assignedTo", e.target.value)
                }
                placeholder="Asignado a"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <input
                type="date"
                value={bug.dateFound}
                onChange={(e) =>
                  handleBugChange(index, "dateFound", e.target.value)
                }
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <input
                type="date"
                value={bug.expectedFixDate}
                onChange={(e) =>
                  handleBugChange(index, "expectedFixDate", e.target.value)
                }
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <textarea
                value={bug.description}
                onChange={(e) =>
                  handleBugChange(index, "description", e.target.value)
                }
                placeholder="Descripción del bug"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white md:col-span-2"
                rows={3}
                required
              ></textarea>
              <textarea
                value={bug.steps}
                onChange={(e) =>
                  handleBugChange(index, "steps", e.target.value)
                }
                placeholder="Pasos para reproducir"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white md:col-span-2"
                rows={3}
              ></textarea>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleAddBug}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
          >
            <FaPlus className="inline mr-2" /> Añadir Otro Bug
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Crear Bugs
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMultipleBugsPage;
