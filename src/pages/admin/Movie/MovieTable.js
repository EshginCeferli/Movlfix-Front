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
  const [nameInput, setNameInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [lengthInput, setLengthInput] = useState("");
  const [releaseInput, setReleaseInput] = useState("");
  const [posterInput, setPosterInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const [categories, setCategories] = useState([]);
  const [id, setId] = useState();

  let token = localStorage.getItem("token");
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
    await axios.get(`${url}/api/Movie/GetAll`).then((res) => {
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

  //Create Movie
  async function CreateMovie() {
    await axios
      .post(
        `${url}/api/Movie/Create`,
        {
          name: nameInput,
          description: descInput,
          length: lengthInput,
          poster: posterInput,
          releaseYear: releaseInput,
          country: countryInput,
          movieCategoryId: categoryInput,
        },
        config
      )
      .then((res) => {
        setNameInput("");
        setDescInput("");
        setLengthInput("");
        setReleaseInput("");
        setCountryInput("");
        setCategoryInput("");
        Success.fire({
          icon: "success",
          title: "Movie successfully created",
        });
      })
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
  }

  //Delete Movie
  const DeleteMovie = async (id) => {
    await axios
      .delete(`${url}/api/Movie/Delete?id=${id}`)
      .then(function (response) {
        Swal.fire("", "Deleted", "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
    GetMovies();
  };

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">
            <MovieCreateBtn
              nameInput={nameInput}
              setNameInput={setNameInput}
              descInput={descInput}
              setDescInput={setDescInput}
              lengthInput={lengthInput}
              setLengthInput={setLengthInput}
              posterInput={posterInput}
              setPosterInput={setPosterInput}
              releaseInput={releaseInput}
              setReleaseInput={setReleaseInput}
              countryInput={countryInput}
              setCountryInput={setCountryInput}
              categoryInput={categoryInput}
              setCategoryInput={setCategoryInput}
              categories={categories}
              setCategories={setCategories}
              CreateMovie={CreateMovie}
            />
          </th>
          <th scope="col">Name </th>
          <th scope="col">Description </th>
          <th scope="col">Length </th>
          <th scope="col">Poster image </th>
          <th scope="col">Release Year </th>
          <th scope="col">Producter Country </th>
          <th scope="col">Categories </th>
          <th scope="col">Settings </th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, i) => {
          return (
            <tr key={i}>
              <td scope="row">{count++}</td>
              <td>{movie.name}</td>
              <td>{movie.description}</td>
              <td>{movie.length}</td>
              <td>{movie.posterz}</td>
              <td>{movie.name}</td>
              <td>{movie.name}</td>
              <td>{movie.name}</td>
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
          );
        })}
      </tbody>
    </table>
  );
}

export default MovieTable;
