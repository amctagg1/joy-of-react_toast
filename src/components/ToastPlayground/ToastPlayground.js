import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

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
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [currentToastVariant, setCurrentToastVariant] = React.useState(DEFAULT_VARIANT);
  const [currentToastText, setCurrentToastText] = React.useState('');

  const handlePopToast = React.useCallback(() => {
    setIsToastVisible(true);
    setCurrentToastVariant(variantInputValue);
    setCurrentToastText(messageInputValue);
    setMessageInputValue('');
    setVariantInputValue(DEFAULT_VARIANT);
  }, [variantInputValue, messageInputValue]);

  const handleDismiss = React.useCallback(() => {
    setIsToastVisible(false);
    setCurrentToastText('');
    setCurrentToastVariant(DEFAULT_VARIANT);
  }
  , []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && (
        <Toast variant={currentToastVariant} text={currentToastText} dismiss={handleDismiss}/>
      )}

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
            <Button onClick={handlePopToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
