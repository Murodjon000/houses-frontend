import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Carousel, Spinner } from 'react-bootstrap';
import { apiGetCalls } from '../helpers/api_calls';
import HouseCard from './HouseCard';
import { addHouses } from '../actions';
import Header from './DashboardHeader';

// eslint-disable-next-line
const Houses = ({ houses = [], getHouses }) => {
  if (!localStorage.getItem('token')) {
    navigate('/');
  }

  useEffect(() => {
    apiGetCalls(getHouses);
  }, []);

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
  houses: PropTypes.any, // eslint-disable-line
};

const mapStateToProps = (state) => ({
  houses: state.houses.houses,
});

const mapDispatchToProps = (dispatch) => ({
  getHouses: (houses) => dispatch(addHouses(houses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
