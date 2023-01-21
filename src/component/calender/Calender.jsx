import CalenderHeader from "./CalenderHeader";
import ExpenseList from "./ExpenseList";
import "../../App.css";
import moment from "moment";
import { useEffect, useState } from "react";

const Calender = () => {
  const [expense, setExpense] = useState([]);
  function fetchData() {
    fetch("http://localhost:4000/Students")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setExpense(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const expenseDetails = (model) => {
    // model.id = (expense.length + 1).toString();
    // let newList = [model, ...expense];
    // setExpense(newList, () => {});
    fetch("http://localhost:4000/Students", {
      method: "POST",
      body: JSON.stringify(model),
      headers: {
        "content-Type": "application/json",
      },
    }).then((res) => fetchData());
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
                  key={item.id}
                  title={item.title}
                  ammount={item.price}
                  date={moment(item.date)}
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
