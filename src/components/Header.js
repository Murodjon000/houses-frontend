import React from 'react';
import { Link } from '@reach/router';

const Header = () => (
  <div className="d-flex justify-content-between py-3 align-items-center">
    <div>
      <h1 className="fs-2 text-white fw-bolder">HouseNet</h1>
    </div>
    <div className="d-flex align-items-center">
      <h4 className="px-4  text-white fw-bolder text-uppercase">Sign in</h4>
      <Link to="/signup" className="header-btn  text-uppercase">
        Sign up
      </Link>
    </div>
  </div>
);

export default Header;
