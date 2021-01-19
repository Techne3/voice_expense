import React from "react";

//  makes a boolean  of 0 or 1.  isIncome will be selected 0 or 1 50% of the time
const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "} for {isIncome ? "$100 " : "$50 "}{" "}
      in Category {isIncome ? "Business " : "House "} for{" "}
      {isIncome ? "Monday " : "Tuesday "}
    </div>
  );
};

export default InfoCard;
