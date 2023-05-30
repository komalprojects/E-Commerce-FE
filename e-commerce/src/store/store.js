import { configureStore } from '@reduxjs/toolkit';
import signReducer from '../components/SignUpSlice';
import loginReducer from '../components/LoginSlice';

const store = configureStore({
  reducer: {
    signup: signReducer,
    login: loginReducer,
  },
});

export default store;
