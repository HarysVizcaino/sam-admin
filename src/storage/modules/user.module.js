import { UserService } from '../../services/user.services';

import {
  DEMO_ACTION,
  USER_SIGNINGIN,
  LOGOUT,
  SET_USER,
  SET_USERS,
  SIGNING_ERROR,
  CLEAR_SIGNING_ERROR,
  SET_JWT_TOKEN,
} from '../action_types';

const userService = new UserService();

const initialState = {
  demo: 10,
  user: {},
  users: [],
  jwtToken: '',
  signIngErrorMessage: '',
}



// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case DEMO_ACTION:
      return initialState
    case SIGNING_ERROR:
      return {...state, signIngErrorMessage: action.payload};
    case CLEAR_SIGNING_ERROR:
      return { ...state, signIngErrorMessage: '' };
    case SET_USER:
      return { ...state, user: action.payload };  
    case SET_USERS:
      return { ...state, users: action.payload }  
    case SET_JWT_TOKEN:
      return { ...state, jwtToken: action.payload};
    case LOGOUT: 
      return { ...state, jwtToken: '', user: {}}    
    default:
      return state;
  }
}

export const demoAction = () => ({
  type: DEMO_ACTION,
  payload: 20,
});


export const signinError = (payload) => ({ type: SIGNING_ERROR, payload });

export const setUser = (payload) => ({ type: SET_USER, payload });
export const setUsers = (payload) => ({ type: SET_USERS, payload});
export const setJWT = (payload) => ({ type: SET_JWT_TOKEN, payload });
export const Logout = () => ({ type: LOGOUT });


export const clearSignIngErrorMessage = () => ({ type: CLEAR_SIGNING_ERROR });

export const userSignIn = (email, password) => async (dispatch) => {
  try {
    const serviceResponse = await userService.SignIn(email, password);
    const {jwt, user} = serviceResponse.data;
    dispatch(setUser(user));
    dispatch(setJWT(jwt));
  } catch (error) {
    dispatch(signinError('Error iniciando sesion'));
  }
}

export const getAllUsers = () => async (dispatch) => {
  try {
    const users = await userService.getAll();
    dispatch(setUsers(users));
  } catch (error) {
    console.log(error);
  }
}
