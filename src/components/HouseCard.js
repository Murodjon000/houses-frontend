import React from 'react';
import PropTypes from 'prop-types';

const HouseCard = ({ name, image, price }) => {
  const formatToCurrency = (amount) =>
    '$' + ' ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // eslint-disable-line

  return (
    <div className="shadow rounded infoCarousel__wrapper-desc-info mx-auto ">
      <img src={image} className="w-100 border-card" alt="..." />
      <div className="d-flex justify-content-between align-items-center p-3">
        <div>
          <h3 className="text-center font-weight-bold">{name}</h3>
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
  );
};

HouseCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

HouseCard.defaultProps = {
  name: '',
  image: '',
  price: 0,
};

export default HouseCard;
