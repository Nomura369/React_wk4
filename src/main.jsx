import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // 專案主要使用的CSS檔案
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
