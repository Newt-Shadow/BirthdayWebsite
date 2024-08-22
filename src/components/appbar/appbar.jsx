import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; // Replace with the correct path to your logo

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Join Us', href: '/join-us' },
  { name: 'Plan', href: '/plan' },
  { name: 'Greetings', href: '/greetings' },
  { name: 'Location', href: '/location' }
];

function ResponsiveAppBar() {
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        {pages.map((page, index) => (
          <li className="nav-item" key={index}>
            <a href={page.href} className="nav-link">
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  </div>
  );
}

export default ResponsiveAppBar;
