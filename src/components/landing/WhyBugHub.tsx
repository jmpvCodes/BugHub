import React from "react";
import {
  LightBulbIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const ReasonItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center mb-8">
    <div className="bg-[#005a87] dark:bg-[#ccffff] p-3 rounded-full mb-4">
      {React.cloneElement(icon as React.ReactElement, {
        className: "h-8 w-8 text-[#ccffff] dark:text-[#005a87]",
      })}
    </div>
    <h3 className="text-xl font-semibold text-[#003957] dark:text-[#ccffff] mb-2">
      {title}
    </h3>
    <p className="text-[#005a87] dark:text-gray-300">{description}</p>
  </div>
);
const WhyBugHub: React.FC = () => {
  const reasons = [
    {
      icon: <LightBulbIcon className="h-8 w-8 text-[#005a87]" />,
      title: "Intuitivo",
      description:
        "Interfaz fácil de usar que simplifica el seguimiento de bugs.",
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-[#005a87]" />,
      title: "Eficiente",
      description:
        "Optimiza el proceso de resolución de errores y mejora la productividad.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-[#005a87]" />,
      title: "Seguro",
      description:
        "Protege la información de tus proyectos con medidas de seguridad avanzadas.",
    },
  ];

  return (
    <section id="why-bughub" className="bg-[#e6f7ff] dark:bg-[#003957] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003957] dark:text-[#ccffff] mb-12 text-center">
          ¿Por qué elegir BugHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonItem key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBugHub;
