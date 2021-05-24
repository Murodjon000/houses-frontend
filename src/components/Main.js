import React from 'react';
import { Link, navigate } from '@reach/router';
import Header from './mainPage/Header';
import InfoFirst from './mainPage/InfoFirst';
import InfoSecond from './mainPage/InfoSecond';
import InfoThird from './mainPage/InfoThird';
import InfoCarousel from './mainPage/InfoCarousel';
import Footer from './mainPage/Footer';

const Main = () => {
  if (localStorage.getItem('token')) {
    navigate('/dashboard');
  }
  return (
    <div>
      <div className="d-flex main__wrapper flex-column ">
        <Header />
        <div className="main__wrapper-box">
          <h1 className="text-font-lg text-white font-weight-bold">
            Find housing
          </h1>
          <h1 className="text-font-lg text-white font-weight-bold">anywhere</h1>

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
};

export default Main;
