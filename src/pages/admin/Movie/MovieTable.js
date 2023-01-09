import React, { useState, useEffect } from "react";
import MovieCreateBtn from "./MovieCreateBtn";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

function MovieTable() {
  let count = 1;
  const url = "https://localhost:7079";

  const [movies, setMovies] = useState([]);

  const [categories, setCategories] = useState([]);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const Reject = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //Get Movies from Api
  async function GetMovies() {
    await axios
      .get(`${url}/api/Movie/GetAll`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMovies(res.data);
      });
  }
   //Get Categories from Api
   async function GetCategories() {
    await axios.get(`${url}/api/MovieCategory/GetAll`).then((res) => {
      setCategories(res.data);
    });
  }

  useEffect(() => {
    GetMovies();
    GetCategories();
  }, []);

  //Delete Movie
  const DeleteMovie = async (id) => {
    await axios
      .delete(`${url}/api/Movie/Delete?id=${id}`, config)
      .then(function (response) {
        Swal.fire("", "Deleted", "success");
        console.log(response);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log(error);
      });
    GetMovies();
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">
            Movies
            <MovieCreateBtn />
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th> Movie Image </th>
                <th> Movie Name </th>
                <th> Movie Description </th>

                <th> Movie Length </th>
                <th> Movie Country </th>
                <th> Movie Year </th>
                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, i) => (
                <tr key={i}>
                  <td>{++count}</td>
                  <td className="py-1">
                    <img
                      style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "unset",
                      }}
                      src={`data:image/jpeg;base64,${movie.photo}`}
                      alt=""
                    />

                    {console.log(movie.photo)}
                  </td>
                  <td className="py-1">{movie.name}</td>
                  <td className="py-1">{movie.description}</td>
                  <td className="py-1">{movie.length} min</td>
                  <td className="py-1">{movie.country}</td>
                  <td className="py-1">{movie.releaseYear} s year</td>

                  <td>
                    <Link to={`/movieUpdate/${movie.id}`} state={categories}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => DeleteMovie(movie.id)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MovieTable;
