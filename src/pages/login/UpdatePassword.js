import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../../components/Footer";

function UpdatePassword() {
  const url = "https://localhost:7079";

  const navigate = useNavigate();
  const [repeatpass, setRepeatpass] = useState();

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

  const [user, setUser] = useState();
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token != null) {
      let email = parseJwt(token).sub[1];
      axios.get(`${url}/api/Account/GetUserByEmail/${email}`).then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  const [currentpassword, setCurrentPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  async function resetPassword(e) {
    e.preventDefault();
    if (repeatpass === newpassword) {
      await axios
        .put(
          `${url}/api/Account/UpdatePassword/${user?.email}`,
          {
            CurrentPassword: currentpassword,
            NewPassword: newpassword,
          },
          { "Content-Type": "multipart/form-data" }
        )
        .then(function (response) {
          Swal.fire("Şifrəniz Yeniləndi", "Updated", "success");
          navigate("/");
        })
        .catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">View Details</a>',
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        text: "Confirm password is wrong",
      });
    }
  }
  const { t } = useTranslation();

  return (
    <div style={{ backgroundImage: "url(/images/bg/blog_bg.jpg)" }}>
      <Navbar/>
      <div className="row justify-content-between container">
        <div className="col-12  mt-5 mb-5">
          <h2 className="mt-5">.</h2>
          <div className="passwords mt-5 " style={{ marginLeft :"20%"}}>
            <Form onSubmit={(e) => resetPassword(e)}>
              <div className="mt-4 updatepassw">
                <Form.Group className="mb-3" controlId="formBasicOldPassword">
                  <Form.Label className="labtext">
                    {t("currentpass")}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="labtext">{t("newpass")}</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label className="labtext">
                    {t("confirmnewpass")}{" "}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => setRepeatpass(e.target.value)}
                    placeholder=""
                  />
                  <p>
                    {repeatpass !== newpassword
                      ? "Confirm password is wrong"
                      : ""}
                  </p>
                </Form.Group>
              </div>
              <div className="mt-4 ">
                <div className="passbut">
                  <Button className="passbutton" type="submit">
                    {t("savechanges")}
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default UpdatePassword;
