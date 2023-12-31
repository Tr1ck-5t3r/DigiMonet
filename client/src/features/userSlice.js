import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    useraddr: "",
    wallet: "",
    amount: 0,
    isloggedin: false,
    message: "",
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
        setuseraddr: (state, action) => {
            state.useraddr = action.payload;
        },
        setuserwallet: (state, action) => {
            state.wallet = action.payload;
        },
        setuseramount: (state, action) => {
            state.amount = action.payload;
        },
        setusermessage: (state, action) => {
            state.message = action.payload;
        }
    },
});

export const { login, logout, setuseraddr, setusermessage, setuseramount, setuserwallet } = userSlice.actions;

export default userSlice.reducer;