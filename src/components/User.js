import React, { useEffect } from 'react';
// import { Link } from '@reach/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../helpers/api_calls';
import { authSuccess } from '../actions';
import FavouritesCard from './FavouritesCard';

/* eslint-disable */

const User = ({ user, getUserData }) => {
  useEffect(() => {
    getUser(getUserData);
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="">
      <div className="user__info px-3">
        <div className="d-flex flex-wrap bg-white rounded p-3 mt-4">
          {user.favourites.map((house) => (
            <FavouritesCard
              name={house.name}
              price={house.price}
              image={house.image}
              location={house.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.any, //eslint-disable-line

  getUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (user) => dispatch(authSuccess(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
