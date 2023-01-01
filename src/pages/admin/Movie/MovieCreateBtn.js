import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTranslation } from "react-i18next";

function MovieCreateBtn(props) {
  const { t } = useTranslation();

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
                    onChange={(e) => props.setNameInput(e.target.value)}
                    value={props.nameInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Name")}
                    variant="outlined"
                  />
                  <TextField
                    onChange={(e) => props.setPosterInput(e.target.value)}
                    value={props.posterInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Name")}
                    variant="outlined"
                  />
                </div>

                <div className="col-6">
                  <TextField
                    onChange={(e) => props.setDescInput(e.target.value)}
                    value={props.descInput}
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
                    onChange={(e) => props.setLengthInput(e.target.value)}
                    value={props.lengthInput}
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
                    onChange={(e) => props.setReleaseInput(e.target.value)}
                    value={props.releaseInput}
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
                    onChange={(e) => props.setCountryInput(e.target.value)}
                    value={props.countryInput}
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
                      <InputLabel id="demo-simple-select-label">{t("resource")}</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.resourceInput}
                        label={t("resource")}
                        onChange={(e) => props.setCategoryInput(e.target.value)}
                        defaultValue=""
                      >
                        {props.categories.map(res => (
                          <MenuItem key={res.id} value={res.id}>{res.name}</MenuItem>
                        ))}


                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={() => props.CreateMovie()} data-bs-dismiss="modal" className="btn btn-outline-primary student-button">{t("save")}</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning student-button">{t("cancel")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCreateBtn;
