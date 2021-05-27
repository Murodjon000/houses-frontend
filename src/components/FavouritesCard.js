import React from 'react';
import PropTypes from 'prop-types';
import formatToCurrency from '../helpers/currency_format';

// eslint-disable-next-line
const FavouritesCard = ({ name, image, price, location, handleRemove }) => (
  <div className="col-md-4 my-2">
    <div className="shadow rounded favourites__card mx-auto ">
      <div className="position-relative">
        <img src={image} className="w-100 border-card" alt="..." />
        <button
          onClick={handleRemove}
          type="button"
          className="position-absolute favourites__card-btn  details-btn"
        >
          Remove
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div>
          <h3 className="text-center font-weight-bold test-name">{name}</h3>
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
  </div>
);

FavouritesCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  location: PropTypes.string,
  handleRemove: PropTypes.func, // eslint-disable-line
};

FavouritesCard.defaultProps = {
  name: '',
  price: 0,
  image: '',
  location: '',
};

export default FavouritesCard;
