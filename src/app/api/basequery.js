import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (!headers.has("Authorization") && token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
