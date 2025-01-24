import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Awareness from './components/Awareness';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />  {/* This will ensure Navbar appears on all pages */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/awareness" element={<Awareness/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
