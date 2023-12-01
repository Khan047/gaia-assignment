import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; // Updated import

import RegistrationPage from './pages/RegistrationPages';
import LoginPage from './pages/LoginPages';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/register" />} /> {/* Define a default route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
