import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext'

import App from './App';
import Home from './pages/root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          {/* Root */}
          <Route path="" element={<Home />} /> 
          {/* Add */}
          {/* <Route path="add/" element={<Add />} >
            <Route path="signup" element={<SignUp />} /> 
          </Route> */}
          {/* Manage */}
          {/* <Route path="manage/" element={<Manage />} > 
            <Route path="home" element={<MHome />} /> 
          </Route> */}
          <Route path='*' element={
            <h1 style={{textAlign:"center"}}>404</h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>
);

