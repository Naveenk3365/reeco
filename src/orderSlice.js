import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "Pending",
  items: "Item 1, Item 2",
  quantity: "2",
  price: "$50.00",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
