import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";


function Login() {
    let token = localStorage.getItem('token');
    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          return JSON.parse(jsonPayload);
    }

    
  const { t } = useTranslation();

  const [logEmail, setLogEmail] = useState();
  const [logPass, setLogPass] = useState();


  async function login(e) {
    e.preventDefault();
    await axios
      .post(
        `https://localhost:7079/api/Account/Login`,
        {
          Email: logEmail,
          Password: logPass,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        console.log(response);
        if (response.data.status === "success" || response.status === 200) {
          localStorage.setItem("token", response.data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Ugurla giris etdiz",
            showConfirmButton: true,
           
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Email və ya şifrə yanlışdır",
            showConfirmButton: true,
           
          });
        }
      })
      .catch(function (error) {});
  }

  return (
    <div className="login-inputs">
      <div className="my-3 me-3">
        <button
          type="button"
          className="btn btn-outline-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#create-movie"
        >
          {t("sign in")}
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

            <div>
              <TextField
                id="outlined-required-1"
                label="Email"
                className="login-input"
                type="email"
                autoComplete="off"
                onChange={(e) => setLogEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-required-2"
                label="Password"
                className="login-input mt-4"
                type="password"
                autoComplete="off"
                onChange={(e) => setLogPass(e.target.value)}
              />
            </div>
            <div className="login-input-links mt-4">
              <button className="btn btn-outline-primary sign-in-btn" onClick={(e) => login(e)}>
                {t("sign in")}
              </button>
              <Link className="forgot-password">{t("forgot password?")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
