import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.css';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Join Us', href: '/join-us' },
  { name: 'Music', href: '/music' },
  { name: 'Greetings', href: '/greetings' },
  { name: 'Location', href: '/location' }
];

function AppBar() {
  
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasElement); 
      bsOffcanvas.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage:'url("https://www.transparenttextures.com/patterns/cubes.png")'}}>
      <div className="container-fluid">
        <div className="navbar-brand typograph brand-black" >
        
          Happy Birthday
        </div>
        <button
          className="navbar-toggler shadow-none border-0 burger-black"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          id="OpenMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end sidebar offcanvas-custom bg-transparent"
          data-bs-scroll="true"
          data-bs-backdrop="true"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title typograph typo" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {pages.map((page, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    to={page.href}
                    className="nav-link mx-2 typograph typo custom-link"
                    onClick={closeOffcanvas}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
