import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTranslation } from "react-i18next";

function MovieCreateBtn() {
  const { t } = useTranslation();

  const url = "https://localhost:7079";

  const [movies, setMovies] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [descInput, setDescInput] = useState();
  const [lengthInput, setLengthInput] = useState();
  const [releaseInput, setReleaseInput] = useState();
  // const [posterInput, setPosterInput] = useState("");
  const [countryInput, setCountryInput] = useState();
  const [categoryInput, setCategoryInput] = useState();
  const [photo, setPhoto] = useState();

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
          // poster: posterInput,
          releaseYear: releaseInput,
          country: countryInput,
          movieCategoryId: categoryInput,
          photo: photo,
        },
        config
      )
      .then((res) => {       
        Success.fire({
          icon: "success",
          title: "Movie successfully created",
        });
        window.location.reload();
      })
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      reader.onerror = (error) => reject(error);
    });
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setPhoto(result);
    });
  }
  return (
    <div className="create-btn-area">
      <div className="my-3 me-3">
        <button
          type="button"
          className="btn btn-outline-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#create-movie"
        >
          +Add
        </button>
      </div>

      <div
        className="modal fade"
        id="create-movie"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title create-header" id="exampleModalLabel">
                {t("please fill the blank")}:
              </h5>
              <button
                type="button"
                className="btn-close movie-button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container addition">
              <h6 className="addition-title">{t("Create your movie")}</h6>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
              </div>
              <div className="row mt-2">
                <div className="col-6"></div>
              </div>
              <h6 className="mt-4 addition-title">{t("contact")}</h6>
              <div className="row">
                <div className="col-6">
                  <TextField
                    onChange={(e) => setNameInput(e.target.value)}
                    value={nameInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Name")}
                    variant="outlined"
                  />
                
                </div>

                <div className="col-6">
                  <TextField
                    onChange={(e) => setDescInput(e.target.value)}
                    value={descInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Description")}
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-6">
                  <TextField
                    autoComplete="off"
                    onChange={(e) => setLengthInput(e.target.value)}
                    value={lengthInput}
                    type="number"
                    className="student-input"
                    id="outlined-basic"
                    label="Movie Length (By minutes)"
                    variant="outlined"
                  />
                </div>
                <div className="col-6">
                  <TextField
                    autoComplete="off"
                    type="number"
                    onChange={(e) => setReleaseInput(e.target.value)}
                    value={releaseInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Release Year")}
                    variant="outlined"
                  />
                </div>
              </div>

              <div className="row my-3">
                <div className="col-6">
                  <TextField
                    autoComplete="off"
                    onChange={(e) => setCountryInput(e.target.value)}
                    value={countryInput}
                    type="text"
                    className="movie-input"
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                  />
                </div>
                <div className="col-6">
                  <Box sx={{ width: 210 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {t("category")}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categoryInput}
                        label={t("category")}
                        onChange={(e) => setCategoryInput(e.target.value)}
                        defaultValue=""
                      >
                        {categories.map((res) => (
                          <MenuItem key={res.id} value={res.id}>
                            {res.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <input
                  type="file"
                  onChange={(e) => base64Img(e.target.files[0])}
                ></input>
             
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => CreateMovie()}
                data-bs-dismiss="modal"
                className="btn btn-outline-primary student-button"
              >
                {t("save")}
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-outline-warning student-button"
              >
                {t("cancel")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCreateBtn;
