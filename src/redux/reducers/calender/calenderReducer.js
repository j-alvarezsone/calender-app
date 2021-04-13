import moment from 'moment';
import { types } from '../../types/types';

const INITIAL_STATE = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Cumpleaños del jefe',
      start: moment().toDate(),
      end: moment().add(2, 'hour').toDate(),
      bgcolor: '#fafafa',
      notes: 'Comprar el pastel',
      user: {
        _id: '123',
        name: 'jorge',
      },
    },
  ],
  activeEvent: null,
};

export const calenderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventClearActive:
      return {
        ...state,
        activeEvent: null,
      };

    default:
      return state;
  }
};
