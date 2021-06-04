import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import formatToCurrency from '../helpers/currency_format';

// eslint-disable-next-line
const HouseCard = ({ name, image, price, id }) => (
  <Link to={`/houses/${id}`}>
    <div className="shadow rounded infoCarousel__wrapper-desc-info mx-auto ">
      <img src={image} className="w-100 border-card" alt="..." />
      <div className="d-flex bg-white justify-content-between align-items-center p-3">
        <div>
          <h3 className="text-center font-weight-bold test-class">{name}</h3>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star text-sm-gray" />
        </div>
        <div>
          <p className="font-weight-bold text-center">
            {formatToCurrency(price)}
          </p>
          <p className="text-sm-gray text-center">Per month</p>
        </div>
      </div>
    </div>
  </Link>
);

HouseCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
};

HouseCard.defaultProps = {
  name: '',
  image: '',
  price: 0,
  id: '',
};

export default HouseCard;
