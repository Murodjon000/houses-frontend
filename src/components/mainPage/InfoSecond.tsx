import React from 'react';
import { Link } from '@reach/router';
import houses from '../../assets/houses.png';

const Info = () => (
  <div className=" info__wrapper pt-5 px-4 bg-blue-prime">
    <div className="row align-items-center">
      <div className=" col-md-6 info__wrapper-image">
        <img src={houses} alt="Houes" />
      </div>
      <div className="col-md-6 info__wrapper-info ">
        <h1 className="text-lg-black">Only best places for your rest</h1>
        <p className="text-sm-gray mb-5 mt-3">
          More than ten thousand houses at your disposal.Only the best and
          checked landlords.We will find best place for you and the conditions
          for a safe transaction and comfortable stay.
        </p>
        <Link to="/signup" className="main-btn mt-4">
          START FREE
        </Link>
      </div>
    </div>
  </div>
);

export default Info;
