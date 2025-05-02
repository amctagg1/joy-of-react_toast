import React from 'react';

import styles from './Button.module.css';

export function Button({ className = '', ...delegated }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}
