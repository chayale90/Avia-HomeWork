/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    darkMode: false
}

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: initValue,
    reducers: {
        changeDarkMode: (state, action) => {
            state.darkMode = !(state.darkMode)
        }
    }
})

export const { changeDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;