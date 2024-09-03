import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, error, loading, fetchData } = useFetch<{ message: string }>(
    "http://localhost:5000/api/auth/register",
    {
      method: "POST",
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchData({ username: name, email, password });
  };

  // Puedes usar 'data', 'error', y 'loading' para mostrar diferentes estados en tu UI
  if (loading) return <p>Registrando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <p>{data.message}</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005a87] focus:border-[#005a87] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005a87] focus:border-[#005a87] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005a87] focus:border-[#005a87] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005a87] hover:bg-[#004a70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005a87]"
        >
          Registrarse
        </button>
      </div>
      <div className="text-sm text-center flex space-x-3 w-full">
        <p className="text-white">¿Ya tienes una cuenta?</p>
        <Link
          to="/login"
          className="font-medium text-[#005a87] hover:text-[#004a70] dark:text-[#ccffff] dark:hover:text-white"
        >
          Inicia sesión
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
