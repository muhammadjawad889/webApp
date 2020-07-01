import React from "react";

const CheckInfo = ({ checkinfo }) => {
  return (
    <p>
      <b>{checkinfo ? "Booked" : "Not booked"}</b>
    </p>
  );
};

export default CheckInfo;
