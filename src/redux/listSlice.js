import { createSlice } from "@reduxjs/toolkit";

export const listItems = [];

const listSlice = createSlice({
  name: "list",
  initialState: { value: listItems },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { add } = listSlice.actions;
export default listSlice.reducer;
