import ForgotPasswordForm from "../components/login/ForgotPasswordForm";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="bg-[#e0f7fa] dark:bg-[#003957] py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#005a87] dark:text-[#ccffff] mb-6">
          Recuperar Contraseña
        </h2>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
