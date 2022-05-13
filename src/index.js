import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { ThemeProvider } from '@mui/system';
import mainTheme from './style/material-themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
