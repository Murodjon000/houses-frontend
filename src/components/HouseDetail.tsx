import React, { Dispatch, ErrorInfo, useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faMapMarkerAlt,
  faCalendarAlt,
  faBed,
} from '@fortawesome/free-solid-svg-icons';
import { addHouseDetails, getHousesDetailsErrors } from '../actions';
import { addFavourites, apiGetCalls } from '../helpers/api_calls';
import formatToCurrency from '../helpers/currency_format';
import Header from './DashboardHeader';
import Flash from './Flash';

const HouseDetail: React.FunctionComponent<any> = ({
  id,
  house = [],
  getHouse,
  getHouseError,
  errors,
}) => {
  useEffect(() => {
    void apiGetCalls(getHouse, id, getHouseError);
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
    void navigate('/');
  }

  const handleSubmit = () => {
    addFavourites('favourite', id)
      .then((response) => {
        if (response.status === 200) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          window.flash('House successfuly added to favourites!');
        }
        return response;
      })
      .catch((error: ErrorInfo) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        window.flash('House was added to favourites!', 'danger');
        return error;
      });
  };

  return (
    <div>
      <Header />
      <div className="min-vh-100 bg-main p-3">
        <Flash />
        <div className="shadow no-gutters rounded bg-white mb-3 row infoCarousel__wrapper-desc-info-detail mx-auto">
          <div className="col-md-6">
            <img
              src={house.attributes.images}
              className="w-100 h-100 border-card"
              alt="..."
            />
          </div>
          <div className="col-md-6 p-3">
            <div className="">
              <h3 className="font-weight-bold mb-2">
                About the listing
              </h3>
              <p>{house.attributes.description}</p>
            </div>

            <div className="my-2">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <div>
                    <FontAwesomeIcon
                      className="details-icon"
                      icon={faMapMarkerAlt}
                    />
                  </div>
                  <div className="px-3">
                    <p>Location</p>
                    <p>{house.attributes.location}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <FontAwesomeIcon
                      className="details-icon"
                      icon={faCalendarAlt}
                    />
                  </div>
                  <div className="px-2">
                    <p>Built date</p>
                    <p>{house.attributes.date}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <FontAwesomeIcon
                      className="details-icon"
                      icon={faBed}
                    />
                  </div>
                  <div className="px-2">
                    <p>Beds</p>
                    <p>{house.attributes.rooms}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <FontAwesomeIcon
                      className="details-icon"
                      icon={faMoneyBill}
                    />
                  </div>
                  <div className="px-2">
                    <p>Rent</p>
                    <p>{formatToCurrency(house.attributes.price)}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="details-btn"
              type="button"
              onClick={handleSubmit}
            >
              Add to favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type stateType = {
  houses: {
    house: string[];
    houseError: string[];
  };
};

const mapStateToProps = (state: stateType) => ({
  house: state.houses.house,
  errors: state.houses.houseError,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getHouse: (house: any) => dispatch(addHouseDetails(house)),
  getHouseError: (error: any) =>
    dispatch(getHousesDetailsErrors(error)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HouseDetail);
