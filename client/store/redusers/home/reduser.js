import actionsConstant from './actions';

const defaultState = {
  users: [],
};

const homeReduser = (state = defaultState, action) => {
  switch (action.type) {
    case actionsConstant.SET_USER:
      return (state.users = {
        ...state,
        users: [...state.users, action.payload],
      });
    case actionsConstant.GET_USERS:
      return (state.users = {...state, users: action.payload});
    default:
      return state;
  }
};

export default homeReduser;
