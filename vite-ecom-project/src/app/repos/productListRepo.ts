import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layouts/loader";

const customBaseQuery= fetchBaseQuery({
     baseUrl: "http://localhost:5199/api"
})

const sleep= ()=> new Promise((resolve)=>setTimeout(resolve,1000));

export const customBaseQueryWithErrorHandling= async (args:string | FetchArgs, api:BaseQueryApi, extraOptions:object)=>{
    api.dispatch(startLoading());
    await sleep();
    const result= await customBaseQuery(args,api,extraOptions);
    if(result.error){
        console.error("Error:", result.error);
        console.error("data:", result.data);
    }
    api.dispatch(stopLoading());
    return result;
}