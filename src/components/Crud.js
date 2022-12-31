import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories";
import Movies from "./Movies";
import Footer from "./Footer";

function Crud() {
  //All Movie Url
  const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";

  //All Category Url
  const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  let movies = [];

  async function getAllMovies() {
    await axios.get(baseUrlMovie).then((response) => {
      setItems(response.data);
      setFilteredMovies(response.data);
    });
  }

  async function getAllCategories() {
    await axios.get(baseUrlCategory).then((response) => {
      setCategorys(response.data);
    });
  }
  useEffect(() => {
    getAllMovies();
    getAllCategories();
  }, []);

  function getFilteredList(category) {
    if (category === "All") {
      return setFilteredMovies(items);
    } else {
      var filteredMovies = items.filter(
        (item) =>
          item.movieCategory.name.toLowerCase() === category.toLowerCase()
      );
      setFilteredMovies(filteredMovies);
    }
  }

  function searchItems(searchParam) {
    movies = filteredMovies.filter((i) =>
      i.name.toLowerCase().includes(searchParam.toLowerCase())
    );
    return movies;
  }

  return (
    <div className="app">
      <input
        placeholder="search movie"
        type="text"
        id="message"
        name="message"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>

      {searchItems(value).map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}

      <button onClick={() => getFilteredList("All")}>All</button>
      {categorys.map((category, i) => {
        return (
          <button key={i} onClick={() => getFilteredList(category.name)}>
            {category.name}
          </button>
        );
      })}
      
    </div>
  );
}

export default Crud;
