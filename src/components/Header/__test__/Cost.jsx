import React, { useState } from "react";
import { screen, render, fireEvent } from "@testing-library/react";

function CostInput() {
  const [value, setValue] = useState("");

  const removeDollarSign = (value) =>
    value[0] === "$" ? value.slice(1) : value;
  const getReturnValue = (value) => (value === "" ? "" : `$${value}`);

  const handleChange = (ev) => {
    ev.preventDefault();
    const inputtedValue = ev.currentTarget.value;
    const noDollarSign = removeDollarSign(inputtedValue);
    if (isNaN(noDollarSign)) return;
    setValue(getReturnValue(noDollarSign));
  };

  return (
    <>
      <hr />
      <p>Cost</p>
      <input value={value} aria-label="cost-input" onChange={handleChange} />
    </>
  );
}

export default CostInput;
