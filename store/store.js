import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./data/appSlice";


export const store = configureStore({
    reducer:{
        app: appSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})