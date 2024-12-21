import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/globals.css';


// if (process.env.NODE_ENV === 'development') {              
//   const originalWarn = console.warn;
//   console.warn = (...args) => {
//     if (/React Router Future Flag Warning/.test(args[0])) {
//       return;
//     }
//     originalWarn(...args); 
//   };
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
