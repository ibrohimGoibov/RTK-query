import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosAPI = createApi({
  reducerPath: "todosAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://37.27.29.18:8001",
  }),
  tagTypes: ["Todos"],

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/api/to-dos",
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/api/to-dos",
        method: "POST",
        body: newTodo,
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/api/to-dos?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteImg: builder.mutation({
      query: (id) => ({
        url: `/api/to-dos/images/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  todosAPI;