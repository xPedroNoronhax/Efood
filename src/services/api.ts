import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RestaurantOptions } from "../pages/Home";

type Resposta = {
  orderId: string;
};

type PurchasePayload = {
  products: [
    {
      id: number;
      price: number;
    }
  ];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};
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
    purchase: builder.mutation<Resposta, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetFeaturedRestaurantQuery,
  useGetRestaurantIdQuery,
  usePurchaseMutation,
} = api;

export default api;
