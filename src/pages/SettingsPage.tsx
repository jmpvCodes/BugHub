import React, { useState } from "react";
import { FaBell, FaPalette, FaLock, FaUser, FaSave } from "react-icons/fa";
const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios
    console.log("Guardando cambios:", {
      name,
      email,
      notifications,
      darkMode,
      twoFactor,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Configuración
      </h1>
      <form
        onSubmit={handleSave}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6"
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FaUser className="mr-2" /> Perfil
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FaBell className="mr-2" /> Notificaciones
          </h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="mr-2"
            />
            <label className="text-gray-700 dark:text-gray-300">
              Recibir notificaciones por email
            </label>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FaPalette className="mr-2" /> Apariencia
          </h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="mr-2"
            />
            <label className="text-gray-700 dark:text-gray-300">
              Modo oscuro
            </label>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FaLock className="mr-2" /> Seguridad
          </h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={() => setTwoFactor(!twoFactor)}
              className="mr-2"
            />
            <label className="text-gray-700 dark:text-gray-300">
              Activar autenticación de dos factores
            </label>
          </div>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center w-full sm:w-auto"
          >
            <FaSave className="mr-2" /> Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
