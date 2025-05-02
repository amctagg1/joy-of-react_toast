import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts, dismissToastById} = React.useContext(ToastContext);

  return (
    <>
      {toasts.length > 0 && (
        <ol className={styles.wrapper}>
          {toasts.map((toast) => (
            <li key={toast.id} className={styles.toastWrapper}>
              <Toast variant={toast.variant} text={toast.text} dismiss={() => dismissToastById(toast.id)} />
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default ToastShelf;
