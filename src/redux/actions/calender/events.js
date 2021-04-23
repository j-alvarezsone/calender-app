import { fetchWithToken } from '../../../helpers/fetch';
import { types } from '../../types/types';

export const startAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;
    try {
      const resp = await fetchWithToken('events', event, 'POST');
      const body = await resp.json();

      if (body.ok) {
        event.id = body.event.id;
        event.user = {
          _id: uid,
          name: name,
        };
        dispatch(eventAddNew(event));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const eventAddNew = (e) => ({
  type: types.eventAddNew,
  payload: e,
});

export const eventSetActive = (e) => ({
  type: types.eventSetActive,
  payload: e,
});

export const eventClearActiveEvent = () => ({
  type: types.eventClearActive,
});

export const eventUpdated = (e) => ({
  type: types.eventUpdated,
  payload: e,
});

export const eventDeleted = () => ({
  type: types.eventDeleted,
});

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken('events');
      const body = await resp.json();

      const events = body.events;

      dispatch(eventLoaded(events));
    } catch (err) {
      console.log(err);
    }
  };
};

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});
