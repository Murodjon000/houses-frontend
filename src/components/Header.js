import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

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
    <header
      className={`d-flex justify-content-between py-3 align-items-center ${
        small ? 'sticy__navbar' : ''
      }`}
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
      <div className="d-flex align-items-center">
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
    </header>
  );
};

export default Header;
