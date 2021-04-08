import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../helpers/modalCustomStyle';

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    console.log('Closing...');
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className='modal'
      overlayClassName='modal-fondo'
    >
      <h1>Hola mundo</h1>
      <hr />
      <span>Hola de nuevo....</span>
    </Modal>
  );
};
