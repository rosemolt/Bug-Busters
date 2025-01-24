import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />  {/* This will ensure Navbar appears on all pages */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
