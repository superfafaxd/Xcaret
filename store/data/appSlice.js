import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        sistemLanguage:  null,
        deviceDetected: null,
       data: {},
       navbar: null,
       header: null,
       promotions: null,
       carousel: null,
       buttonBook: null,
       legals:null,
       prefooter: null,
       footer: null
    },
    reducers: {
        onLanguage: (state, { payload }) =>{
            state.sistemLanguage = payload;
        },
        onDeviceDetected: (state, { payload }) =>{
            state.deviceDetected = payload;
        },
        onLoadData: (state, { payload }) =>{
           // state.data = payload;
            state.navbar = payload.navbar;
            state.header = payload.header;
            state.promotions = payload.promotions;
            state.carousel = payload.carousel;
            state.buttonBook = payload.buttonBook;
            state.legals = payload.legals;
            state.prefooter = payload.prefooter;
            state.footer = payload.footer;
          
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLanguage, onDeviceDetected, onLoadData } = appSlice.actions;