import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from './LoginSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useNavigate();

  const submit = (data) => {
    dispatch(login(data));
    history('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div class='mb-3 row'>
          <label for='staticEmail' class='col-sm-2 col-form-label'>
            Email
          </label>
          <div class='col-sm-6'>
            <input type='text' class='form-control' {...register('email')} />
          </div>
        </div>
        <div class='mb-3 row'>
          <label for='inputPassword' class='col-sm-2 col-form-label'>
            Password
          </label>
          <div class='col-sm-6'>
            <input type='password' class='form-control' id='inputPassword' {...register('password')} />
          </div>
        </div>
        <div>
          <button type='submit' className='btn btn-primary justify-content-center'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
