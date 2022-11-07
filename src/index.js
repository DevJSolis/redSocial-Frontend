import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import NoPage from './components/NoPage/NoPage';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import Perfil from './components/Perfil/Perfil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/perfil" element={<Perfil />}/>  
        <Route path="/" element={<Post />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

