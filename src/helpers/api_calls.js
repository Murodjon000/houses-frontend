import axios from 'axios';
import { navigate } from '@reach/router';
import jwtDecode from 'jwt-decode';

const API_BASE = 'https://houses-api-backend.herokuapp.com/api/v1/';
const SIGN_UP = 'users';
const LOG_IN = 'auth';
const HOUSES = 'houses';
const USERS = 'users';

const authCalls = (authType, user) => {
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
      },
      { withCredentials: true } // eslint-disable-line
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        const decode = jwtDecode(localStorage.getItem('token'));
        const userId = decode.sub;
        navigate(`/user/${userId}`);
      }
    })
    .catch((error) => console.log(error));
};

const getUser = async () => {
  let userId;
  if (localStorage.getItem('token')) {
    const decode = jwtDecode(localStorage.getItem('token'));
    userId = decode.sub;
  }

  const user = await axios
    .get(
      `${API_BASE}${USERS}/${userId}`,
      { headers: { Authorization: `token ${localStorage.getItem('token')}` } },
      { withCredentials: true } // eslint-disable-line
    )
    .then((response) => response.data)
    .catch((error) => error);
  return user;
};

const apiGetCalls = async (success) => {
  try {
    const houses = await axios.get(
      `${API_BASE}${HOUSES}`,
      { headers: { Authorization: `token ${localStorage.getItem('token')}` } },
      { withCredentials: true } // eslint-disable-line
    );
    success(houses.data.data);
  } catch (error) {
    console.log(error);
  }
};

export { authCalls, getUser, apiGetCalls };
