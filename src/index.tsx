import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import './styles/main.css';
import App from './App';
import React from 'react';
import WeatherProvider from './context/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
