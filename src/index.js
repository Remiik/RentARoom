import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
/* Import de React, ReactDOM, la feuille de style, le contenu de l'app, et le BrowserRouter pour que les routes fonctionnent */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
