import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { apiGetHouse } from '../helpers/upload_calls';
import { createNewHouse, getNewHouseError } from '../actions';
import Header from './DashboardHeader';
import Flash from './Flash';
import HouseForm from './CreateHouseForm';


const CreateHouse: React.FunctionComponent<any> = ({
  getHouses,
  getHousesError,
  errors,
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [numberRooms, setNumberRooms] = useState('');
  const [builtDate, setBuiltDate] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<any>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        'warning', // eslint-disable-line
      );
    }
  };

  const changeFile = (files: any) => {
    setFile(files[0]);
  };

  return (
    <div>
      <Header />
      <div className="house__creator__wrapper">
        <form
          onSubmit={handleSubmit}
          className="house__creator__wrapper-form"
        >
          <h1 className="text-font-md mb-3 text-center">
            Create apartment
          </h1>
          <Flash />
          <div className="errors w-100">
            {errors ? (
              <div>
                <Alert key="6" variant="danger">
                  {errors.data.message.map((item: any) => (
                    <li key={Date.now() * Math.random()}>{item}</li>
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
                  <HouseForm
                    type="text"
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
                  <HouseForm
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
                  <HouseForm
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
                  <HouseForm
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
                  <HouseForm
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
                  <HouseForm
                    type="file"
                    className="house__creator__wrapper-form-input-file w-100"
                    onChange={(e) => changeFile(e.target.files)}
                    placeholder="Enter image"
                    id="file"
                  />
                </label>
              </div>
            </div>

            <label htmlFor="description" className="w-100">
              Description
              <HouseForm
                type="textarea"
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

type statType = {
  houses: {
    newHouse: string[];
    newHouseError: string[];
  };
};
const mapStateToProps = (state: statType) => ({
  house: state.houses.newHouse,
  errors: state.houses.newHouseError,
});

const mapDispatchToProps = (dispatch: any) => ({
  getHouses: (house: any) => dispatch(createNewHouse(house)),
  getHousesError: (errors: any) => dispatch(getNewHouseError(errors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateHouse);
