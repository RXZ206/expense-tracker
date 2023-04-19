import { React } from "react";
import { useSelector } from "react-redux";

function History() {
  const list = useSelector((state) => state.list.value);
  const itemsList = list.map((item) => {
    return (
      <li
        key={item.id}
        className={
          item.type === "+"
            ? "my-3 bg-white w-[20rem] h-[2.5rem] flex justify-between items-center shadow-md rounded-sm border-r-[5px] border-r-[#2ecc71]"
            : "my-3 bg-white w-[20rem] h-[2.5rem] flex justify-between items-center shadow-md rounded-sm border-r-[5px] border-r-red-600"
        }
      >
        <p className="ml-2 font-semibold">{item.name}</p>
        <p className="mr-2 font-semibold">
          {parseFloat(item.amount) > 0 ? "+" + item.amount : item.amount}
        </p>
      </li>
    );
  });
  return (
    <div className="w-[20rem] flex flex-col mt-10">
      <h5 className="font-semibold text-lg">History</h5>
      <hr className="h-[2px] bg-gray-400 my-2" />
      <ul>{itemsList}</ul>
    </div>
  );
}

export default History;
