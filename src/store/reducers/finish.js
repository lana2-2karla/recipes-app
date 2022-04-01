import { VERIFY_CHECK_ING } from '../actions';

const INITIAL_STATE = { disableButton: false };
const finish = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VERIFY_CHECK_ING:
    return {
      ...state,
      disableButton: action.payload,
    };
  default:
    return state;
  }
};

export default finish;
