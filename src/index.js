import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext'

import App from './App';
import Home from './pages/root';
import { PageNotFound } from './pages/root/notFound';
import { Register } from './pages/root/account/register';
import { Login } from './pages/root/account/login';

import Admin from './pages/dashboard/admin';
import AdminHome from './pages/dashboard/admin/home';
import AdminPrograms from './pages/dashboard/admin/programs';
import AdminSds from './pages/dashboard/admin/sds';
import AdminSessions from './pages/dashboard/admin/sessions';
import AdminTrainers from './pages/dashboard/admin/trainers';

import Trainer from './pages/dashboard/trainer';
import TrainerHome from './pages/dashboard/trainer/home';
import TrainerSessions from './pages/dashboard/trainer/sessions';
import TrainerSession from './pages/dashboard/trainer/session';
import TrainerAssignment from './pages/dashboard/trainer/assignment';
import TrainerFeedback from './pages/dashboard/trainer/feedback';
import TrainerVideos from './pages/dashboard/trainer/videos';
import TrainerUpdates from './pages/dashboard/trainer/updates';
import TrainerReports from './pages/dashboard/trainer/reports';
import TrainerSdList from './pages/dashboard/trainer/sdlist';

import Sd from './pages/dashboard/sd';
import SdHome from './pages/dashboard/sd/home';
import SdSessions from './pages/dashboard/sd/sessions';
import SdSession from './pages/dashboard/sd/session';
import SdAssignment from './pages/dashboard/sd/assignment';

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

          <Route path="trainer/" element={<Trainer />} >
            <Route path="home" element={<TrainerHome />} />
            <Route path="sessions" element={<TrainerSessions />} />
            <Route path="session" element={<TrainerSession />} />
            <Route path="assignment" element={<TrainerAssignment />} />
            <Route path="feedback" element={<TrainerFeedback />} />
            <Route path="videos" element={<TrainerVideos />} />
            <Route path="updates" element={<TrainerUpdates />} />
            <Route path="reports" element={<TrainerReports />} />
            <Route path="sdlist" element={<TrainerSdList />} />
          </Route>
          
          <Route path="sd/" element={<Sd />} >
            <Route path="home" element={<SdHome />} />
            <Route path="sessions" element={<SdSessions />} />
            <Route path="session" element={<SdSession />} />
            <Route path="assignment" element={<SdAssignment />} />
          </Route>

          <Route path='*' element={<PageNotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>
);

