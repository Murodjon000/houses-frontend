import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { Spinner } from 'react-bootstrap';
import { getCurrentUser, getUserFailure } from '../actions';
import Header from './DashboardHeader';
import { addFavourites, getUser } from '../helpers/api_calls';
import FavouritesCard from './FavouritesCard';

// eslint-disable-next-line
const Dashboard = ({ user, getUserData, errors, getUserError }) => {
  useEffect(() => {
    getUser(getUserData, getUserError);
  }, [user]);

  if (!localStorage.getItem('token')) {
    navigate('/');
  }

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner__wrapper">
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (errors) {
    return <h1>User not found.Please sign in or sign up!</h1>;
  }

  const handleRemove = (id) => {
    const messWrapper = document.getElementById('remove-wrapper');
    addFavourites('unfavourite', id)
      .then((response) => {
        if (response.status === 200) {
          const message = document.createElement('div');
          message.innerText = 'House successfuly removed from favourites';
          message.classList.add('alert__wrapper');
          messWrapper.appendChild(message);
          setTimeout(() => {
            message.parentElement.remove();
          }, 3000);
        }
      })
      .catch((error) => error);
  };

  return (
    <div>
      <Header />
      <div className="user__info p-3">
        <div className="bg-white rounded p-3 mt-4">
          <div id="remove-wrapper" />
          <h1 className=" text-lg-black my-2">Favourites</h1>
          {user.favourites.length !== 0 ? (
            <div className="row">
              {user.favourites.map((house) => (
                <FavouritesCard
                  key={house.id}
                  name={house.name}
                  price={house.price}
                  image={house.image}
                  location={house.location}
                  handleRemove={() => handleRemove(house.id)}
                />
              ))}
            </div>
          ) : (
            <h1 className=" text-lg-black text-center my-2">
              No Favourites found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object, //eslint-disable-line
  errors: PropTypes.object, //eslint-disable-line
  getUserData: PropTypes.func.isRequired,
  getUserError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.userData,
  errors: state.user.userError,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (user) => dispatch(getCurrentUser(user)),
  getUserError: (errors) => dispatch(getUserFailure(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
