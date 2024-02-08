import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Navbar } from '../src/components';
import HomePage from '../src/pages/HomePage';
import JobDetailPage from '../src/pages/JobDetailPage';
import JobListPage from '../src/pages/JobListPage';
import Benefits from './pages/Benefits';
import ApplyNow from './pages/ApplyNow';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ThankYou from './pages/Thank you page';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='bg-transparent'></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/job' element={<JobListPage />} />
          <Route path='/job/:id' element={<JobDetailPage />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/apply_now' element={<ApplyNow />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/thankyou' element={<ThankYou />} />
          {/* Redirect to home page if accessing the thank you page directly */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
