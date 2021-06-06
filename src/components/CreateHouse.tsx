import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { apiGetHouse } from '../helpers/upload_calls';
import { createNewHouse, getNewHouseError } from '../actions';
import Header from './DashboardHeader';
import Flash from './Flash';

// eslint-disable-next-line
const CreateHouse = ({ getHouses, getHousesError, errors }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [numberRooms, setNumberRooms] = useState('');
  const [builtDate, setBuiltDate] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file !== '') {
      const house = {
        name,
        location,
        rooms: numberRooms,
        date: builtDate,
        price,
        description,
        image: file,
      };
      apiGetHouse(house, getHouses, getHousesError);
    } else {
      window.flash(
        'Image should be selected!',
        'warning' // eslint-disable-line
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="house__creator__wrapper">
        <form onSubmit={handleSubmit} className="house__creator__wrapper-form">
          <h1 className="text-font-md mb-3 text-center">Create apartment</h1>
          <Flash />
          <div className="errors w-100">
            {errors ? (
              <div>
                <Alert key="6" variant="danger">
                  {errors.data.message.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <li key={Date.now() * Math.random(2)}>{item}</li>
                  ))}
                </Alert>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="house" className="w-100">
                  Name
                  <input
                    type="text "
                    className="house__creator__wrapper-form-input"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name of your house"
                    id="house"
                  />
                </label>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="location" className="w-100">
                  Location
                  <input
                    type="text"
                    className="house__creator__wrapper-form-input"
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location of your house"
                    id="location"
                  />
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="rooms" className="w-100">
                  Rooms number
                  <input
                    type="number"
                    className="house__creator__wrapper-form-input"
                    onChange={(e) => setNumberRooms(e.target.value)}
                    placeholder="Enter number of rooms"
                    id="rooms"
                  />
                </label>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="data" className="w-100">
                  Built Date
                  <input
                    type="date"
                    className="house__creator__wrapper-form-input"
                    onChange={(e) => setBuiltDate(e.target.value)}
                    placeholder="Enter built date of your house"
                    id="date"
                  />
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="w-100">
                  Price
                  <input
                    type="number"
                    className="house__creator__wrapper-form-input"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price for per month"
                    id="price"
                  />
                </label>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="file" className="w-100">
                  Select image
                  <input
                    type="file"
                    className="house__creator__wrapper-form-input-file w-100"
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder="Enter price for per month"
                    id="file"
                  />
                </label>
              </div>
            </div>

            <label htmlFor="description" className="w-100">
              Description
              <textarea
                type="text"
                className="house__creator__wrapper-form-input"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description of your house"
                id="description"
              />
            </label>
          </div>

          <button type="submit" className="details-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
CreateHouse.propTypes = {
  getHouses: PropTypes.func.isRequired,
  getHousesError: PropTypes.func.isRequired,
  house: PropTypes.array, // eslint-disable-line
  errors: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = (state) => ({
  house: state.houses.newHouse,
  errors: state.houses.newHouseError,
});

const mapDispatchToProps = (dispatch) => ({
  getHouses: (house) => dispatch(createNewHouse(house)),
  getHousesError: (errors) => dispatch(getNewHouseError(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateHouse);
