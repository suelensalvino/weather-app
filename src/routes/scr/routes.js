import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import City from '../../components/City/City';

function Rout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityName" element={<City />} />
      </Routes>
    </Router>
  );
}

export default Rout;
