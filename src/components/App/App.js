import React from 'react';

import { ToastPlayground } from '../ToastPlayground/ToastPlayground';
import { ToastProvider } from '../ToastProvider/ToastProvider';
import { Footer } from '../Footer/Footer';

export function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}
