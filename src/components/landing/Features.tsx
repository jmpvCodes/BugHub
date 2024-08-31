// src/components/Features.tsx
import React from "react";
import {
  BugAntIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-[#005a87] dark:text-[#ccffff] mb-2">
        {title}
      </h3>
      <p className="text-[#005a87]">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <BugAntIcon className="h-8 w-8 text-[#005a87]" />,
      title: "Seguimiento centralizado de bugs",
      description:
        "Mantén todos los errores de tu proyecto en un solo lugar para una gestión y resolución sencilla.",
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-[#005a87]" />,
      title: "Espacio de trabajo colaborativo",
      description:
        "Trabaja en equipo para identificar, priorizar y resolver problemas de manera eficiente.",
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-[#005a87]" />,
      title: "Análisis detallado",
      description:
        "Obtén información sobre la salud de tu proyecto con análisis e informes completos de errores.",
    },
  ];

  return (
    <section id="features" className="bg-[#ffffffff] dark:bg-[#000f1f] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#005a87] dark:text-[#ccffff] mb-12 text-center">
          Características principales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
