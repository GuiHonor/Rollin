import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider
        clientId='893473541292-01i5kkl4gl04laet66po0bbbebpggt7d.apps.googleusercontent.com'
      >
        <App /> 
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
