import { legacy_createStore } from "@reduxjs/toolkit";
import currentReducer from "../features/contact/counterReduce";

export function configureTheStore() {
    return legacy_createStore(currentReducer);
}