import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/models";

const initialState: User = {id:0, email: '', password:}

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers: {
        login:(state, action) => {
               state.value.id = action.payload.id; 
               state.value.email = action.payload.email; 
               state.value.password = action.payload.password;
               return state; 
        }
    }
})

export const {login} = userSlice.actions;
export default userSlice.reducer; 