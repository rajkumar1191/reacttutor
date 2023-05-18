import { createSlice } from "@reduxjs/toolkit";

const loginInitialValue = { isLoggedIn: false };

const userSlice = createSlice({
  name: "user",
  initialState: { value: loginInitialValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
