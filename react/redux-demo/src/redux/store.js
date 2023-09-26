import { configureStore } from "@reduxjs/toolkit";
import { inventoryReducers } from "./inventorySlice";
import { catalogApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducers,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});
