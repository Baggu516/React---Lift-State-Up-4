import React, { useState } from "react";
import "./App.css";
import Child from "./Child";
function App() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const HandleRemove = (i) => {
    let temp = [...arr];
    temp.splice(i, 1);
    setArr([...temp]);
  };
  const HandleAdd = () => {
    setArr((prev) => [...prev, { name, price }]);
    setName("");
    setPrice("");
  };
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="items">
        <h4>Item Name : </h4>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="itemName"
        />
        <h4>Item Price :</h4>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          id="itemPrice"
        />
        <button onClick={HandleAdd}>Add</button>
      </div>

      <Child arr={arr} HandleRemove={HandleRemove} />
    </div>
  );
}

export default App;
