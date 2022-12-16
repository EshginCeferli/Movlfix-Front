import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories";

function Crud() {
  const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";

  const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  async function getAll() {
    await axios.get(baseUrlMovie).then((response) => {
      setMovies(response.data);
      setFilteredMovies(response.data);
    });
  }

  useEffect(() => {
    getAll();
  }, []);

  function getFilteredList(category) {
    if (category === "All") {
      setFilteredMovies(movies);
    } else {
      var filteredMovies = movies.filter(
        (item) =>
          item.movieCategory.name.toLowerCase() === category.toLowerCase()
      );
      setFilteredMovies(filteredMovies);
    }
  }

  return (
    <div className="app">
      <button className="all" onClick={() => getFilteredList("All")}>
        All
      </button>
      <button className="action" onClick={() => getFilteredList("Action")}>
        Action
      </button>
      <button className="action" onClick={() => getFilteredList("Cat1")}>
        Cat1
      </button>
      <button className="action" onClick={() => getFilteredList("Drama")}>
        Drama
      </button>
      <ul>
        {filteredMovies.map(function (movie, i) {
          return <li key={i}>{movie.name}</li>;
        })}
      </ul>
      <div className="filter-container">
        <div>Filter by Category:</div>
        <div>
          <select name="category-list" id="category-list">
            <option value="">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Aquatics">Aquatics</option>
          </select>
        </div>
      </div>
      <div className="sport-list"></div>
    </div>
  );
}

export default Crud;
