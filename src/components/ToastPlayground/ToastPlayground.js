import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_INPUTS = [
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

const DEFAULT_VARIANT = 'notice';

function ToastPlayground() {
  const [messageInputValue, setMessageInputValue] = React.useState('');
  const [variantInputValue, setVariantInputValue] = React.useState(DEFAULT_VARIANT);
  const [toasts, setToasts] = React.useState([]);

  const resetFormInputs = React.useCallback(() => {
    setMessageInputValue('');
    setVariantInputValue(DEFAULT_VARIANT);
  }, []);

  const handlePopToast = React.useCallback((event) => {
    event.preventDefault();
    
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: crypto.randomUUID(),
        variant: variantInputValue,
        text: messageInputValue,
      }
    ]);

    resetFormInputs();
  }, [variantInputValue, messageInputValue, resetFormInputs]);

  const handleDismissToastById = React.useCallback((id) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== id);
    }
  )}
  , []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && (
        <ToastShelf toasts={toasts} dismissToastById={handleDismissToastById} />
      )}

      <form className={styles.controlsWrapper} onSubmit={(e) => handlePopToast(e)}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput}  
              value={messageInputValue}
              onChange={event => {
                setMessageInputValue(
                  event.target.value
                );
              }}
          />
          </div>
        </div>

        <fieldset className={styles.row}>
          <legend className={styles.label}>Variant</legend>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_INPUTS.map((variant) => (
              <label key={variant.id} htmlFor={variant.id}>
                <input
                  id={variant.id}
                  type="radio"
                  name={variant.name}
                  value={variant.value}
                  checked={variant.value === variantInputValue}
                  onChange={() => setVariantInputValue(variant.value)}
                />
                {variant.text}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
