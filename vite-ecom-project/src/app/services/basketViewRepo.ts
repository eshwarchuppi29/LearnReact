import { createApi } from "@reduxjs/toolkit/query/react";
import { type Basket } from "../models/Basket";
import { customBaseQueryWithErrorHandling } from "../repos/productListRepo";
import type { Product } from "../models/Product";

export const basketViewRepo = createApi( {
    reducerPath:'basketViewApi',
    baseQuery: customBaseQueryWithErrorHandling,
    tagTypes:['Basket'],
    endpoints: (builder) => ({
            fetchBasket: builder.query<Basket, void>({
                query: () => 'basket',
                providesTags:['Basket']
            }),
            addBasketItem: builder.mutation<void, {product: Product, quantity: number}>({
                query: ({product, quantity}) => ({
                    url: `basket/${product.productId}/${quantity}`,
                    method: 'POST'
                }),
                    onQueryStarted: async ({product,quantity}, {dispatch, queryFulfilled}) => {
                        const patchResult = dispatch( basketViewRepo.util.updateQueryData('fetchBasket', undefined, (draft) => {
                            const existingItem= draft.items.find(x => x.productId === product.productId);
                            if(existingItem) {
                                existingItem.quantity += quantity;
                            }
                            else {
                                draft.items.push({
                                id: 0,
                                productId: product.productId,
                                quantity: quantity,
                                price: product.price,
                                name: product.name,
                                description: product.description,
                                image: product.image,
                                brand: product.brand
                            });
                            }
                        }));
                        try {
                            await queryFulfilled;
                        }
                        catch {
                        console.log('Error while adding item to basket');
                        patchResult.undo();
                        }
                    }
                }), 
                removeBasketItem: builder.mutation<void, {productId: number, quantity: number}>({
                    query: ({productId, quantity}) => ({
                        url: `basket/${productId}/${quantity}`,
                        method: 'DELETE'
                    }),
                    onQueryStarted: async({productId, quantity},{dispatch, queryFulfilled})=>{
                        const patchResult= dispatch(basketViewRepo.util.updateQueryData('fetchBasket',undefined,(draft)=>{
                            const index = draft.items.findIndex(x => x.productId === productId);
                            if(index>=0) {
                               draft.items[index].quantity -= quantity;
                               if(draft.items[index].quantity <= 0) {
                                draft.items.splice(index, 1);
                               }
                            }
                        }));
                        try {
                            await queryFulfilled;
                        }
                        catch {
                            console.log('Error while removing item from basket');
                            patchResult.undo();
                        }
                    }
                })
    })
});

export const {useFetchBasketQuery, useAddBasketItemMutation, useRemoveBasketItemMutation} = basketViewRepo;