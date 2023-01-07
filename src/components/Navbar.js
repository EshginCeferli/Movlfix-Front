import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Cookies from "js-cookie";
import axios from "axios";
import { Container, Nav, Form, Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import "../assets/css/bootstrap.min.css";

const style = {
  login: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "500px",
    bgcolor: "background.paper",
    borderradius: "20px",
    boxShadow: 24,
    p: 4,
  },
  forgotstyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "270px",
    bgcolor: "background.paper",
    border: "px solid #000",
    boxShadow: 24,
    p: 4,
  },
  registerstyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "560px",
    bgcolor: "background.paper",
    border: "px solid #000",
    boxShadow: 24,
    p: 4,
  },
  userstyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "350px",
    bgcolor: "background.paper",
    border: "px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

function Navbar() {
  const navigate = useNavigate();
  //Language Settings
  const { t } = useTranslation();
  function changeLng(value) {
    document.cookie = `i18next=${value}`;
    window.location.reload(true);
  }

  const url = "https://localhost:7079";

  //Prop for api start
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [number, setNumber] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  //Prop for Api End
  const [email, setEmail] = useState();
  const [logpassword, setLogpassword] = useState();
  const [forgotmail, setForgotmail] = useState();

  async function register(e) {
    e.preventDefault();
    await axios
      .post(
        `${url}/api/Account/Register`,
        {
          Email: mail,
          Password: password,
          FullName: fullname,
          UserName: username,
          PhoneNumber: number,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        setRegisterOpen(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {});
  }

  async function login(e) {
    e.preventDefault();
    await axios
      .post(
        `${url}/api/Account/Login`,
        {
          Email: email,
          Password: logpassword,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        if (response.data.status === "success" || response.status === 200) {
          localStorage.setItem("token", response.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Signed in succesfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email or password is wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        setLoginOpen(false);
      })
      .catch(function (error) {});
  }

  async function resetpassword(e) {
    e.preventDefault();
    await axios
      .post(
        `${url}/api/Account/ForgotPassword`,
        {
          Email: forgotmail,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        setForgotOpen(false);
        setRegisterOpen(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(response);
      })
      .catch(function (error) {});
  }

  const handleOpen = () => {
    let toke = localStorage.getItem("token");
    if (toke == null) {
      handleLoginOpen();
    } else {
      handleProfileOpen();
    }
  };

  const [profile, setProfile] = useState(false);
  const handleProfileOpen = () => {
    setProfile(true);
  };
  const handleProfileClose = () => setProfile(false);

  const [forgotOpen, setForgotOpen] = useState(false);
  const handleForgotOpen = () => {
    setForgotOpen(true);
    setLoginOpen(false);
  };

  const handleForgotClose = () => setForgotOpen(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
    setForgotOpen(false);
  };
  const [registerOpen, setRegisterOpen] = useState(false);
  const handleRegisterOpen = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };
  const handleLoginClose = () => setLoginOpen(false);
  const handleRegisterClose = () => setRegisterOpen(false);

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

  function clearToken(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Signed out",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div>
      <>
        {/* header-area */}
        <header>
          <div id="sticky-header" className="menu-area transparent-header">
            <div className="container custom-container">
              <div className="row">
                <div className="col-12">
                  <div className="mobile-nav-toggler">
                    <i className="fas fa-bars" />
                  </div>
                  <div className="menu-wrap">
                    <nav className="menu-nav show">
                      <div className="logo">
                        <NavLink to="/">
                          <img src="/images/logo/logo.png" alt="cam" />
                        </NavLink>
                      </div>
                      <div className="navbar-wrap main-menu d-none d-lg-flex">
                        <ul className="navigation">
                          <li className="active menu-item-has-children">
                            <NavLink to="/">{t(`home`)}</NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/movie">{t(`movie`)}</NavLink>
                          </li>
                          <li>
                            <NavLink to="/pricing">{t(`pricing`)}</NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/blog">{t(`blog`)}</NavLink>
                          </li>
                          <li>
                            <NavLink to="/contact">{t(`contact`)}</NavLink>
                          </li>
                          <li>
                            <NavLink to="/dashboard">{t(`dashboard`)}</NavLink>
                          </li>
                          <li>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=" />
                          </li>
                        </ul>
                      </div>
                      <div className="header-action d-none d-md-block">
                        <ul>
                          <li className="header-search">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#search-modal"
                            >
                              <i className="fas fa-search" />
                            </a>
                          </li>
                          <li className="header-lang">
                            <form action="#">
                              <div className="icon">
                                <i className="fas fa-sharp fa-solid fa-globe"></i>
                              </div>
                              <select
                                name=""
                                id=""
                                defaultValue={Cookies.get("i18next")}
                                onChange={(e) => changeLng(e.target.value)}
                              >
                                <option className="select-option" value="en">
                                  Eng
                                </option>
                                <option className="select-option" value="az">
                                  Az
                                </option>
                              </select>
                            </form>
                          </li>

                          <button className="btn" onClick={handleOpen}>
                            <i className="far fa-user-circle"></i>
                          </button>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  {/* Mobile Menu  */}
                  <div className="mobile-menu">
                    <div className="close-btn">
                      <i className="fas fa-times" />
                    </div>
                    <nav className="menu-box">
                      <div className="nav-logo">
                        <a href="index.html">
                          <img src="img/logo/logo.png" alt="" title="" />
                        </a>
                      </div>
                      <div className="menu-outer">
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                      </div>
                      <div className="social-links">
                        <ul className="clearfix">
                          <li>
                            <a href="#">
                              <span className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-pinterest-p" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="menu-backdrop" />
                  {/* End Mobile Menu */}
                  {/* Modal Search */}
                  <div
                    className="modal fade"
                    id="search-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <form>
                          <input type="text" placeholder="Search here..." />
                          <button>
                            <i className="fas fa-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Modal Search-end */}
                </div>
              </div>
            </div>
          </div>
        </header>

        <Container>
          {/* Login Modal */}
          <Modal
            open={loginOpen}
            onClose={handleLoginClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.login} className="overflow-hidden">
              <div className="modal-size">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className="yellow"></span>
                  Login
                </Typography>
                <Typography
                  component="span"
                  id="modal-modal-body"
                  sx={{ mt: 2 }}
                >
                  <Form onSubmit={(e) => login(e)}>
                    <Form.Group
                      className="mb-3 mt-5"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 mt-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        outline="yellow"
                        type="password"
                        onChange={(e) => setLogpassword(e.target.value)}
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Button className="login" onClick={handleForgotOpen}>
                      {t("forget password?")}
                    </Button>
                    <Button
                      className="warning login mt-3"
                      size="sm"
                      type="submit"
                    >
                      {" "}
                      {t("sign in")}
                    </Button>{" "}
                  </Form>
                  <p className="mt-5"> {t("Are you new in Movlfix?")}</p>
                  <Button className="regist" onClick={handleRegisterOpen}>
                    {t("registration")}
                  </Button>
                </Typography>
              </div>
            </Box>
          </Modal>
          {/* Forgot Pass Modal */}
          <Modal
            open={forgotOpen}
            onClose={handleForgotClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.forgotstyle} className="overflow-hidden">
              <div className="modal-size">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className="yellow"></span>
                  {t("reset password")}
                </Typography>
                <Typography
                  component="span"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  <Form onSubmit={(e) => resetpassword(e)}>
                    <Form.Group
                      className="mb-3 mt-5"
                      controlId="formBasicForgotEmail"
                    >
                      <Form.Control
                        type="email"
                        onChange={(e) => setForgotmail(e.target.value)}
                        placeholder={t("enter email")}
                      />
                    </Form.Group>
                    <Button className="warning login" size="sm" type="submit">
                      {" "}
                      {t("reset")}
                    </Button>{" "}
                    <Button className="regist" onClick={handleLoginOpen}>
                      {t("sign in")}
                    </Button>
                  </Form>
                </Typography>
              </div>
            </Box>
          </Modal>
          {/* Register Modal */}
          <Modal
            open={registerOpen}
            onClose={handleRegisterClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.registerstyle} className="overflow-hidden">
              <div className="modal-size">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className="yellow"></span>
                  Register
                </Typography>
                <Typography
                  component="span"
                  id="modal-modal-body"
                  sx={{ mt: 2 }}
                >
                  <Form onSubmit={(e) => register(e)}>
                    <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder={t("name/surname")}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="formBasicSurname"
                    >
                      <Form.Control
                        type="text"
                        placeholder={t("username")}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="formBasicMobilr"
                    >
                      <Form.Control
                        type="string"
                        placeholder={t("mobile")}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="formBasicRegistEmail"
                    >
                      <Form.Control
                        type="email"
                        placeholder={t("enter email")}
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        outline="yellow"
                        type="password"
                        placeholder={t("password")}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      className="warning regist mt-4"
                      size="sm"
                      type="submit"
                    >
                      {" "}
                      {t("registration")}
                    </Button>
                    <Button className="regist" onClick={handleLoginOpen}>
                      {t("sign in")}
                    </Button>
                  </Form>
                </Typography>
              </div>
            </Box>
          </Modal>

          {/* Profile Modal */}
          <Modal
            open={profile}
            onClose={handleProfileClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.userstyle} className="overflow-hidden">
              <div className="modal-size">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className="yellow"></span>
                  <span>{user?.fullName}</span>
                </Typography>
                <Typography
                  component="span"
                  id="modal-modal-body"
                  sx={{ mt: 2 }}
                >
                  <div className="mt-5 ordersidebar">
                    <ul>
                      <li className="p-2">
                        <Link
                          to={"/profile"}
                          onClick={(e) => handleProfileClose(e)}
                        >
                          Profil
                        </Link>
                      </li>

                      <li className="p-2">
                        <Link
                          to={"/updatepassword"}
                          onClick={(e) => handleProfileClose(e)}
                        >
                          {t("shifreyenile")}
                        </Link>
                      </li>
                      <li className="p-2">
                        <Link to={"/"} onClick={(e) => handleProfileClose(e)}>
                          <button
                            className="logout"
                            onClick={(e) => clearToken(e)}
                          >
                            {t("logout")}
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Typography>
              </div>
            </Box>
          </Modal>
        </Container>
        {/* header-area-end */}
      </>
    </div>
  );
}

export default Navbar;
