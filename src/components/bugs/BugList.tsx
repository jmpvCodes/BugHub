// src/components/bugs/BugList.tsx

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  attachments: string[];
}

interface BugListProps {
  bugs: Bug[];
}

const BugList: React.FC<BugListProps> = ({ bugs }) => {
  const [expandedBug, setExpandedBug] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedBug(expandedBug === id ? null : id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Título</th>
            <th className="py-3 px-6 text-left">Severidad</th>
            <th className="py-3 px-6 text-left">Prioridad</th>
            <th className="py-3 px-6 text-left">Categoría</th>
            <th className="py-3 px-6 text-left">Estado</th>
            <th className="py-3 px-6 text-left">Detalle</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 dark:text-gray-200 text-sm font-light">
          {bugs.map((bug) => (
            <React.Fragment key={bug.id}>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {bug.id}
                </td>
                <td className="py-3 px-6 text-left">{bug.title}</td>
                <td className="py-3 px-6 text-left">{bug.severity}</td>
                <td className="py-3 px-6 text-left">{bug.priority}</td>
                <td className="py-3 px-6 text-left">{bug.category}</td>
                <td className="py-3 px-6 text-left">{bug.status}</td>
                <td className="py-3 px-6 text-left">
                  <button
                    onClick={() => toggleExpand(bug.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {expandedBug === bug.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </td>
              </tr>
              {expandedBug === bug.id && (
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td colSpan={7} className="py-4 px-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold">Descripción:</h4>
                        <p>{bug.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Asignado a:</h4>
                        <p>{bug.assignedTo}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Fecha encontrada:</h4>
                        <p>{bug.dateFound}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Fecha prevista de solución:
                        </h4>
                        <p>{bug.expectedFixDate}</p>
                      </div>
                      <div className="col-span-2">
                        <h4 className="font-semibold">
                          Pasos para reproducir:
                        </h4>
                        <p className="whitespace-pre-line">{bug.steps}</p>
                      </div>
                      {bug.attachments.length > 0 && (
                        <div className="col-span-2">
                          <h4 className="font-semibold">Archivos adjuntos:</h4>
                          <ul className="list-disc pl-5">
                            {bug.attachments.map((attachment, index) => (
                              <li key={index}>
                                <a
                                  href={attachment}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  {attachment.split("/").pop()}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BugList;
