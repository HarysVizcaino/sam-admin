import {
  DEMO_ACTION
} from '../action_types';

const initialState = {
  demo: 10
}



// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case DEMO_ACTION:
      return initialState
    default:
      return state;
  }
}

export const demoAction = () => ({
  type: DEMO_ACTION,
  payload: 20,
});
