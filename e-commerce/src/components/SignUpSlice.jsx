import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk('signup/register', async (params) => {
  const result = await axios.post('http://localhost:5000/register', params);
  return result.data;
});

const signup = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    // logout: (state) => {
    //   state.data = initialState.data;
    // },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.data;
    },
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
// export const { logout } = signup.actions;
export default signup.reducer;
