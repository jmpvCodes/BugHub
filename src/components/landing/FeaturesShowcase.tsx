import React from "react";

const FeaturesShowcase: React.FC = () => {
  return (
    <section id="showcase" className="bg-[#f0f9ff] dark:bg-[#001f3f] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003957] dark:text-[#ccffff] mb-12 text-center">
          Potencia tu gestión de bugs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#e0f7fa] dark:bg-[#002b56] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#003957] dark:text-[#ccffff] mb-4">
              Resolución de bugs más rápida
            </h3>
            <div className="h-64 bg-[#e0f7fa] dark:bg-[#004080] rounded-lg flex items-center justify-center">
              <p className="text-[#003957] dark:text-[#ccffff] text-xl">
                Gráfico de tiempo de resolución
              </p>
            </div>
            <p className="mt-4 text-[#005a87] dark:text-gray-300">
              Reduce el tiempo de resolución de bugs en un 40%
            </p>
          </div>
          <div className="bg-[#e0f7fa] dark:bg-[#002b56] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#003957] dark:text-[#ccffff] mb-4">
              Mejora la colaboración
            </h3>
            <div className="h-64 bg-[#e0f7fa] dark:bg-[#004080] rounded-lg flex items-center justify-center">
              <p className="text-[#003957] dark:text-[#ccffff] text-xl">
                Estadísticas de colaboración
              </p>
            </div>
            <p className="mt-4 text-[#005a87] dark:text-gray-300">
              Aumenta la eficiencia del equipo en un 25%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
