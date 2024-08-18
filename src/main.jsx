import Cover from './components/cover/cover'
import ResponsiveAppBar from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Celebration from './components/celebration/celebration'
import Fun from './components/plan/plan';
import Music from './components/music/music';
import React from 'react';
import Special from './components/special/special';
import Wish from './components/greetings/wish';
import Location from './components/location/location';


function Main() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Special />
        <Cover />
        <Celebration />
        <Fun />
        <Music />
        <Wish />
        <Location />
    </div>
  );
}

export default Main;
