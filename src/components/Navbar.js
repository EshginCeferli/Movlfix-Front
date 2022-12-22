import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import "../assets/css/bootstrap.min.css";

function Navbar() {

  const { t } = useTranslation();

  function changeLng(value) {
    document.cookie = `i18next=${value}`;
    window.location.reload(true);
}

  return (
    <div>
      <>
        <ScrollTop />
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
                            <ul className="submenu">
                              <li className="active">
                                <a href="index.html">Home One</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Two</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/movie">Movie</NavLink>
                            <ul className="submenu">
                              <li>
                                <Link to="/movie">Movie</Link>
                              </li>
                              <li>
                                <Link to="/movieDetail">Movie Detail</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/pricing">Pricing</NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to="/blog">Blog</NavLink>
                            {/* <a href="#">blog</a> */}
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">Our Blog</a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/contact">Contact</NavLink>
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
                          <li className="header-btn">
                            <a href="#" className="btn">
                              Sign In
                            </a>
                          </li>
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
        {/* header-area-end */}
      </>
    </div>
  );
}

export default Navbar;
