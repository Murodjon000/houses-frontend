import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import NavLink from '../helpers/NavLink';

const Sidebar = ({ name, image }) => {
  if (!name) {
    return <h1>Loading...</h1>;
  }

  const logOut = () => localStorage.clear();
  return (
    <Menu className="d-flex flex-column justify-content-between">
      <div className="d-flex flex-column mb-5">
        <div>
          <img
            src={image}
            alt=""
            className="d-block mx-auto card-rounded-image"
          />
          <h2 className="my-2 text-center menu-item">{name}</h2>
        </div>
        <div className="d-flex flex-column">
          <NavLink to="/dashboard" className="menu-item text-hover my-3">
            Dashboard
          </NavLink>
          <NavLink to="/houses" className="menu-item text-hover">
            Houses
          </NavLink>
          <NavLink to="/create-house" className="menu-item text-hover my-3">
            Create House
          </NavLink>
        </div>
      </div>
      <div className="sidebar-link">
        <hr className="mb-2" />
        <Link to="/login" onClick={logOut} className="menu-item text-hover">
          Logout
        </Link>
      </div>
    </Menu>
  );
};

Sidebar.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

Sidebar.defaultProps = {
  name: '',
  image: '',
};

export default Sidebar;
