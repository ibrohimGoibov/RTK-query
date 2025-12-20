import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosAPI = createApi({
  reducerPath: "todosAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://37.27.29.18:8001/api",
  }),
  tagTypes: ["Todos"],

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/categories",
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/categories",
        method: "POST",
        body: newTodo,
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/categories?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = todosAPI;