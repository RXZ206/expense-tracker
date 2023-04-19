import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "income",
  initialState: { value: 0 },
  reducers: {
    plus: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { plus } = incomeSlice.actions;

export default incomeSlice.reducer;
