import Cover from './components/cover/cover'
import ResponsiveAppBar from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Celebration from './components/celebration/celebration'
import Fun from './components/plan/plan';
import Music from './components/music/music';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/preloader/preloader.jsx";
import React from 'react';


function Main() {
  return (
    <div className="App">
      <ResponsiveAppBar />
        <Cover />
        <Celebration />
        <Fun />
        <Music />
    </div>
  );
}

export default Main;
