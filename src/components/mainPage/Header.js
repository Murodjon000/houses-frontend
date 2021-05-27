import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'scroll',
        () => setSmall(window.pageYOffset > 100) // eslint-disable-line
      );
    }
  }, []);

  return (
    <Navbar
      className={`d-flex justify-content-between py-3 align-items-center ${
        small ? 'sticy__navbar' : ''
      }`}
      expand="sm"
    >
      <div>
        <Link
          to="/"
          className={`text-font-md text-decoration-none text-white font-weight-bolder ${
            small ? 'text-primary' : ''
          } `}
        >
          HouseNet
        </Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar__right">
        <div className="">
          <Link
            to="/login"
            className={`px-4  text-white text-decoration-none font-weight-bolder text-uppercase ${
              small ? 'text-primary' : ''
            }`}
          >
            Sign in
          </Link>
          <Link to="/signup" className="header-btn  text-uppercase">
            Sign up
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
