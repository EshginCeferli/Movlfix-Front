import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories";

function Crud() {

  //All Movie Url
  const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";

  //All Category Url
  const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

  const [movies, setMovies] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");

  // console.log(movies);

  //Searched Movie Url
  const searchUrlMovie = `https://localhost:7079/api/Movie/Search?search=${value}`;


  //SetMovie
  async function getAllMovies() {
    await axios.get(baseUrlMovie).then((response) => {
      setMovies(response.data);
      console.log(response.data);
    });
  }




  //SetCategory
  async function getAllCategories() {
    await axios.get(baseUrlCategory).then((response) => {
      setCategorys(response.data);
    });
  }

  //SearcedMoviesSet
  async function searchMovies() {
    {
      await axios.get(searchUrlMovie).then((response) => {
        setSearch(response.data);         
      });
    }
  }
  //Get All Movies From APi
  useEffect(() => {
    getAllMovies();
    getAllCategories();

  }, []);

  //Equalize filteredMovies to movies when get data from api
  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  //Change filteredMovies when start type9 
  useEffect(() => {
    setFilteredMovies(search)
  }, [search])

  
  useEffect(() => {
    searchMovies();
  }, [value]);

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
      <input
        placeholder="serach movie"
        type="text"
        id="message"
        name="message"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>

      <button onClick={() => getFilteredList("All")}>All</button>
      {categorys.map((category, i) => {
        return (
          <button key={i} onClick={() => getFilteredList(category.name)}>
            {category.name}
          </button>
        );
      })}

      <ul>
        {filteredMovies.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>

    </div>
  );
}

export default Crud;
