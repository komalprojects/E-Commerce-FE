import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './SignUpSlice';

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { handleSubmit, register } = useForm();
 

  const submit = (data) => {
    dispatch(registerUser(data));
    history('/');
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>User Name</label>
          <input type='text' placeholder='Username' {...register('name')} />
        </div>
        <div>
          <label>Email</label>
          <input type='email' placeholder='Email' {...register('email')} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' placeholder='Password' {...register('password')} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
