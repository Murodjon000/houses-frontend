import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Carousel, Spinner } from 'react-bootstrap';
import { apiGetCalls } from '../helpers/api_calls';
import HouseCard from './HouseCard';
import { addHouses, getHousesErrors } from '../actions';
import Header from './DashboardHeader';

// eslint-disable-next-line
const Houses = ({ houses = [], getHouses, getHousesError, errors }) => {
  if (!localStorage.getItem('token')) {
    navigate('/');
  }

  useEffect(() => {
    apiGetCalls(getHouses, '', getHousesError);
  }, []);

  if (errors) {
    return <h1>Houses not found</h1>;
  }

  if (houses.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner__wrapper">
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="houses__wrapper">
        <div className="p-2 my-3">
          <Carousel className="mb-3">
            {houses.map((house) => (
              <Carousel.Item key={house.id}>
                <HouseCard
                  key={house.id}
                  name={house.attributes.name}
                  image={house.attributes.image}
                  price={house.attributes.price}
                  id={house.id}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

Houses.propTypes = {
  getHouses: PropTypes.func.isRequired,
  getHousesError: PropTypes.func.isRequired,
  houses: PropTypes.array, // eslint-disable-line
  errors: PropTypes.array, // eslint-disable-line
};

const mapStateToProps = (state) => ({
  houses: state.houses.houses,
  errors: state.houses.errors,
});

const mapDispatchToProps = (dispatch) => ({
  getHouses: (houses) => dispatch(addHouses(houses)),
  getHousesError: (errors) => dispatch(getHousesErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
