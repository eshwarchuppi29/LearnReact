import { createApi } from "@reduxjs/toolkit/query/react";
import type { Basket } from "../models/Basket";
import { customBaseQueryWithErrorHandling } from "../repos/productListRepo";

export const basketViewRepo = createApi( {
    reducerPath:'basketViewApi',
    baseQuery: customBaseQueryWithErrorHandling,
    endpoints: (builder) => 
        ({
        fetchBasket: builder.query<Basket[], void>({
            query: () => 'basket'
        }),
        addBasketItem: builder.mutation<void, {productId: number, quantity: number}>({
            query: ({productId, quantity}) => ({
                url: `basket/${productId}/${quantity}`,
                method: 'POST'
            })}),
        removeBasketItem: builder.mutation<void, {productId: number, quantity: number}>({
            query: ({productId, quantity}) => ({
                url: `basket?productId=${productId}&quantity=${quantity}`,
                method: 'DELETE'
            })
    })
})});

export const {useFetchBasketQuery, useAddBasketItemMutation, useRemoveBasketItemMutation} = basketViewRepo;