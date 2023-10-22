import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    order: orderReducer,
    // Add other reducers here if needed
  },
});

export default store;
