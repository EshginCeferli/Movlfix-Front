import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";


function Categories() {

  const { t } = useTranslation();

  const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";
  const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

  const [movies, setMovies] = useState([]);
  const [movieCategory, setMovieCategory] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  //Get Movie from Api
  async function getAllMovies() {
    await axios.get(baseUrlMovie).then((response) => {
      setMovies(response.data);
      setFilteredMovies(response.data);
    });
  }

  //Get Category from Api
  async function getAllCategories() {
    await axios.get(baseUrlMovie).then((response) => {
      setMovieCategory(response.data);
    });
  }

  useEffect(() => {
    getAllMovies();
    getAllCategories();
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
    <div className="widget blog-widget">
      <div className="widget-title mb-5">
        <h5 className="title">{t(`categories`)}</h5>
      </div>
      <div className="sidebar-cat">
        <ul>
          {movieCategory.map((category, index) => {
            return (
              <li key={index}>
                <button
                  className="action"
                  onClick={() => getFilteredList("Action")}
                >
                  {category.name}
                </button>{" "}
                <span>12</span>
              </li>
            );
          })}

         
        </ul>
      </div>
    </div>
  );
}

export default Categories;
