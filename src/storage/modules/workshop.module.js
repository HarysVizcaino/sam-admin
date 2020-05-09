import { WorkShopService } from '../../services/workshop.service';


import {
  UPDATE_WORKSHOPS_LIST,
  DEMO_ACTION
} from '../action_types';


const workshopService = new WorkShopService();


const initialState = {
  workshopsList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DEMO_ACTION:
      return initialState
    
    case UPDATE_WORKSHOPS_LIST:
      return {...state, workshopsList: action.payload};  

    default: 
      return state;
  }
}

export const updateWorkShopList =  (payload) => ({ type: UPDATE_WORKSHOPS_LIST, payload});


export const getAllUsers = () => async (dispatch) => {
  try {
    const workshops = await workshopService.getAll();
    dispatch(updateWorkShopList(workshops));
  } catch (error) {
    console.log(error);
  }
}