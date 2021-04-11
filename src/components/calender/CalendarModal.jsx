import React, { useState } from 'react';

import { customStyles } from '../../helpers/modalCustomStyle';
import { CustomIcon } from '../ui/CustomIcon';

import moment from 'moment';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../redux/actions/ui';

Modal.setAppElement('#root');
const now = moment().minutes(0).seconds(0).add(0, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');
export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
  const [titleValid, setTitleValid] = useState(true);
  const [formValues, setFormValues] = useState({
    title: 'Event',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate(),
  });

  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const { title, notes, start, end } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  // Modal
  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  // DatePicker
  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    // la fecha de inicio si es igual o está después de la fecha de financiación, esto es un error
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire('Error', 'The end date must be greater than the start date', 'error');
    }

    if (title.trim().length < 2) {
      return setTitleValid(false);
    }

    // TODO realizar grabación
    setTitleValid(true);
    closeModal();
  };

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className='modal'
      overlayClassName='modal-fondo'
    >
      <h2> New event </h2>
      <hr />
      <form className='container' onSubmit={handleSubmitForm}>
        <div className='form-group'>
          <label>Start date and time</label>
          <br />
          <DatePicker
            onChange={handleStartDateChange}
            selected={dateStart}
            startDate={dateStart}
            selectsStart
            showTimeSelect
            dateFormat='MMMM d, yyyy h:mm aa'
            isClearable
            timeFormat='HH:mm'
            placeholderText='Choice your start date and time'
            className='form-control'
            shouldHighlightWeekends
            maxDate={end}
          />
        </div>

        <div className='form-group'>
          <label>Date and end time</label>
          <DatePicker
            onChange={handleEndDateChange}
            selected={dateEnd}
            minDate={dateStart}
            selectsEnd
            startDate={dateStart}
            showTimeSelect
            dateFormat='MMMM d, yyyy h:mm aa'
            isClearable
            placeholderText='Choice your end date and time'
            className='form-control'
          />
        </div>

        <hr />
        <div className='form-group'>
          <label>Title and notes</label>
          <input
            type='text'
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder='Event title'
            name='title'
            value={title}
            onChange={handleInputChange}
            autoComplete='off'
          />
          <small id='emailHelp' className='form-text text-muted'>
            A short description
          </small>
        </div>

        <div className='form-group'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Notes'
            rows='3'
            name='notes'
            value={notes}
            onChange={handleInputChange}
          ></textarea>
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
