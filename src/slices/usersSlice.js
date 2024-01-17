import { createSlice } from "@reduxjs/toolkit";
import usersJson from "../customers.json";

const initValue = {
    usersData: [...usersJson],
};

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: initValue,
    reducers: {
        addUser: (state, action) => {
            state.usersData = [...state.usersData, action.payload];
            state.isSuccessAdd = true;
        }
    },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
