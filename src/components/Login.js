import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [logEmail, setLogEmail] = useState();
  const [logPass, setLogPass] = useState();
  const navigate = useNavigate();



  async function login() {

    function parseJwt(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    };

    
    await axios.post( `https://localhost:7079/api/Account/Login`, {
      Email: email,
      Password: password
    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {
        if (response.data.status === "success" || response.status === 200) {
          let userdet = parseJwt(response.data)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          if (userdet === "User") {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'You are not authorized to access this page',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            localStorage.setItem("token", JSON.stringify(response.data));           

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Ugurla giris etdiz',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/home')
          }

        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Email və ya şifrə yanlışdır',
            showConfirmButton: false,
            timer: 1500
          })
        }


      })
      .catch(function (error) {

      })
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
              <Link to="/home">Back to home</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
