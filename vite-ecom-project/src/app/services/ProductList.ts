import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../models/Product";
import { customBaseQueryWithErrorHandling } from "../repos/productListRepo";
import type { ProductParams } from "../models/ProductParams";
import { ProductParamsToQueryString } from "../library/currencyFormatter";

export const productList= createApi({
    reducerPath:"productList",
    baseQuery: customBaseQueryWithErrorHandling,
    endpoints:(builder)=>({
        fetchProducts: builder.query<Product[],ProductParams>({
            query:(productParameters)=>{
               return {
                    url:"product", 
                    method:"GET", 
                    params: ProductParamsToQueryString(productParameters)
                }}
        }),
        fetchProductDetails: builder.query<Product,number>({
            query:(id)=>({url:`product/${id}`})
        }),
        fethProductsFiters: builder.query<{brands:string[], types:string[]},void>({
            query:()=>({url:"product/filters"})
        })
    })
})

export const { useFetchProductsQuery, useFetchProductDetailsQuery, useFethProductsFitersQuery } = productList;