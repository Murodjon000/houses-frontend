import React from 'react';
import { Link } from '@reach/router';

const InfoThird = () => (
  <div className="bottom__wrapper d-flex flex-column">
    <h1 className="text-center text-white my-5">Be everywhere at home</h1>
    <div className="mx-auto">
      <Link to="/signup" className="main-btn my-5">
        START FREE
      </Link>
    </div>
  </div>
);

export default InfoThird;
