import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  error: null,
  loading: false,
};
export const login = createAsyncThunk('user/login', async (payload) => {
  const result = await axios.post('http://localhost:5000/login', payload);
  return result.data;
});

const loginSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
        state.data = initialState.data;
      },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
