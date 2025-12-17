import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const calculate = () => {
    let result = 0;

    if (operation === "add") {
      result = num1 + num2;
    } 
    if (operation === "subtract") {
      result = num1 - num2;
    } 
    if (operation === "multiply") {
      result = num1 * num2;
    }

    setResults([...results, result]);
  };

  return (
    <div>
      <h3>Simple Calculator</h3>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <select onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <button onClick={calculate}>Perform Action</button>

      <h4>Results:</h4>
      {results.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Calculator;
