import axios from 'axios';

const actionsConstant = {
  SET_USER: 'SET_USER',
  GET_USERS: 'GET_USERS',
};

export const setUser = action => {
  return {
    type: 'SET_USER',
    payload: action,
  };
};

export const getUsers = () => async dispatch => {
  try {
    // const {data} = await axios.get('/api/users');
    const data = require('client/assets/models/users.json');

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export default actionsConstant;
