import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 345,
    category: "Investments",
    type: "Income",
    date: "2021-01-19",
    id: "1dba95f2-172f-4105-b27c-56059656de7a",
  },
  {
    amount: 23,
    category: "Clothes",
    type: "Expense",
    date: "2021-01-13",
    id: "43a06d1e-fbe0-4c03-983f-48027ec7dc0b",
  },
  {
    amount: 234,
    category: "Travel",
    type: "Expense",
    date: "2021-01-19",
    id: "973f1283-108d-4825-8aab-cef5c70110b1",
  },
  {
    amount: 234,
    category: "Salary",
    type: "Income",
    date: "2021-01-19",
    id: "2a9e2da2-5e21-4d48-9f17-c80465913777",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Actions Creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  console.log(transactions);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
