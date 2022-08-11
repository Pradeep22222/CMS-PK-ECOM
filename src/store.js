import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/logIn/userSlice";
const store = configureStore({
  reducer: {
    admin: userReducer,
  },
});
export default store;
