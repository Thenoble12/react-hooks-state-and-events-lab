import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(!null);

  function handleSelect(selected) {
    selected.preventDefault();
    setSelectedCategory(selected.target.value)      
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={e => {handleSelect(e)}} name="filter">          
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
          (items.filter((e) => e.category === selectedCategory).length > 0)  ?
          (items.filter((e) => e.category === selectedCategory)
                .map((item) => (<Item key={item.id} name={item.name} category={item.category} />))) :
          (items.map((item) => (<Item key={item.id} name={item.name} category={item.category} />)))
        }
      </ul>
    </div>
  );
}

export default ShoppingList;