import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FilesProvider } from './contexts/FilesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <FilesProvider>
            <App />
        </FilesProvider>
    </React.StrictMode>
);
