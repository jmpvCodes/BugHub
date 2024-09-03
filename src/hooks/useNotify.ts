import { toast, ToastOptions } from 'react-toastify';

// Opciones por defecto para las notificaciones
const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const useNotify = () => {
  const success = (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  };

  const error = (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  };

  const info = (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
  };

  const warn = (message: string, options?: ToastOptions) => {
    toast.warn(message, { ...defaultOptions, ...options });
  };

  return { success, error, info, warn };
};

export default useNotify;