import React, { useState } from "react";
import { FaUser, FaEnvelope, FaSave, FaSignOutAlt } from "react-icons/fa";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios del perfil
    console.log("Guardando cambios del perfil:", {
      name,
      email,
      password,
      bio,
    });
  };

  const handleLogout = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem("token");
    // Redirigir al usuario a la página de inicio o login
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        language={language}
        isLoggedIn={true}
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Perfil de Usuario
      </h1>
      <form
        onSubmit={handleSave}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6"
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FaUser className="mr-2" /> Información Personal
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
            <FaEnvelope className="mr-2" /> Biografía
          </h2>
          <textarea
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
            rows={4}
            placeholder="Cuéntanos sobre ti..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="pt-4 flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center w-full sm:w-auto"
          >
            <FaSave className="mr-2" /> Guardar Cambios
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center w-full sm:w-auto"
          >
            <FaSignOutAlt className="mr-2" /> Cerrar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
