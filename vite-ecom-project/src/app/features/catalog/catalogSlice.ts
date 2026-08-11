import { createSlice } from "@reduxjs/toolkit";
import type { ProductParams } from "../../models/ProductParams";

const initialState: ProductParams = {
  pageNumber: 1,
  pageSize: 10,
    orderBy: 'asc',
    searchTerm: '',
    brands: [],
    types: [],
};

export const catalogSlice = createSlice({
 name:'catalogSlice',
initialState,
reducers: {
  setPageNumber(state, action){state.pageNumber = action.payload;},    //use method shorthand syntax for reducers
  setPageSize: (state, action) => {state.pageSize = action.payload;}, //use arrow function syntax for reducers
    setOrderBy: (state, action) => {state.orderBy = action.payload;},
    setSearchTerm: (state, action) => {state.searchTerm = action.payload;},
    setBrands: (state, action) => {state.brands = action.payload;},
    setTypes: (state, action) => {state.types = action.payload;},
    resetProductParams: () => {return initialState}                     //use return statement to reset state to initialState
}})

 export const {setPageNumber, setPageSize, setOrderBy, setSearchTerm, setBrands, setTypes, resetProductParams} = catalogSlice.actions;
