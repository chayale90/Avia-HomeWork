import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  usersData: [],
  isReadJsonData: false,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: initValue,
  reducers: {
    setUsers: (state, action) => {
      state.usersData = [...action.payload];
      state.isReadJsonData =true
    },
    addUser: (state, action) => {
      state.usersData = [...state.usersData, action.payload];
      state.isSuccessAdd = true;
    },
  },
});

export const { addUser ,setUsers} = usersSlice.actions;
export default usersSlice.reducer;
