import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/redux/features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, // "user" correspond au slice
  },
});

export const getStoreState = store.getState;
