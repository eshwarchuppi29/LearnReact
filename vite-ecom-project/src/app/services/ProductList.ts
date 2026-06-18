import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../models/Product";
import { customBaseQueryWithErrorHandling } from "../repos/productListRepo";

export const productList= createApi({
    reducerPath:"productList",
    baseQuery: customBaseQueryWithErrorHandling,
    endpoints:(builder)=>({
        fetchProducts: builder.query<Product[],void>({
            query:()=>({url:"product"})
        }),
        fetchProductDetails: builder.query<Product,number>({
            query:(id)=>({url:`product/${id}`})
        })
    })
})

export const { useFetchProductsQuery, useFetchProductDetailsQuery } = productList;