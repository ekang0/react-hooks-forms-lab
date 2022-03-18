import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value)
  };

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  };

  function submitItemEvent(event){
   event.preventDefault();
    const newItem = {
    id: uuid(),
    name: name,
    //name: itemName,
    category: category,
    //category: itemCategory,
    };
   onItemFormSubmit(newItem);
   //setName("");
   //setCategory("Produce")
  };



  return (
    <form className="NewItem" onSubmit={submitItemEvent}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select 
        name="category" 
        value={category} 
        onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
