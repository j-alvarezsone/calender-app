import { types } from '../../types/types';

const INITIAL_STATE = {
  checking: true,
  // uid: null,
  // name: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    default:
      return state;
  }
};
