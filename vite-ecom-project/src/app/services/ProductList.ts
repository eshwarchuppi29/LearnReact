import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../models/Product";

export const productList= createApi({
    reducerPath:"productList",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5199/api"}),
    endpoints:(builder)=>({
        fetchProducts: builder.query<Product[],void>({
            query:()=>({url:"product",method:"GET"})
        }),
        fetchProductDetails: builder.query<Product,number>({
            query:(id)=>({url:`product/${id}`,method:"GET"})
        })
    })
})

export const { useFetchProductsQuery, useFetchProductDetailsQuery } = productList;