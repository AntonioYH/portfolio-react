import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalStatesContextProvider } from './contexts/GlobalStatesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStatesContextProvider>
      <App />
    </GlobalStatesContextProvider>
  </React.StrictMode>,
);
