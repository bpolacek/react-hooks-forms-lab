import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({addNewItem}) {

const [newName, setNewName] = useState("");
const [newCategory, setNewCategory] = useState("Produce");

  function handleNewName(event){
    setNewName(event.target.value)
    console.log(event.target.value)
  }
  function handleNewCategory(event){
    setNewCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newName,
      category: newCategory,
    };
    addNewItem(newItem);
    console.log(newItem)
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNewName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleNewCategory} name="category">  
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
