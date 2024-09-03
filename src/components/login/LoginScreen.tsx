import React, { useState } from "react";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { data, error, loading, fetchData } = useFetch<{ token: string }>(
    "http://localhost:5000/api/auth/login",
    {
      method: "POST",
    }
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchData({ email, password });

    if (data) {
      console.log(data);
      // Guardar el token en el almacenamiento local
      localStorage.setItem("token", data.token);
      // Navegar a la página de resumen
      navigate("/summary");
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log("Login with:", provider);
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-[#e0f7fa] dark:bg-[#003957] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Inicia sesión en BugHub
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#005a87] focus:border-[#005a87] focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#005a87] focus:border-[#005a87] focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#005a87] focus:ring-[#005a87] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                Recuérdame
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#1badf6] hover:text-[#a5cfe5]"
                onClick={handleForgotPasswordClick}
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#005a87] hover:bg-[#003957] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005a87]"
            >
              Iniciar sesión
            </button>
          </div>
          {loading && <p className="text-white">Verificando...</p>}
          {error && <p className="text-red-500">{error.message}</p>}
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                O continúa con
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <button
                onClick={() => handleSocialLogin("github")}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">Sign in with GitHub</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => handleSocialLogin("google")}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FaGoogle className="w-5 h-5" />
                <span className="sr-only">Sign in with Google</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => handleSocialLogin("facebook")}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Sign in with Facebook</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => handleSocialLogin("twitter")}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Sign in with Twitter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ¿No tienes una cuenta?{" "}
            <a
              href="#"
              className="font-medium text-[#1badf6] hover:text-[#a5cfe5]"
              onClick={handleRegisterClick}
            >
              Regístrate ahora
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
