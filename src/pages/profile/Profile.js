import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";

function Profile() {
  const url = "https://localhost:7079";

  let token = localStorage.getItem("token");

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
  useEffect(() => {  
    if (token != null) {
      let usermail = parseJwt(token).sub[1];
      axios.get(`${url}/api/Account/GetUserByEmail/${usermail}`).then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  const [username, setUserName] = useState();
  const [fullname, setFullName] = useState();
  const [phonenumber, setPhoneNumber] = useState();

  async function updateuser(e) {
 
    e.preventDefault();
    await axios
      .put(
        `${url}/api/Account/UpdateUser/${user?.email}`,
        {
          UserName: username,
          FullName: fullname,
          PhoneNumber: phonenumber,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire(fullname, "Məlumatlarınız Uğurla Yeniləndi", "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }


  const { t } = useTranslation();
  return (
    <>
       <Navbar/>
     <div className="row justify-content-between container">
      <div className="col-lg-8 col-md-9 col-sm-12  mt-4">
        <h2 className="mt-5">{t("profiledata")}</h2>
        <div className="profile mt-5">
          <Form onSubmit={(e) => updateuser(e)}>
            <div className="mt-4 profilemenu">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="proflab">E-poçt</Form.Label>
                <Form.Control
                  type="email"
                  readOnly
                  defaultValue={user?.email}
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="proflab">FullName</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  defaultValue={user?.fullName}
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="proflab">UserName</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  defaultValue={user?.userName}
                  placeholder=""
                />
              </Form.Group>
            </div>
            <div className="mt-4 profilemenu">
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label className="proflab">Telefon Nömrəsi</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  defaultValue={user?.phoneNumber}
                  placeholder=""
                />
              </Form.Group>
            </div>

            <div className="mt-4 ">
              <div className="profilebut">
                <Button type="submit" className="profilebutton">
                  {t("savechanges")}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div></>
 
   
  );
}

export default Profile;
