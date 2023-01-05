import CalenderHeader from "./CalenderHeader";
import ExpenseList from "./ExpenseList";
import "../../App.css";
import moment from "moment";
import { useState } from "react";

const Calender = () => {
  const [expense, setExpense] = useState([
    {
      id: "e1",
      title: "Party Suit",
      price: 3500,
      date: moment("12-05-2022"),
    },
    {
      id: "e2",
      title: "StarBucks",
      price: 200,
      date: moment("11-24-2022"),
    },
    {
      id: "e3",
      title: "Train Tickets",
      price: 1200,
      date: moment("12-03-2022"),
    },
  ]);
  const expenseDetails = (model) => {
    debugger;
    model.id = (expense.length + 1).toString();
    let newList = [model, ...expense];
    setExpense(newList, () => {});
  };
  console.log("expense", expense);
  return (
    <>
      <div className="main_background">
        <div>
          <CalenderHeader expenseDetails={expenseDetails} />
          <div className="expenseList_background">
            {expense.map((item) => {
              return (
                <ExpenseList
                  title={item.title}
                  ammount={item.price}
                  date={item.date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Calender;
