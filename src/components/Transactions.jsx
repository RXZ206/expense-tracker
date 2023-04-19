import React, { useState } from "react";
import { add } from "../redux/listSlice";
import { plus } from "../redux/incomeSlice";
import { minus } from "../redux/expenseSlice";
import { useDispatch, useSelector } from "react-redux";

function Transactions() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const list = useSelector((state) => state.list.value);

  const dispatch = useDispatch();
  return (
    <div className="w-[20rem] flex flex-col mt-10">
      <h4 className="font-semibold text-lg">Add New Transaction</h4>
      <hr className="h-[2px] bg-gray-400 my-2" />
      <div className="flex flex-col">
        <div className="my-4 flex flex-col">
          <h5 className="font-semibold">Text</h5>
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            className="px-3 my-1 h-8 border border-gray-300"
            placeholder="Enter text..."
            type="text"
          />
        </div>
        <div className="my-4 flex flex-col">
          <h5 className="font-semibold">Amount</h5>
          <h5 className="font-semibold">
            (negative - expense, positive - income)
          </h5>
          <input
            onChange={(e) => {
              setAmount(e.target.value);
              let i = parseFloat(e.target.value);
              if (i > 0) {
                setType("+");
              } else {
                setType("-");
              }
            }}
            value={amount}
            className="px-3 my-1 h-8 border border-gray-300"
            placeholder="Enter amount..."
            type="text"
          />
        </div>
        <button
          onClick={() => {
            if (text !== null && amount !== "" && !/^[a-zA-Z]+$/.test(amount)) {
              dispatch(
                add({ name: text, type: type, amount: amount, id: list.length })
              );
              if (parseInt(amount) > 0) {
                dispatch(plus(parseFloat(amount)));
              } else {
                dispatch(minus(parseFloat(amount)));
              }
              setText("");
              setAmount("");
              setType("");
            }
          }}
          className="bg-[#9c88ff] px-4 w-[20rem] rounded-sm py-1 block text-white mx-auto"
        >
          Add transaction
        </button>
      </div>
    </div>
  );
}

export default Transactions;
