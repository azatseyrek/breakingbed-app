import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./charactersSlice";



export const store = configureStore ({
    reducer: {
        charecters : charactersSlice,
    },
});