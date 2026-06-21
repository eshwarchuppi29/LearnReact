import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layouts/loader";
import { toast } from "react-toastify";
import { router } from "../routes/Routes";

const customBaseQuery= fetchBaseQuery({
     baseUrl: "http://localhost:5199/api"
})

const sleep= ()=> new Promise((resolve)=>setTimeout(resolve,1000));

export const customBaseQueryWithErrorHandling= async (args:string | FetchArgs, api:BaseQueryApi, extraOptions:object)=>{
    api.dispatch(startLoading());
    await sleep();
    const result= await customBaseQuery(args,api,extraOptions);
    if(result.error){
        const {data,status}= result.error;
        console.log("Error Response:",data);
        console.log("Error Status:",status);
        let errorMessage="";
        if(typeof data === "string"){
            errorMessage= data;
        }
       switch (status) {
            case 400:
            case 401:
            case 403:
            case 409:
            case 422:
            case 502:
            case 503:
                toast.error(errorMessage);
                break;
            case 500:
                router.navigate('/ServerError',{state:{error:data}});
                break;
            case 404:
                router.navigate('/notfound');
                break;

            default:
                toast.error("Something went wrong");
                break;
         }
    }
    api.dispatch(stopLoading());
    return result;
}