import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const url = "https://localhost:7079";

  async function login() {
    function parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    }

    await axios
      .post(`${url}/api/Account/Login`, {
        Email: email,
        Password: password,
      })
      .then(function (response) {
        if (response.data.status === "success" || response.status === 200) {
          let userdet = parseJwt(response.data)[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
          if (userdet === "User") {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "You are not authorized to access this page",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            localStorage.setItem("token", JSON.stringify(response.data));
      

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Ugurla giris etdiz",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard");
          }
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email və ya şifrə yanlışdır",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(function (error) {});
  }

  return (
    <div>
      <div className="login-inputs">
        <div>
          <TextField
            id="outlined-required-1"
            label="Email"
            className="login-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
       
            autoComplete="off"
          />
        </div>
        <div>
          <TextField
            id="outlined-required-2"
            label="Password"
            className="login-input mt-4"
            type="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
 
          />
        </div>
        <div className="login-input-links mt-4">
          <Link
            onClick={() => login()}
            className="btn btn-outline-primary sign-in-btn"
          >
            Sign In
          </Link>
          <Link to="/">Backt to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
