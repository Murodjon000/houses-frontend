import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { Spinner } from 'react-bootstrap';
import { addHouseDetails, getHousesDetailsErrors } from '../actions';
import { addFavourites, apiGetCalls } from '../helpers/api_calls';
import formatToCurrency from '../helpers/currency_format';
import Header from './DashboardHeader';

// eslint-disable-next-line
const HouseDetail = ({ id, house = [], getHouse, getHouseError, errors }) => {
  useEffect(() => {
    apiGetCalls(getHouse, id, getHouseError);
  }, []);

  if (house.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner__wrapper">
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (errors) {
    return <h1>House not found</h1>;
  }

  if (!localStorage.getItem('token')) {
    navigate('/');
  }

  const handleSubmit = () => {
    const messWrapper = document.getElementById('success-wrapper');
    addFavourites('favourite', id)
      .then((response) => {
        if (response.status === 200) {
          const message = document.createElement('div');
          message.innerText = 'House successfuly added to favourites';
          message.classList.add('alert__wrapper');
          messWrapper.appendChild(message);
          setTimeout(() => {
            message.parentElement.remove();
          }, 5000);
        }
      })
      .catch((error) => error);
  };

  return (
    <div>
      <Header />
      <div id="success-wrapper" />
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
  getHouseError: PropTypes.func.isRequired,
  house: PropTypes.object, // eslint-disable-line
  errors: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = (state) => ({
  house: state.houses.house,
  errors: state.houses.houseError,
});

const mapDispatchToProps = (dispatch) => ({
  getHouse: (house) => dispatch(addHouseDetails(house)),
  getHouseError: (error) => dispatch(getHousesDetailsErrors(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetail);
