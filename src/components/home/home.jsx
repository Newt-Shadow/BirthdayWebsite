import React from "react";
import Cover from '../cover/cover'
import 'bootstrap/dist/css/bootstrap.min.css';
import Celebration from '../celebration/celebration'
import Fun from '../plan/plan';
import Music from '../music/music';
import Special from '../special/special';
import Location from '../location/location';
import Carousel from '../carousel/carousel';
import cake from '../../assets/cake.jpg';
import food from '../../assets/food.jpg';
import resort from '../../assets/resort.jpg';


function Home() {
    return (

        <div id="specials">

            <Special />
            <Cover />
            <Celebration />
            <Fun />
            <Music />
            <Location />
            <Carousel
                image1={cake}
                image2={food}
                image3={resort}
            />
        </div>
    )
}

export default Home;