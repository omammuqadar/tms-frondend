import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext'

import App from './App';
import Home from './pages/root';
import { Register } from './pages/root/account/register';
import { Login } from './pages/root/account/login';

import Admin from './pages/dashboard/admin';
import AdminHome from './pages/dashboard/admin/home';
import AdminPrograms from './pages/dashboard/admin/programs';
import AdminSds from './pages/dashboard/admin/sds';
import AdminSessions from './pages/dashboard/admin/sessions';
import AdminTrainers from './pages/dashboard/admin/trainers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          {/* Root */}
          <Route path="" element={<Home />} /> 
          {/* Add */}
          
          <Route path="/account/register" element={<Register />} /> 
          <Route path="/account/login" element={<Login />} /> 

          <Route path="admin/" element={<Admin />} >
            <Route path="home" element={<AdminHome />} />
            <Route path="programs" element={<AdminPrograms />} />
            <Route path="sds" element={<AdminSds />} />
            <Route path="sessions" element={<AdminSessions />} />
            <Route path="trainers" element={<AdminTrainers />} /> 
          </Route>

          <Route path='*' element={
            <h1 style={{textAlign:"center"}}>404</h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>
);

