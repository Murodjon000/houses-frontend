import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { getUser } from '../helpers/api_calls';
import { getCurrentUser } from '../actions';

const Header = ({ user, getUserData }) => {
  useEffect(() => {
    getUser(getUserData);
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="sidebar-wrapper">
        <Sidebar
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          name={user ? user.user.username : 'Loading...'}
        />
      </div>
      <div id="page-wrap">
        <header className="user__header d-flex px-2 bg-white justify-content-end  py-3 align-items-center ">
          <div>
            <input type="text" placeholder="Search" className=" search-input" />
          </div>
        </header>
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object, // eslint-disable-line
  getUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.userData,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (user) => dispatch(getCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
