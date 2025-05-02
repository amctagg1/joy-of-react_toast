import React from 'react';
import { X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import { TOAST_VARIANTS } from './ToastVariants';
import styles from './Toast.module.css';

export function Toast({ variant = 'notice', text = '', dismiss }) {
  const Icon = TOAST_VARIANTS[variant].icon;

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {text}
      </p>
      <button className={styles.closeButton} onClick={dismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}
