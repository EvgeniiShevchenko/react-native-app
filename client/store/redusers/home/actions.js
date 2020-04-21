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

export const getUsers = async action => {
  const data = [{name: 'evgenii'}];

  return {
    type: 'GET_USERS',
    payload: data,
  };
  // try {
  //   // const {data} = await axios.get('/api/users');
  //   const data = [{name: 'evgenii'}];

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};

// export const getUsers = () => async dispatch => {
//   try {
//     // const {data} = await axios.get('/api/users');
//     const data = [{name: 'evgenii'}];

//     dispatch({
//       type: 'GET_USERS',
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export default actionsConstant;
