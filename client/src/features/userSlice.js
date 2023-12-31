import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    isloggedin: false,
    startlogin: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload;
            state.isloggedin = true;
        },
        logout: (state) => {
            state.username = "";
            state.isloggedin = false;
        },
        loginstart: (state) => {
            state.startlogin = true;
        },
        loginend: (state) => {
            state.startlogin = false;
        },
    },
});

export const { login, logout, loginend,loginstart} = userSlice.actions;

export default userSlice.reducer;