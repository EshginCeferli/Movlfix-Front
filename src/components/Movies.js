import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import FilteredMovies from "./FilteredMovies";

function Movies() {
  const { t } = useTranslation();

  //All Movie Url
  const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";

  //All Category Url
  const baseUrlCategory = "https://localhost:7079/api/MovieCategory/GetAll";

  //Filter items
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  let result = [];

  //get movies from db
  async function getAllMovies() {
    await axios.get(baseUrlMovie).then((response) => {
      setItems(response.data);
      setFilteredMovies(response.data);
    });
  }

  //Get categories from db
  async function getAllCategories() {
    await axios.get(baseUrlCategory).then((response) => {
      setCategorys(response.data);
    });
  }
  useEffect(() => {
    getAllMovies();
    getAllCategories();
  }, []);

  //Filter for category method
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

  //Search from filtered items method
  result = filteredMovies.filter((i) =>
    i.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div>
      <section
        className="movie-area movie-bg"
        style={{ backgroundImage: "url(/images/bg/movie_bg.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title">{t(`online streaming`)}</span>
                <h2 className="title">{t(`new release movies`)}</h2>
              </div>
            </div>
          </div>

          <div className="row tr-movie-active">
            <div className="col-3">
              <div className="widget blog-widget">
                <div className="widget-title mb-5">
                  <h5 className="title">{t(`categories`)}</h5>
                </div>
                <div className="sidebar-cat">
                  <input
                    placeholder="search movie"
                    type="text"
                    id="message"
                    name="message"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className="search-movie"
                  />

                  <ul>
                    <li>
                      {" "}
                      <NavLink
                        onClick={() => getFilteredList("All")}
                        className="filter-button"
                        style={{ color: "white" }}
                      >
                        All
                      </NavLink>
                    </li>

                    {categorys.map((category, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            style={{ color: "white" }}
                            className="filter-button"
                            onClick={() => getFilteredList(category.name)}
                          >
                            {category.name}
                          </NavLink>
                          <span>
                            {
                              items.filter(
                                (i) => i.movieCategory.name == category.name
                              ).length
                            }
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              {result.length == 0 ? (
                <h1>{t(`no result found for search :))`)}</h1>
              ) : (
                <FilteredMovies result={result} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
