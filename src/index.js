import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import global CSS
import './styles/global.css';

// Get root element
const container = document.getElementById('root');

// Create root
const root = createRoot(container);

// Render app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Service Worker untuk PWA (optional)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
            (registration) => {
                console.log('ServiceWorker registration successful');
            },
            (err) => {
                console.log('ServiceWorker registration failed: ', err);
            }
        );
    });
}