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
        <VisuallyHidden>
          {TOAST_VARIANTS[variant].displayText}
        </VisuallyHidden>
      </div>
      <p className={styles.content}>
        {text}
      </p>
      <button 
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton} 
        onClick={dismiss}
      >
        <X size={24} />
      </button>
    </div>
  );
}
