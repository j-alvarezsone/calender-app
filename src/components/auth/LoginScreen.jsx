import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../redux/actions/auth/auth';
import './login.css';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: 'jorge@gmail.com',
    lPassword: '123456',
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formLoginValues);
    dispatch(startLogin(lEmail, lPassword));
  };

  return (
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-6 login-form-1'>
          <h3>Entry</h3>
          <form onSubmit={handleLogin}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Email'
                name='lEmail'
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Contraseña'
                name='lPassword'
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group'>
              <input type='submit' className='btnSubmit' value='Login' />
            </div>
          </form>
        </div>

        <div className='col-md-6 login-form-2'>
          <h3>Register</h3>
          <form>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Name' />
            </div>
            <div className='form-group'>
              <input type='email' className='form-control' placeholder='Email' />
            </div>
            <div className='form-group'>
              <input type='password' className='form-control' placeholder='Password' />
            </div>

            <div className='form-group'>
              <input type='password' className='form-control' placeholder='Confirm password' />
            </div>

            <div className='form-group'>
              <input type='submit' className='btnSubmit' value='Create account' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
