import RegisterForm from "../components/login/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-[#e0f7fa] dark:bg-[#003957] py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#005a87] dark:text-[#ccffff] mb-6">
          Crear una cuenta
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
