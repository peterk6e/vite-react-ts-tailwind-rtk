import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/models";

interface userState {
  value: {
    id: number;
    email: string;
    password: string;
  };
}

const initialState: userState = { value: { id: 0, email: "", password: "" } };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.value = {
        id: action.payload.id,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
