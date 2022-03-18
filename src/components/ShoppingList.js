import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchBy] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const itemsToDisplay = items
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
    /*if (selectedCategory === "All") {
      return true
    } else {
    return item.category === selectedCategory
    }*/
  )
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
    /*if(item.name.toLowerCase().includes(search.toLowerCase())) {
      return true
    };*/
  );

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={search} 
      onSearchChange={setSearchBy}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
