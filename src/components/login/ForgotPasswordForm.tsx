import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recuperar contraseña para:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005a87] hover:bg-[#004a70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005a87]"
        >
          Enviar correo de recuperación
        </button>
      </div>
      <div className="text-sm text-center">
        <Link
          to="/login"
          className="font-medium text-[#005a87] hover:text-[#004a70] dark:text-[#ccffff] dark:hover:text-white"
        >
          Volver al inicio de sesión
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
