import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = [
  {
    id: 'variant-notice',
    name: 'variant',
    value: 'notice',
    text: 'Notice',
  },
  {
    id: 'variant-warning',
    name: 'variant',
    value: 'warning',
    text: 'Warning',
  },
  {
    id: 'variant-success',
    name: 'variant',
    value: 'success',
    text: 'Success',
  },
  {
    id: 'variant-error',
    name: 'variant',
    value: 'error',
    text: 'Error',
  },
];

function ToastPlayground() {
  const [messageInputValue, setMessageInputValue] = React.useState('');
  const [variantValue, setVariantValue] = React.useState('notice');

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={messageInputValue} onChange={setMessageInputValue}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant.id} htmlFor={variant.id}>
                <input
                  id={variant.id}
                  type="radio"
                  name={variant.name}
                  value={variant.value}
                  checked={variant.value === variantValue}
                  onChange={() => setVariantValue(variant.value)}
                />
                {variant.text}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
