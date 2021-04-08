import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';

import { customStyles } from '../../helpers/modalCustomStyle';
import { CustomIcon } from '../ui/CustomIcon';
import moment from 'moment';

Modal.setAppElement('#root');
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

  const closeModal = () => {
    console.log('Closing...');
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
  };

  return (
    <Modal
      isOpen={true}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className='modal'
      overlayClassName='modal-fondo'
    >
      <h2> New event </h2>
      <hr />
      <form className='container'>
        <div className='form-group'>
          <label>Start date and time</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            amPmAriaLabel='Select AM/PM'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label>Date and end time</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
            minDate={dateStart}
            amPmAriaLabel='Select AM/PM'
            className='form-control'
          />
        </div>

        <hr />
        <div className='form-group'>
          <label>Title and notes</label>
          <input
            type='text'
            className='form-control'
            placeholder='Event title'
            name='title'
            autoComplete='off'
          />
          <small id='emailHelp' className='form-text text-muted'>
            A short description
          </small>
        </div>

        <div className='form-group'>
          <textarea type='text' className='form-control' placeholder='Notes' rows='3' name='notes'></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Additional Information
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <CustomIcon className={'far fa-save'} />
          <span> Save</span>
        </button>
      </form>
    </Modal>
  );
};
