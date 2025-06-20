import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../api/apiService";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
   [apiService.reducerPath]: apiService.reducer 
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      apiService.middleware
    ]),
});
setupListeners(store.dispatch);
