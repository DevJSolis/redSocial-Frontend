import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import NoPage from './components/NoPage/NoPage';
import Home from './components/Home/Home';
import Login from './Pages/Login';
import ChatFriendsList from './components/Chat/ChatFriendsList';
import Register from './Pages/Register/Register';
import Feed from './components/Feed/Feed';
import Perfil from './components/Perfil/Perfil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/perfil" element={<Perfil />}/>  
        <Route path="/" element={<Feed />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chat" element={<ChatFriendsList />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

