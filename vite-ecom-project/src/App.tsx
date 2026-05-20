import { useState } from "react";

function App() {
  const [fruits, addFruits] = useState([
    { Name: "Mango", Price: "100", UOM: "KG" },
    { Name: "Banana", Price: "100", UOM: "KG" },
  ]);

  const setFruit = () => {
    addFruits((prevState) => [
      ...fruits,
      { Name: "Pine-Apple" + prevState.length, Price: "100", UOM: "KG" },
    ]);
  };

  return (
    <div>
      <h1 style={{ fontSize: "25px", fontFamily: "verdana" }}>Re-Store</h1>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>
            {item.Name} is available at the {item.Price}
          </li>
        ))}
      </ul>
      <button onClick={setFruit}>Add fruit</button>
    </div>
  );
}
export default App;
