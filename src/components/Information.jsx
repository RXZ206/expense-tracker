import React from "react";
import { useSelector } from "react-redux";

function Information() {
  const income = useSelector((state) => state.income.value);
  const expense = useSelector((state) => state.expense.value);
  return (
    <div>
      <h4 className="uppercase font-semibold mt-12">Your Balance</h4>
      <h1 className="font-bold text-3xl mb-2">
        ${(income - expense).toFixed(2)}
      </h1>
      <div className="flex bg-white rounded-lg justify-center items-center border-1 shadow-xl w-[20rem] h-[10rem] ">
        <div className="flex flex-col items-center border-gray-200 border-r-[1px] h-16 w-full">
          <h4 className="uppercase font-semibold">income</h4>
          <h4 className="font-bold text-lg text-[#2ecc71]">
            ${income.toFixed(2)}
          </h4>
        </div>
        <div className="flex flex-col items-center border-gray-200 border-l-[1px] h-16 w-full">
          <h4 className="uppercase font-semibold">expense</h4>
          <h4 className="font-bold text-lg text-red-600">
            ${expense.toFixed(2)}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Information;
