import { apiSlice } from "./apiSlice";

export const shopApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIndex: builder.query({
      query: () => ({
        url: "/",
        // validateStatus: (response, result) => {
        //   return response.status === 200 && !result.isError;
        // },
      }),
      providesTags: ["Products"],
    }),
    getCart: builder.query({
      query: () => ({
        url: "/cart",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: ["Cart"],
    }),
    addToCard: builder.query({
      query: (productId) => ({
        url: `/cart/${productId}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
    }),
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/cart/${productId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Cart", "User"],
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: `/cart`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart", "User"],
    }),
    getFavorates: builder.query({
      query: () => ({
        url: "/favorate",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: ["Favorates"],
    }),
    toggleFavorate: builder.mutation({
      query: (productId) => ({
        url: `/favorate/${productId}`,
        method: "POST",
      }),
      invalidatesTags: ["Favorates"],
    }),
  }),
});

export const {
  useGetIndexQuery,
  useGetCartQuery,
  useAddToCardQuery,
  useRemoveFromCartMutation,
  useClearCartMutation,
  useGetFavoratesQuery,
  useToggleFavorateMutation,
} = shopApiSlice;
