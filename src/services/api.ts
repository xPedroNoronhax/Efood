import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RestaurantOptions } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<RestaurantOptions[], void>({
      query: () => "restaurantes",
    }),
    getRestaurantId: builder.query<RestaurantOptions, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});

export const { useGetFeaturedRestaurantQuery, useGetRestaurantIdQuery } = api;

export default api;
