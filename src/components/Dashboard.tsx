import React, { Dispatch, ErrorInfo, useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';
import { Spinner } from 'react-bootstrap';
import { getCurrentUser, getUserFailure } from '../actions';
import Header from './DashboardHeader';
import { addFavourites, getUser } from '../helpers/api_calls';
import FavouritesCard from './FavouritesCard';
import Flash from './Flash';

const Dashboard: React.FunctionComponent<any> = ({
  user,
  getUserData,
  errors,
  getUserError,
}) => {
  useEffect(() => {
    void getUser(getUserData, getUserError);
  }, [user]);

  if (!localStorage.getItem('token')) {
    void navigate('/');
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

  const handleRemove = (id: string) => {
    addFavourites('unfavourite', id)
      .then((response) => {
        if (response.status === 200) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          window.flash('House successfuly removed from favourites!');
        }
        return response;
      })
      .catch((error: ErrorInfo) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        window.flash(
          'Something went wrong.Plese try again!',
          'danger',
        );
        return error;
      });
  };

  return (
    <div>
      <Header />
      <div className="user__info p-3">
        <div className="bg-white rounded p-3 mt-4">
          <Flash />
          <h1 className=" text-lg-black my-2">Favourites</h1>
          {user.favourites.length !== 0 ? (
            <div className="row">
              {user.favourites.map((house: any) => (
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

type stateType = {
  user: {
    userData: string[];
    userError: string[];
  };
};

const mapStateToProps = (state: stateType) => ({
  user: state.user.userData,
  errors: state.user.userError,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getUserData: (user: any) => dispatch(getCurrentUser(user)),
  getUserError: (errors: any) => dispatch(getUserFailure(errors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
