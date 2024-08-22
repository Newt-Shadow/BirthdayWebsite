import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/appbar/appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Celebration from './components/celebration/celebration';
import Fun from './components/plan/plan';
import Wish from './components/greetings/wish';
import Location from './components/location/location';
import Home from './components/home/home';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/plan" element={<Fun />} />
        <Route path="/greetings" element={<Wish />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      </div>
  );
}

export default App;
