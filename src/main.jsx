import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';

import './index.css'
import './statblock.css'

import BuilderStore, { CLASSES } from "./data/builder";
import App from './App.jsx'

document.documentElement.style.setProperty('--color-class', CLASSES[0].instance.color);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
