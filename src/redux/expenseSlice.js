import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: { value: 0 },
  reducers: {
    minus: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { minus } = expenseSlice.actions;
export default expenseSlice.reducer;
