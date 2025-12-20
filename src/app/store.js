import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todosAPI } from "../services/pokemon";

export const store = configureStore({
  reducer: {
    [todosAPI.reducerPath]: todosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosAPI.middleware),
});