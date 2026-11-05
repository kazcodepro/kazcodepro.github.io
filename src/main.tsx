import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';

// HashRouter keeps routing working on GitHub Pages (no server-side rewrites needed).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
