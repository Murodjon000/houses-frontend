import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addHouseDetails } from '../actions';
import { addFavourites, apiGetCalls } from '../helpers/api_calls';
import formatToCurrency from '../helpers/currency_format';

const HouseDetail = ({ id, house = [], getHouse }) => {
  useEffect(() => {
    apiGetCalls(getHouse, id);
  }, []);

  if (house.length === 0) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = () => {
    addFavourites('favourite', id);
  };

  return (
    <div>
      <div className="shadow rounded my-3 d-flex flex-column infoCarousel__wrapper-desc-info mx-auto ">
        <div className="position-relative">
          <img
            src={house.attributes.image}
            className="w-100 border-card"
            alt="..."
          />
          <div className=" d-flex w-100 justify-content-between align-items-center p-3 position-absolute details-card ">
            <div>
              <h3 className="text-center text-white font-weight-bold">
                {house.attributes.name}
              </h3>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star text-sm-gray" />
            </div>
            <div>
              <p className="font-weight-bold text-white text-center">
                {formatToCurrency(house.attributes.price)}
              </p>
              <p className="text-sm-gray text-white-50">per month</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column w-100 align-items-center p-3">
          <h3 className="font-weight-bold">About the listing</h3>
          <p>{house.attributes.description}</p>
          <i className="bi bi-calendar" />
        </div>

        <button className="details-btn" type="button" onClick={handleSubmit}>
          Add to favourites
        </button>
      </div>
    </div>
  );
};

HouseDetail.propTypes = {
  id: PropTypes.string, // eslint-disable-line
  getHouse: PropTypes.func.isRequired,
  house: PropTypes.any, // eslint-disable-line
};

const mapStateToProps = (state) => ({
  house: state.houses.house,
});

const mapDispatchToProps = (dispatch) => ({
  getHouse: (house) => dispatch(addHouseDetails(house)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetail);
