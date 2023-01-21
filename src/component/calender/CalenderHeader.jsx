import moment from "moment/moment";
import { useState } from "react";
import "../../App.css";
const CalenderHeader = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmmont, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [warning, setWarning] = useState("");

  function getTitle(e) {
    setEnterTitle(e.target.value);
  }
  function getAmount(e) {
    setEnterAmount(e.target.value);
  }
  function getDate(e) {
    setEnterDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      enterTitle.length !== 0 &&
      enterAmmont.length !== 0 &&
      enterDate.length !== 0
    ) {
      const expenseData = {
        title: enterTitle,
        price: enterAmmont,
        date: moment(enterDate),
      };
      props.expenseDetails(expenseData);

      console.log(expenseData);
      setWarning("");
      setEnterTitle("");
      setEnterAmount("");
      setEnterDate("");
    } else {
      setWarning("Please provide the all details");
    }
  };

  return (
    <>
      <div className="header_background">
        <div>
          <form onSubmit={submitHandler}>
            <div className="form_input">
              <div className="input_field">
                <p>Title</p>
                <input type="text" value={enterTitle} onChange={getTitle} />
              </div>
              <div className="input_field">
                <p>Amount</p>
                <input type="number" value={enterAmmont} onChange={getAmount} />
              </div>
              <div className="input_field">
                <p>Date</p>
                <input type="date" value={enterDate} onChange={getDate} />
              </div>
            </div>
            <div className="form_btn">
              <button type="submit">Add Expense</button>
              <div className="warning">{warning}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CalenderHeader;
