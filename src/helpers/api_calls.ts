import axios from 'axios';
import { navigate } from '@reach/router';
import jwtDecode from 'jwt-decode';

export const API_BASE: string = 'http://127.0.0.1:3000/api/v1/';
export const SIGN_UP: string = 'users';
export const PRESIGNED_URL: string = 'presigned_url';
export const USERS: string = 'users';
export const HOUSES: string = 'houses';
const LOG_IN: string = 'auth';
const FAVOURITE: string = 'favourite';
const UNFAVOURITE: string = 'unfavourite';

const authCalls = (
  authType: any,
  user: any,
  success: any,
  failure: any,
) => {
  let API_END: string;

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
      }, // eslint-disable-line
    )
    .then((response: any) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        success(user);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
      return response;
    })
    .catch((error: any) => failure(error.response));
};

const addFavourites = (authType: any, id: any) => {
  let API_END: string;
  if (authType === 'favourite') {
    API_END = FAVOURITE;
  } else {
    API_END = UNFAVOURITE;
  }
  return axios.post(
    `${API_BASE}${HOUSES}/${id}/${API_END}`,
    {
      house_id: id,
    },
    {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    },
  );
};

interface jwtDec {
  token: string;
  options?: any;
  sub: any;
}
const getUser = async (success: any, failure?: any) => {
  let userId;
  const localS = localStorage.getItem('token');

  if (localS) {
    const decode = jwtDecode<jwtDec>(localS);
    userId = decode.sub;
  }
  try {
    const houses = await axios.get(`${API_BASE}${USERS}/${userId}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    });
    success(houses.data);
  } catch (error: any) {
    failure(error.response);
  }
};

const apiGetCalls = async (
  success: any,
  id: any = '',
  failure: any,
) => {
  try {
    const houses = await axios.get(`${API_BASE}${HOUSES}/${id}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    });
    success(houses.data.data);
  } catch (error) {
    failure(error);
  }
};

export { authCalls, getUser, apiGetCalls, addFavourites }; //eslint-disable-line