import React, { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { Carousel, Spinner } from 'react-bootstrap';
import { apiGetCalls } from '../helpers/api_calls';
import HouseCard from './HouseCard';
import { addHouses, getHousesErrors } from '../actions';
import Header from './DashboardHeader';

const Houses: React.FunctionComponent<any> = ({
  houses = [],
  getHouses,
  getHousesError,
  errors,
}) => {
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
            {houses.map((house: any) => (
              <Carousel.Item key={house.id}>
                <HouseCard
                  key={house.id}
                  name={house.attributes.name}
                  image={house.attributes.images}
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

type stateType = {
  houses: {
    houses: string[];
    errors: string[];
  };
};

const mapStateToProps = (state: stateType) => ({
  houses: state.houses.houses,
  errors: state.houses.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getHouses: (houses: any) => dispatch(addHouses(houses)),
  getHousesError: (errors: any) => dispatch(getHousesErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
