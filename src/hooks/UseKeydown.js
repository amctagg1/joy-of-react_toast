import React from 'react';

export function useKeydown(key, callback) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}