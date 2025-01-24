import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para versões modernas
import './styles/index.css';
import App from './App';

const rootElement = document.getElementById('root'); // Certifique-se de que o ID corresponde ao do arquivo public/index.html
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Use createRoot
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
