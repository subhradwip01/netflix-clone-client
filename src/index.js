import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import AuthContextProvider from "./AuthContext/AuthContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </AuthContextProvider>
);

