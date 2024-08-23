import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/appbar/appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fun from './components/plan/plan';
import Wish from './components/greetings/wish';
import Location from './components/location/location';
import Home from './components/home/home';
import Join from './components/join us/joinUs';
import Music from './components/music/music';

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<Join />} />
        <Route path="/music" element={<Music />} />
        <Route path="/greetings" element={<Wish />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      </div>
  );
}

export default App;
