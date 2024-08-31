import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login");
  };

  return (
    <section
      id="home"
      className="bg-[#e0f7fa] dark:bg-[#005a87] relative pt-32 pb-32"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#005a87] dark:bg-[#ccffff]"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#005a87] dark:text-[#ccffff] mb-6">
              Gestiona tus bugs con facilidad
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#0077b6] dark:text-[#ccffff] mb-8">
              BugHub: La plataforma definitiva para el seguimiento y resolución
              de errores
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleGetStartedClick}
                className="bg-[#00a86b] hover:bg-[#008f5b] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Comenzar gratis
              </button>
              <button className="bg-[#005a87] hover:bg-[#004a70] text-white dark:bg-[#ccffff] dark:text-[#005a87] dark:hover:bg-[#a3ffff] font-bold py-3 px-6 rounded-lg transition duration-300">
                Ver demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              {/* Aquí puedes colocar tu video o gif */}
              <img
                src="/path-to-your-gif-or-video-placeholder.gif"
                alt="BugHub Demo"
                className="w-full h-full object-cover"
              />
              {/* Si prefieres un video, puedes usar la etiqueta video así:
              <video 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
              </video>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
