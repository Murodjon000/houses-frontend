import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authSuccess } from '../actions';
// import { navigate } from '@reach/router';
import Sidebar from './Sidebar';
import { addFavourites, getUser } from '../helpers/api_calls';
import FavouritesCard from './FavouritesCard';

const Dashboard = ({ user, getUserData }) => {
  useEffect(() => {
    getUser(getUserData);
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  const handleRemove = (id) => {
    addFavourites('unfavourite', id);
  };

  console.log(user);
  return (
    <div id="outer-container">
      <div className="sidebar-wrapper">
        <Sidebar
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          name={user.user.username}
        />
      </div>
      <div id="page-wrap">
        <header className="user__header d-flex px-2 bg-white justify-content-end  py-3 align-items-center ">
          <div>
            <input type="text" placeholder="Search" className=" search-input" />
          </div>
        </header>
      </div>
      <div className="user__info bg-dashboard h-100 p-3">
        <div className="bg-white rounded p-3 mt-4">
          <h1 className=" text-lg-black my-2">Favourites</h1>
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
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.any, //eslint-disable-line

  getUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (user) => dispatch(authSuccess(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
