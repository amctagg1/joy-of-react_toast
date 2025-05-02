import React from 'react';

export const ToastContext = React.createContext();

export function ToastProvider({ children }) {
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

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dismissAllToasts();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismissAllToasts]);

  const value = React.useMemo(() => ({
    toasts,
    addNewToast,
    dismissToastById,
    dismissAllToasts,
  }), [
    toasts,
    addNewToast,
    dismissToastById,
    dismissAllToasts,
  ]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}
