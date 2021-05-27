import axios from 'axios';
import { navigate } from '@reach/router';
import jwtDecode from 'jwt-decode';

const API_BASE = 'https://houses-api-backend.herokuapp.com/api/v1/';
const SIGN_UP = 'users';
const LOG_IN = 'auth';
const HOUSES = 'houses';
const USERS = 'users';
const FAVOURITE = 'favourite';
const UNFAVOURITE = 'unfavourite';

const authCalls = (authType, user, success, failure) => {
  let API_END;

  if (authType === 'signup') {
    API_END = SIGN_UP;
  } else {
    API_END = LOG_IN;
  }

  axios
    .post(
      `${API_BASE}${API_END}`,
      {
        user,
      } // eslint-disable-line
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        success(user);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    })
    .catch((error) => failure(error.response));
};

const addFavourites = (authType, id) => {
  let API_END;
  if (authType === 'favourite') {
    API_END = FAVOURITE;
  } else {
    API_END = UNFAVOURITE;
  }
  const result = axios.post(
    `${API_BASE}${HOUSES}/${id}/${API_END}`,
    {
      house_id: id,
    },
    { headers: { Authorization: `token ${localStorage.getItem('token')}` } },
    { withCredentials: true } // eslint-disable-line
  );
  return result;
};

const getUser = async (success, failure) => {
  let userId;
  if (localStorage.getItem('token')) {
    const decode = jwtDecode(localStorage.getItem('token'));
    userId = decode.sub;
  }
  try {
    const houses = await axios.get(
      `${API_BASE}${USERS}/${userId}`,
      { headers: { Authorization: `token ${localStorage.getItem('token')}` } },
      { withCredentials: true } // eslint-disable-line
    );
    success(houses.data);
  } catch (error) {
    failure(error);
  }
};

const apiGetCalls = async (success, id = '', failure) => {
  try {
    const houses = await axios.get(
      `${API_BASE}${HOUSES}/${id}`,
      { headers: { Authorization: `token ${localStorage.getItem('token')}` } },
      { withCredentials: true } // eslint-disable-line
    );
    success(houses.data.data);
  } catch (error) {
    failure(error);
  }
};

export { authCalls, getUser, apiGetCalls, addFavourites }; //eslint-disable-line
