import "./styles.css";

import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Pomme" }
  ]);

  const handleClick = (id) => {
    console.log(id);
    const fruitsCopy = [...fruits];

    const fruitsUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    setFruits(fruitsUpdated);
  };

  return (
    <div>
      <h1> Test </h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom} <button onClick={() => handleClick(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
