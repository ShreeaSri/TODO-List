import React from "react";

import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Cards className="expenses">
      <ExpenseItem
        // expense={expense[0]}
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        // expense={expense[1]}
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        // expense={expense[2]}
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        // expense={expense[3]}
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      ></ExpenseItem>
    </Cards>
  );
};

export default Expenses;
