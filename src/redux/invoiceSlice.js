"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawOpen: false,
};

const invoiceSlice = createSlice({
     name: "invoice",
     initialState, 
     reducers:{
        drawerToggle: (state) => {
            state.drawOpen = !state.drawOpen
            console.log(state.drawOpen);
         },
     }
});

export default invoiceSlice.reducer;
export const { drawerToggle } = invoiceSlice.actions;