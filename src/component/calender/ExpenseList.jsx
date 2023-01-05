import moment from "moment";
import { useState } from "react";
const ExpenseList = (props) => {
  const month = moment(props.date).format("MMM");
  const day = moment(props.date).format("DD");
  const year = moment(props.date).format("YYYY");

  let title = props.title;
  // const [state, setState] = useState(title);

  // function clicked() {
  //   setState("Updated!!");
  // }

  return (
    <>
      <div className="listCard">
        <div className="dateTitle">
          <div className="date">
            <p>{month}</p>
            <p>{year}</p>
            <p>{day}</p>
          </div>
          <div className="title">{title}</div>
        </div>

        <div className="price">
          <div className="priceCard">{"Rs " + props.ammount}</div>
          <div className="edit-title">
            {/* <button onClick={clicked}>Change Title</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
