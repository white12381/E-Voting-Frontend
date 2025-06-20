import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./basequery.js";
import { Toastify } from "../../utils/Toastify/toast";


export const apiService = createApi({
  baseQuery,
  reducerPath: "apiService",
  endpoints: (builder) => ({
   apiServicePost: builder.mutation({
      query: (req) => ({
        url: req.path,
        method: "POST",
        body: req.datas,
      }),
      transformErrorResponse: (err) => {
        if (err.status === "FETCH_ERROR") {
          Toastify("Network Error", "error");
        }

        if (err.status === 404 && !err?.data?.statusMessage) {
          Toastify("invalid API", "error");
        } else if (err.status === 500) {
          Toastify(
            "Something went wrong. It’s not you, it’s us. Please give it another try.",
            "error"
          );
        } else if (err.status === 401) {
          Toastify(
            "session has expired login, please login to continue ",
            "error"
          );
          localStorage.removeItem("token");
          window.location.replace("/");
        }
        return err;
      },
    }),

    apiServicePatch: builder.mutation({
      query: (req) => ({
        url: req.path,
        method: "PATCH",
        body: req.datas,
      }),
      transformErrorResponse: (err) => {
        if (err.status === "FETCH_ERROR") {
          Toastify("Network Error", "error");
        }

        if (err.status === 404 && !err?.data?.statusMessage) {
          Toastify("invalid API", "error");
        } else if (err.status === 500) {
          Toastify(
            "Something went wrong. It’s not you, it’s us. Please give it another try.",
            "error"
          );
        } else if (err.status === 401) {
          Toastify(
            "session has expired login, please login to continue ",
            "error"
          );
          localStorage.removeItem("token");
          window.location.replace("/");
        }
        return err;
      },
    }),

   apIServiceGet: builder.query({
      query: (queries) => queries,
      transformErrorResponse: (err) => {
        if (err.status === "FETCH_ERROR") {
          Toastify("Network Error", "error");
        } else if (err.status === 500) {
          Toastify(
            "Something went wrong. It’s not you, it’s us. Please give it another try.",
            "error"
          );
        } else if (err.status === 401) {
          Toastify(
            "session has expired login, please login to continue ",
            "error"
          );
          localStorage.removeItem("token");
          window.location.replace("/");
        }
        return err;
      },
    }),
  }),
});

export const {
 useApIServiceGetQuery, useApiServicePostMutation, useApiServicePatchMutation
} = apiService;
