import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foods, setFoods] = useState(items);

  function handleChange(e) {
    setSelectedCategory(e.target.value);
  }

  console.log(selectedCategory);

  const foodsToDisplay = foods.filter((food) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return food.category === selectedCategory;
    }
  });

  console.log(foodsToDisplay);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
