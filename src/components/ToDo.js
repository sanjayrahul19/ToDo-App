import React, { useState } from "react";
import Items from "./Items";
import "./ToDo.css";
const ToDo = () => {
  const [toDo, setToDo] = useState([]);
  const [list, setList] = useState("");

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (list === "") {
      alert("enter some text");
    } else {
      setToDo((preValue) => {
        return [...preValue, list];
      });
      setList("");
    }
  };

  const handleDelete = (id) => {
    let tempArr = toDo.filter((item, index) => {
      return index !== id;
    });
    setToDo(tempArr);
  };

  return (
    <div>
      <h1 className="heading">ToDo List App</h1>
      <div className="container">
        <form>
          <input
            type="text"
            value={list}
            onChange={handleChange}
            placeholder="What you want to do?"
          />
          <button className="button" onClick={handleClick}>
            Add
          </button>
        </form>
      </div>
      {toDo.length === 0 && (
        <p style={{ textAlign: "center", padding: "2rem" }}>No Items Added</p>
      )}
      {toDo.map((item, id) => {
        return (
          <div key={id}>
            <Items item={item} handleDelete={() => handleDelete(id)} />
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
