import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  loggedIn: false,
  password: '',
  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
      },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  setUserName,
  setLoggedIn,
  setPassword,
} = userSlice.actions;

export default userSlice.reducer;
