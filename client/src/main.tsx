import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@styles/globals.css';

// Error reporting (optional)
if (import.meta.env.VITE_SENTRY_DSN) {
  import('@sentry/browser').then(({ init }) => {
    init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.VITE_APP_ENV || 'development',
      integrations: [
        // Add browser integrations here
      ],
      tracesSampleRate: import.meta.env.VITE_APP_ENV === 'production' ? 0.1 : 1.0,
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);