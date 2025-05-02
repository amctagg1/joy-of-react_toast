import React from 'react';

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addNewToast = React.useCallback((toast) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: crypto.randomUUID(),
        variant: toast.variant,
        text: toast.text,
      }
    ]);
  }, [setToasts]);

  const dismissToastById = React.useCallback((id) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== id);
    }
  )}
  , []);

  const value = React.useMemo(() => ({
    toasts,
    addNewToast,
    dismissToastById,
  }), [
    toasts,
    addNewToast,
    dismissToastById,
  ]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
