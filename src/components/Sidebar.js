import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import man from '../assets/man.jpg';

const Sidebar = ({ name }) => (
  <Menu className="d-flex flex-column justify-content-between">
    <div className="d-flex flex-column mb-5">
      <div>
        <img src={man} alt="" className="d-block mx-auto card-rounded-image" />
        <h2 className="my-2 text-center">{name}</h2>
      </div>
      <div className="d-flex flex-column">
        <Link to="/" className="menu-item text-hover my-3">
          Dashboard
        </Link>
        <Link to="/houses" className="menu-item text-hover">
          Houses
        </Link>
      </div>
    </div>
    <div className="sidebar-link">
      <hr className="mb-2" />
      <Link to="/logout" className="menu-item text-hover">
        Logout
      </Link>
    </div>
  </Menu>
);

Sidebar.propTypes = {
  name: PropTypes.string,
};

Sidebar.defaultProps = {
  name: '',
};

export default Sidebar;
