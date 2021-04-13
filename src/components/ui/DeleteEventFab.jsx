import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../redux/actions/calender/events';
import { CustomIcon } from './CustomIcon';

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(eventDeleted());
  };

  return (
    <button className='btn btn-danger fab-danger' onClick={handleDeleteEvent}>
      <CustomIcon className={'fas fa-trash'} />
      <span> Delete event</span>
    </button>
  );
};
