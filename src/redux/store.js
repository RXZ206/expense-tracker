import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import incomeReducer from "./incomeSlice";
import expenseReducer from "./expenseSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    income: incomeReducer,
    expense: expenseReducer,
  },
});
