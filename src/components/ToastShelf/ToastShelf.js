import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts = [], dismissToastById }) {
  console.log('toasts', toasts);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} text={toast.text} dismiss={() => dismissToastById(toast.id)} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
