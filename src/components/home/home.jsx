import React from "react";
import Cover from '../cover/cover'
import 'bootstrap/dist/css/bootstrap.min.css';
import Special from '../special/special';
import Carousel from '../carousel/carousel';
import cake from '../../assets/pexels3.jpg';
import food from '../../assets/pexels1.jpg';
import resort from '../../assets/pexels2.jpg';
import './home.css';

function Home() {
    return (

        <div id="specials">

            <Special />
            <Cover />
           
            <Carousel
                image1={cake}
                image2={food}
                image3={resort}
            />
        </div>
    )
}

export default Home;