import React from 'react';

import { useEscapeKey } from '../../hooks/UseEscapeKey';

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

  useEscapeKey(() => {
    dismissAllToasts();
  });

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
