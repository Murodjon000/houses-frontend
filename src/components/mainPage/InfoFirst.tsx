import React from 'react';
import { Link } from '@reach/router';

const Info: React.FunctionComponent<any> = ({ image }) => (
  <div className=" info__wrapper pt-5">
    <h2 className="text-sm-gray text-center my-2">
      Simple and fast way to rent
    </h2>
    <h1 className="text-lg-black text-center mb-3">
      Comfortable home from reliable people
    </h1>
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className=" info__wrapper-info ">
          <h1 className="text-lg-black">
            Only best places for your rest
          </h1>
          <p className="text-sm-gray mb-5 mt-3">
            More than ten thousand houses at your disposal.Only the
            best and checked landlords.We will find best place for you
            and the conditions for a safe transaction and comfortable
            stay.
          </p>
          <Link to="/signup" className="main-btn mt-4">
            LEARN MORE
          </Link>
        </div>
      </div>
      <div className=" col-md-6 info__wrapper-image">
        <img
          src={image}
          alt="Houes"
          className="info__wrapper-image-first"
        />
      </div>
    </div>
  </div>
);

export default Info;
