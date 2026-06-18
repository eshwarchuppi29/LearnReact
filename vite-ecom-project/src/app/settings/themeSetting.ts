import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme=()=>{
    const storedTheme= localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
}

const saveThemeToLocalStorage=(darkMode:boolean)=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
}

export const darkTheme= createSlice({
    name:"darkTheme",
    initialState:{
        darkMode: getInitialTheme()
    },
    reducers:{
        toggleDarkMode:(state)=>{
            state.darkMode= !state.darkMode;
            saveThemeToLocalStorage(state.darkMode);
        }
    }
})



export const { toggleDarkMode } = darkTheme.actions;