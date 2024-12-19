// ----- Pour changer le pseudo ----- //

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
    setUserDetails: (state, action) => {
      const { firstName, lastName, userName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
    },
    
    updateUsername: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserDetails, updateUsername } = userSlice.actions;
export default userSlice.reducer;
