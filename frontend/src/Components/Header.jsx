

import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the navigation menu when a link is clicked (for mobile/tablet)
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar bg-light">
          <a className="navbar-brand" style={{fontSize:"23px",fontWeight:700}}>Task 2</a>

          <button
            className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={closeNav} style={{fontSize:"18px",fontWeight:500}}>
                  Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login" onClick={closeNav} style={{fontSize:"18px",fontWeight:500}}>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/get-post" onClick={closeNav} style={{fontSize:"18px",fontWeight:500}}>
                  Post
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
