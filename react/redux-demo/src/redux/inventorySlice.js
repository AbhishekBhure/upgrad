import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialData = {
  items: [],
  totalItems: 0,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState: initialData,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: nanoid(),
        ...action.payload,
      };
      state.items.push(newItem);

      state.totalItems += action.payload.quantity;
    },
    removeItem: (state, action) => {
      //action.payload is the id of the item we are trying to remove
      const getQuantity = state.items.find(
        (item) => item.id === action.payload
      ).quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalItems -= getQuantity;
    },
    sortByQuantityAsc: (state) => {
      state.items.sort((a, b) => a.quantity - b.quantity);
    },
    sortByQuantityDesc: (state) => {
      state.items.sort((a, b) => b.quantity - a.quantity);
    },
  },
});

export const { addItem, removeItem, sortByQuantityAsc, sortByQuantityDesc } =
  inventorySlice.actions;

export const inventoryReducers = inventorySlice.reducer;
