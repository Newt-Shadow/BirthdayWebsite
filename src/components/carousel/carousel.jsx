import React from "react";
import './carousel.css';

function Carousel(props) {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide car" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.image1} className="d-block w-100" alt="Slide 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Best Memories</h5>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={props.image2} className="d-block w-100" alt="Slide 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color:'#000'}}>Best Memories</h5>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={props.image3} className="d-block w-100" alt="Slide 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Best Memories</h5>
                        
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
