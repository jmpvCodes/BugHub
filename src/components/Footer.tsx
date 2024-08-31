import React from "react";
import BugIcon from "./landing/BugIcon";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-[#e6f7ff] dark:bg-[#00121f] text-[#003957] dark:text-[#ccffff] py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BugIcon className="h-8 w-8 text-[#005a87] dark:text-[#ccffff] mr-2" />
              <span className="text-xl font-bold">BugHub</span>
            </div>
            <p className="text-[#005a87] dark:text-gray-400">
              Simplificando la gestión de bugs para equipos de desarrollo.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Integraciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Carreras
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Estado del sistema
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#005a87] dark:border-gray-700 text-center">
          <p className="text-[#005a87] dark:text-gray-400">
            &copy; 2024 BugHub. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
