import React from 'react';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <HomePage/>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

