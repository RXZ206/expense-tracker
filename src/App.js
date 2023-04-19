import "./App.css";
import Information from "./components/Information.jsx";
import History from "./components/History.jsx";
import Transactions from "./components/Transactions.jsx";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <h1 className="font-lato text-2xl font-bold text-center mt-10">
        Expense Tracker
      </h1>
      <Information />
      <History />
      <Transactions />
    </div>
  );
}

export default App;
