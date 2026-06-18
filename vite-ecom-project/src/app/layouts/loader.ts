import { createSlice } from "@reduxjs/toolkit";

export const loadIndicator= createSlice({
    name: "loadIndicator",
    initialState: {isLoading: false},
    reducers: {
        startLoading: (state)=> {
            state.isLoading= true;
        },
        stopLoading: (state)=> {
            state.isLoading= false;
        }
    }
})

export const {startLoading, stopLoading}= loadIndicator.actions;