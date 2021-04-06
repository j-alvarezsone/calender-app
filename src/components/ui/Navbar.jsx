import React from 'react';
import { CustomIcon } from './CustomIcon';

export const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
      <span className='navbar-brand'>Jorge</span>
      <button className='btn btn-outline-danger'>
        <CustomIcon className={'fas fa-sign-out-alt'} />
        <span> Logout</span>
      </button>
    </div>
  );
};
