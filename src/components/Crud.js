import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Crud() {
  const createUrl = "https://localhost:7079/api/Movflix/Create"

  const [nameInput, setNameInput] = useState("");
  const [descInput, setDescInput] = useState("");

  async function CreateMovflix() {
    await axios.post(createUrl, {
      name: nameInput,
      description: descInput,

    })
      .then(res => {

        setNameInput("");
        setDescInput("");
        alert("success")
      })
      .catch(
        alert("fail")
      );
  }

  return (
    <div className="app">
      <input onChange={(e) => setNameInput(e.target.value)} value={nameInput} placeholder="name"></input>
      <input onChange={(e) => setDescInput(e.target.value)} value={descInput} placeholder="description"></input>
      <button type="submit" onClick={() => CreateMovflix() } >Create</button>      
    </div>
  );
}

export default Crud;
