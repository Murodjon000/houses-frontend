import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Carousel } from 'react-bootstrap';
import { apiGetCalls } from '../helpers/api_calls';
import HouseCard from './HouseCard';
import { addHouses } from '../actions';

const Houses = ({ houses = [], getHouses }) => {
  if (!localStorage.getItem('token')) {
    navigate('/');
  }

  useEffect(() => {
    apiGetCalls(getHouses);
    console.log(houses);
  }, []);

  if (houses.length === 0) {
    return <h1>Loading ....</h1>;
  }

  return (
    <div className="p-2">
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
