import React from 'react';
import { Link } from '@reach/router';
import Header from './Header';
import InfoFirst from './InfoFirst';
import InfoSecond from './InfoSecond';
import InfoThird from './InfoThird';
import InfoCarousel from './InfoCarousel';
import Footer from './Footer';

const Main = () => (
  <div>
    <div className="d-flex main__wrapper flex-column ">
      <Header />
      <div className="main__wrapper-box">
        <h1 className="fs-1 text-white fw-bold">Find housing</h1>
        <h1 className="fs-1 text-white fw-bold">anywhere</h1>

        <p className="text-sm mt-3">
          The best offers for you at any point of your journey.Wher-
        </p>
        <p className="text-sm mb-3">
          ever you are, feel yourself like at your own home.
        </p>
        <div>
          <Link to="/signup" className="main-btn mt-2">
            START FREE
          </Link>
          <button className="text-sm mt-2 bg-transparent mx-4" type="button">
            Watch Introduction video
          </button>
        </div>
      </div>
    </div>
    <InfoFirst />
    <InfoSecond />
    <InfoCarousel />
    <InfoThird />
    <Footer />
  </div>
);

export default Main;
