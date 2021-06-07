import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { getUser } from '../helpers/api_calls';
import { getCurrentUser } from '../actions';

const Header: React.FunctionComponent<any> = ({
  user,
  getUserData,
}) => {
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
          image={user.avatar_url}
        />
      </div>
      <div id="page-wrap">
        <header className="user__header d-flex px-2 bg-white justify-content-end  py-3 align-items-center ">
          <div>
            <input
              type="text"
              placeholder="Search"
              className=" search-input"
            />
          </div>
        </header>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.userData,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserData: (user: any) => dispatch(getCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
