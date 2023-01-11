import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

import { useTranslation } from "react-i18next";

function CategoryCreateBtn() {
  const { t } = useTranslation();

  const url = "https://localhost:7079";

  const [category, setCategory] = useState();
  const [nameInput, setNameInput] = useState();

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

  //Get pricings from Api
  async function GetCategorys() {
    await axios.get(`${url}/api/MovieCategory/GetAll`, config).then((res) => {
      setCategory(res.data);
    });
  }

  useEffect(() => {
    GetCategorys();
  }, []);

  //Create Category
  async function CreateCategory() {
    await axios
      .post(
        `${url}/api/MovieCategory/Create`,
        {
          name: nameInput,
        },
        config
      )
      .then((res) => {
        window.location.reload();
        if (res.data.status === "success" || res.status === 200) {
          Success.fire({
            icon: "success",
            title: "Category successfully created",
          });
        }
      })
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
  }

  return (
    <div className="create-btn-area">
      <div className="my-3 me-3">
        <button
          type="button"
          className="btn btn-outline-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#create-Category"
        >
          +Add
        </button>
      </div>

      <div
        className="modal fade"
        id="create-Category"
        tabIndex="-1"
        aria-labelledquality="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close Category-button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container addition">
              {/* <h6 className="addition-title">{t("Create your Category")}</h6> */}
              <div className="row">
                <TextField
                  onChange={(e) => setNameInput(e.target.value)}
                  value={nameInput}
                  className="student-input"
                  id="outlined-basic"
                  label={t("Name")}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => CreateCategory()}
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

export default CategoryCreateBtn;
