import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQueryWithErrorHandling } from "../repos/productListRepo";

export const errorResponseApi= createApi ({
    reducerPath:"errorResponse",
    baseQuery:customBaseQueryWithErrorHandling,
    endpoints: (builder)=>({
        response200Ok: builder.query<void,void>({
            query:()=>({url:"Error/ok"})
        }),
        response204NoContent: builder.query<void,void>({
            query:()=>({url:"Error/nocontent"})
        }),
        response400BadRequest: builder.query<void,void>({
            query:()=>({url:"Error/badrequest"})
        }),
         response401UnAuthorized: builder.query<void,void>({
            query:()=>({url:"Error/unauthorized"})
        }),
        response403Forbidden: builder.query<void,void>({
            query:()=>({url:"Error/forbidden"})
        }),
        response404NotFound: builder.query<void,void>({
            query:()=>({url:"Error/notfound"})
        }),
         response409Conflict: builder.query<void,void>({
            query:()=>({url:"Error/conflict"})
        }),
         response422UnProcessable: builder.query<void,void>({
            query:()=>({url:"Error/unprocessable"})
        }),
         response500InternalServerError: builder.query<void,void>({
            query:()=>({url:"Error/internalservererror"})
        }),
         response502BadGateway: builder.query<void,void>({
            query:()=>({url:"Error/badgateway"})
        }),
         response503ServiceUnavailable: builder.query<void,void>({
            query:()=>({url:"Error/serviceunavailable"})
        }),
    })
});
export const { 
useLazyResponse200OkQuery,
useLazyResponse204NoContentQuery,
useLazyResponse400BadRequestQuery, 
useLazyResponse401UnAuthorizedQuery,
useLazyResponse403ForbiddenQuery,
useLazyResponse404NotFoundQuery,
useLazyResponse409ConflictQuery,
useLazyResponse422UnProcessableQuery,
useLazyResponse500InternalServerErrorQuery,
useLazyResponse502BadGatewayQuery,
useLazyResponse503ServiceUnavailableQuery
} = errorResponseApi;
